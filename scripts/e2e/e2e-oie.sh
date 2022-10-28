#!/bin/bash -x

source ${OKTA_HOME}/${REPO}/scripts/setup-e2e.sh

export ORG_OIE_ENABLED=true # This flag ensures the TCK tests run OIE tests
export USE_INTERACTION_CODE=true # This flag ensures that the self hosted widget uses interact code flow
export ISSUER=https://oie-signin-widget.okta.com/oauth2/default
export CLIENT_ID=0oa8lrg7ojTsbJgRQ696
export SPA_CLIENT_ID=0oa8lrg7ojTsbJgRQ696
export USERNAME=george@acme.com
export EMAIL_MFA_USERNAME=email-login@email.ghostinspector.com
get_secret prod/okta-sdk-vars/password PASSWORD
export SMS_MFA_USERNAME=sms-login@okta.com
export FB_USERNAME=ycfjikukbl_1613767309@tfbnw.net
get_secret prod/okta-sdk-vars/fb_password FB_PASSWORD
get_secret prod/okta-sdk-vars/twilio_account TWILIO_ACCOUNT
get_secret prod/okta-sdk-vars/twilio_api_token TWILIO_API_TOKEN

run_tests