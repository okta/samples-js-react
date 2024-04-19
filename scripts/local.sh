#!/bin/bash

# if not running on bacon
if [ -z "${TEST_SUITE_ID}" ]; then
  export OKTA_HOME=$(cd -- "$( dirname -- "${BASH_SOURCE[0]}" )/.." &> /dev/null && pwd)
  export REPO="."
  export TEST_SUITE_TYPE_FILE=/dev/null
  export TEST_RESULT_FILE_DIR_FILE=/dev/null

  ### (known) Bacon exit codes
  # success
  export SUCCESS=0
  export PUBLISH_TYPE_AND_RESULT_DIR=0
  # failure
  export FAILURE=1
  export FAILED_SETUP=1
  export TEST_FAILURE=1
  export PUBLISH_TYPE_AND_RESULT_DIR_BUT_ALWAYS_FAIL=1

  # bacon commands
  create_log_group () {
    set +x
    echo "~*~*~~*~*~ $1 ~*~*~~*~*~ "
    set -x
  }

  finish_log_group () {
    set +x
    echo "~*~*~~*~*~ *~*~* ~*~*~~*~*~"
    set -x
  }

  setup_service () {
    echo 'noop'
  }

  get_vault_secret_key () {
    # ensures the env var is set
    key="$3"
    if [ -z "${!key}" ]; then
      echo "$key is not defined. Exiting..."
      exit 1
    fi
  }

  set -x  # when running locally, might as well see all the commands being ran
fi
