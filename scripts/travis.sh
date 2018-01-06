#!/bin/bash

sh scripts/update-samples-config.sh
cd custom-login
npm install
cd ..
cd okta-hosted-login
npm install
cd ..
npm test