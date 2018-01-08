#!/bin/bash
cp okta-hosted-login/util/default-config.js okta-hosted-login/src/.samples.config.js
cp custom-login/util/default-config.js custom-login/src/.samples.config.js

# The environment variables (OKTA_DOMAIN, CLIENT_ID) are set in the travis repository settings
sed -i -- "s/{yourOktaDomain}/$OKTA_DOMAIN/g" okta-hosted-login/src/.samples.config.js
sed -i -- "s/{clientId}/$CLIENT_ID/g" okta-hosted-login/src/.samples.config.js

sed -i -- "s/{yourOktaDomain}/$OKTA_DOMAIN/g" custom-login/src/.samples.config.js
sed -i -- "s/{clientId}/$CLIENT_ID/g" custom-login/src/.samples.config.js
