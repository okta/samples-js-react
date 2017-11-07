#!/bin/bash -vx

cd ${OKTA_HOME}/${REPO}

# Use newer, faster npm
npm install -g npm@4.1.2

# Install required dependencies
npm install -g @okta/ci-update-package
npm install -g @okta/ci-pkginfo

SHRINKWRAP="$OKTA_HOME/$REPO/tools/wrap-dependencies/npm-shrinkwrap-ci.json"
if [ -f "$SHRINKWRAP" ];
then
  cp "$SHRINKWRAP" "$OKTA_HOME/$REPO/npm-shrinkwrap.json"
else
  echo "No CI shrinkwrap! Run \"npm run wrap\""
  exit $FAILED_SETUP
fi

if ! npm install --no-optional --unsafe-perm; then
  echo "npm install failed! Exiting..."
  exit ${FAILED_SETUP}
fi
