#!/bin/bash -xe

DIR=$(cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd)
ROOT="$DIR/.."

source $DIR/local.sh

# Can be used to run a canary build against a beta AuthJS version that has been published to artifactory.
# This is available from the "downstream artifact" menu on any okta-auth-js build in Bacon.
# DO NOT MERGE ANY CHANGES TO THIS LINE!!
export AUTHJS_VERSION=""

SAMPLES=("custom-login" "okta-hosted-login")

create_log_group "Setup"
  # Install required node version
  export NVM_DIR="/root/.nvm"
  setup_service node v16.18.1

  # Use the cacert bundled with centos as okta root CA is self-signed and cause issues downloading from yarn
  setup_service yarn 1.21.1 /etc/pki/tls/certs/ca-bundle.crt

  # Add yarn to the $PATH so npm cli commands do not fail
  export PATH="${PATH}:$(yarn global bin)"

  # Revert the cache-min setting, since the internal cache does not apply to
  # these repos (and causes problems in lookups)
  npm config set cache-min 10

  cd ${OKTA_HOME}/${REPO}
finish_log_group $?

create_log_group "NPM Install"
  # Install dependences.
  if ! npm install --ignore-scripts; then
    echo "npm install failed! Exiting..."
    exit ${FAILED_SETUP}
  fi

  # Run postinstall script
  if ! npm run postinstall; then
    echo "npm postinstall failed! Exiting..."
    exit ${FAILED_SETUP}
  fi
finish_log_group $?

install_siw_platform_scripts () {
  echo "Installing siw_platform_scripts"
  if ! yarn global add @okta/siw-platform-scripts ; then
    echo "siw-platform-scripts could not be installed"
    exit ${FAILED_SETUP}
  fi
}

install_artifact () {
  # $1 = package name
  # $2 = version
  echo "Installing artifact $1 $2"
  if ! siw-platform install-artifact -n $1 -v $2 ; then
    echo "$1 $2 could not be installed via siw-platform"
    exit ${FAILED_SETUP}
  fi
}

install_beta_authjs () {
  # $1 = sample dir name
  echo "Installing AuthJS ${AUTHJS_VERSION} to $1"

  # install dependencies with yarn (siw_platform_scripts works only with yarn)
  if ! yarn install; then
    echo "yarn install failed! Exiting..."
    exit ${FAILED_SETUP}
  fi

  # update package.json to use beta auth-js version
  json=$(cat ./package.json |  jq --arg version $AUTHJS_VERSION 'if .dependencies | has("@okta/okta-auth-js") then .dependencies["@okta/okta-auth-js"] = $version else . end') && \
  echo -E "${json}" > "./package.json"

  # use siw_platform_scripts
  install_artifact @okta/okta-auth-js "${AUTHJS_VERSION}"
  echo "AUTHJS_VERSION installed: ${AUTHJS_VERSION}"

  # verify single version of auth-js is installed
  # NOTE: okta-signin-widget will install it's own version of auth-js, filtered out
  AUTHJS_INSTALLS=$(find . -type d -path "*/node_modules/@okta/okta-auth-js" -not -path "*/okta-signin-widget/*" | wc -l)
  if [ $AUTHJS_INSTALLS -gt 1 ]; then
    echo 'More than 1 auth-js install detected!'
    yarn why @okta/okta-auth-js
    exit {FAILED_SETUP}
  fi
}

if [ ! -z "$AUTHJS_VERSION" ]; then
  create_log_group "Install AuthJS ${AUTHJS_VERSION}"
    install_siw_platform_scripts

    for sample in "${SAMPLES[@]}"
    do
      pushd $ROOT/$sample
        install_beta_authjs "${sample}"
      popd
    done
  finish_log_group $?
fi
