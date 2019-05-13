/*
 * Copyright (c) 2018, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

/* eslint-disable no-console */

'use strict';

const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

// Users can also provide the testenv configuration at the root folder
require('dotenv').config({ path: path.join(__dirname, '..', 'testenv') });

function updateConfig(file) {
  if (!process.env.ISSUER || !process.env.CLIENT_ID || !process.env.USERNAME || !process.env.PASSWORD) {
    console.log('[ERROR] Please set the necessary Environment variables (ISSUER, CLIENT_ID, USERNAME, PASSWORD)');
    process.exit(1);
  }

  const data = fs.readFileSync(file, 'utf8');
  let result = data.replace(/https:\/\/{yourOktaDomain}.com\/oauth2\/default/g, process.env.ISSUER);

  if (data.indexOf('{clientId}') >= 0) {
    result = result.replace(/{clientId}/g, process.env.CLIENT_ID);
  }

  if (data.indexOf('{spaClientId}') >= 0) {
    result = result.replace(/{spaClientId}/g, process.env.CLIENT_ID);
  }

  fs.writeFileSync(file, result, 'utf8');
}

function cloneRepository(repository, directory) {
  const dir = path.join(__dirname, '..', directory);
  if (fs.existsSync(dir)) {
    console.log(`${directory} is already cloned.`);
    return;
  }

  const command = `git clone ${repository}`;
  console.log(`Cloning repository ${directory}`);
  execSync(command);
}

updateConfig(path.join(__dirname, '..', 'okta-hosted-login', '/src/.samples.config.js'));
updateConfig(path.join(__dirname, '..', 'custom-login', '/src/.samples.config.js'));
cloneRepository('https://github.com/okta/samples-nodejs-express-4.git', 'samples-nodejs-express-4');
execSync(`cd ${path.join(__dirname, '..', 'samples-nodejs-express-4')} && npm install --unsafe-perm`);
updateConfig(path.join(__dirname, '..', 'samples-nodejs-express-4', '.samples.config.js'));
cloneRepository('https://github.com/okta/okta-oidc-tck.git', 'okta-oidc-tck');
