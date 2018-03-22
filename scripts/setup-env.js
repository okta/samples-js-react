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

/* eslint-disable consistent-return, no-console */

'use strict';

const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

function updateConfig(file) {
  if (process.env.ISSUER === undefined || process.env.CLIENT_ID === undefined) {
    console.error('[ERROR] Please set the ISSUER and CLIENT_ID Environment variables');
    process.exit(1);
  }

  const data = fs.readFileSync(file, 'utf8');
  let result = data.replace(/{clientId}/g, process.env.CLIENT_ID);
  result = result.replace(/https:\/\/{yourOktaDomain}.com\/oauth2\/default/g, process.env.ISSUER);
  fs.writeFileSync(file, result, 'utf8');
}

function updatePHPConfig() {
  const resourceServerDir = path.join(__dirname, '..', 'samples-php', 'resource-server');
  let command;
  if (process.platform === 'win32') {
    command = `copy ${path.join(resourceServerDir, '.env.dist')} ${path.join(resourceServerDir, '.env')}`;
  } else {
    command = `cp ${path.join(resourceServerDir, '.env.dist')} ${path.join(resourceServerDir, '.env')}`;
  }
  execSync(command);

  const org = process.env.ISSUER.split('/oauth2');
  const data = fs.readFileSync(path.join(resourceServerDir, '.env'), 'utf8');
  let result = data.replace(/CLIENT_ID=/g, `CLIENT_ID=${process.env.CLIENT_ID}`);
  result = result.replace(/REDIRECT_URI=/g, 'REDIRECT_URI=http://localhost:8080/implicit/callback');
  result = result.replace(/ORGANIZATION_URL=/g, `ORGANIZATION_URL=${org[0]}/`);
  fs.writeFileSync(path.join(resourceServerDir, '.env'), result, 'utf8');
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
cloneRepository('https://github.com/okta/samples-php.git', 'samples-php');
execSync(`cd ${path.join(__dirname, '..', 'samples-php', 'resource-server')} && composer install --ignore-platform-reqs`);
updatePHPConfig();
cloneRepository('https://github.com/okta/okta-oidc-tck.git', 'okta-oidc-tck');
