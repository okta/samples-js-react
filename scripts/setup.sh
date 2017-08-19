#!/bin/bash -vx

cd ${OKTA_HOME}/${REPO}

# Revert the cache-min setting, since the internal cache does not apply to
# these repos (and causes problems in lookups)
npm config set cache-min 10

# Use newer, faster npm
npm install -g npm@4.1.2

SHRINKWRAP="$OKTA_HOME/$REPO/tools/wrap-dependencies/npm-shrinkwrap-ci.json"
if [ -f "$SHRINKWRAP" ];
then
  cp "$SHRINKWRAP" "$OKTA_HOME/$REPO/npm-shrinkwrap.json"
else
  echo "No CI shrinkwrap! Run \"npm run wrap\""
  exit $FAILED_SETUP
fi

if ! npm install; then
  echo "npm install failed! Exiting..."
  exit ${FAILED_SETUP}
fi
