#!/bin/bash -x

source ${OKTA_HOME}/${REPO}/scripts/setup.sh

create_log_group "Synk Scan"
dependency_scan
finish_log_group $?
