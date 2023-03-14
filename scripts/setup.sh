#!/bin/bash -xe

# Can be used to run a canary build against a beta AuthJS version that has been published to artifactory.
# This is available from the "downstream artifact" menu on any okta-auth-js build in Bacon.
# DO NOT MERGE ANY CHANGES TO THIS LINE!!
export AUTHJS_VERSION=""

create_log_group "Setup"
# Install required node version
export NVM_DIR="/root/.nvm"
setup_service node v12.13.0

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

install_beta_authjs () {
  npm config set strict-ssl false
  AUTHJS_URI=https://artifacts.aue1d.saasure.com/artifactory/npm-topic/@okta/okta-auth-js/-/@okta/okta-auth-js-${AUTHJS_VERSION}.tgz
  if ! npm install --no-save ${AUTHJS_URI}; then
    echo "AUTHJS_VERSION could not be installed: ${AUTHJS_VERSION}"
    exit ${FAILED_SETUP}
  fi
  npm config set strict-ssl true

  AUTHJS_INSTALLS=$(find . -type d -path "*/node_modules/@okta/okta-auth-js" -not -path "*/okta-signin-widget/*" | wc -l)

  find_cmd="find . -type d -path \"*/node_modules/@okta/okta-auth-js\" -not -path \"*/okta-signin-widget/*\""

  if [ $($find_cmd | wc -l) - qt 1 ]; then
    echo 'More than 1 auth-js install detected!'
    echo $(pwd)/$($find_cmd)
    exit {FAILED_SETUP}
  fi

  INSTALLED_VERSION = $("$find_cmd -exec bash -c \"cat package.json | jq '.dependencies.\"@okta/okta-auth-js\"'\" {} \;")
  if [ "$INSTALLED_VERSION" == "$AUTHJS_URI" ]; then
    echo 'Unexpected authjs version mismatch detected!'
    echo "expected=$AUTHJS_URI vs install=$INSTALLED_VERSION"
    exit {FAILED_SETUP}
  fi
}

if [ ! -z "$AUTHJS_VERSION" ]; then
  create_log_group "Install Beta AuthJS"
  echo "Installing AUTHJS_VERSION: ${AUTHJS_VERSION}"

  pushd ./custom-login
  echo "Installing beta authjs in ./custom-login"
  install_beta_authjs
  popd

  pushd ./okta-hosted-login
  echo "Installing beta authjs in ./okta-hosted-login"
  install_beta_authjs
  popd
  finish_log_group $?
fi