#!/bin/bash -x

source ${OKTA_HOME}/${REPO}/scripts/setup-e2e.sh

export ORG_OIE_ENABLED=true # This flag ensures the TCK tests run OIE tests
export USE_INTERACTION_CODE=true # This flag ensures that the self hosted widget uses interact code flow
export ISSUER=https://oie-signin-widget.okta.com/oauth2/default
export CLIENT_ID=0oa8lrg7ojTsbJgRQ696
export SPA_CLIENT_ID=0oa8lrg7ojTsbJgRQ696
export USERNAME=george@acme.com
get_vault_secret_key devex/samples-javascript password PASSWORD

run_tests