#!/bin/bash -vx

source $OKTA_HOME/robo-warrior/setupfiles/google-chrome-stable/google-chrome-stable-setup.sh 53.0.2785.143-1
source $OKTA_HOME/robo-warrior/setupfiles/xvfb/xvfb-entrypoint.sh start
source $OKTA_HOME/$REPO/scripts/setup.sh

export TEST_SUITE_TYPE="junit"
export TEST_RESULT_FILE_DIR="${REPO}/build2/reports/junit"

if ! npm test; then
  echo "npm test failed! Exiting..."
  exit ${TEST_FAILURE}
fi

echo $TEST_SUITE_TYPE > $TEST_SUITE_TYPE_FILE
echo $TEST_RESULT_FILE_DIR > $TEST_RESULT_FILE_DIR_FILE
exit $PUBLISH_TYPE_AND_RESULT_DIR;
