#!/bin/bash

sh scripts/setup-env.sh
cd custom-login
npm install
cd ..
cd okta-hosted-login
npm install
cd ..
npm test