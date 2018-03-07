#!/bin/bash
cp okta-hosted-login/util/default-config.js okta-hosted-login/src/.samples.config.js
cp custom-login/util/default-config.js custom-login/src/.samples.config.js

# The environment variables (ISSUER, CLIENT_ID) are set in the travis repository settings
# Escape the backslashes in ISSUER env var
issuer=$(echo "$ISSUER" | sed 's/\//\\\//g')
sed -i -- "s/https:\/\/{yourOktaDomain}.com\/oauth2\/default/$issuer/g" okta-hosted-login/src/.samples.config.js
sed -i -- "s/{clientId}/$CLIENT_ID/g" okta-hosted-login/src/.samples.config.js

sed -i -- "s/https:\/\/{yourOktaDomain}.com\/oauth2\/default/$issuer/g" custom-login/src/.samples.config.js
sed -i -- "s/{clientId}/$CLIENT_ID/g" custom-login/src/.samples.config.js

# Clone the resource-server repo and update the environment
[ ! -d samples-nodejs-express-4/ ] && git clone https://github.com/okta/samples-nodejs-express-4.git
cd samples-nodejs-express-4/
npm install

cd ../
sed -i -- "s/https:\/\/{yourOktaDomain}.com\/oauth2\/default/$issuer/g" samples-nodejs-express-4/.samples.config.json
sed -i -- "s/{clientId}/$CLIENT_ID/g" samples-nodejs-express-4/.samples.config.json
