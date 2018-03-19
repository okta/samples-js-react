/* eslint-disable consistent-return, no-console */

'use strict';

const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

function executeCommand(command) {
  console.log(`Executing command ${command}`);
  execSync(command);
}

function copyConfig() {
  let command1;
  let command2;

  if (process.platform === 'Win32') {
    command1 = 'copy okta-hosted-login/util/default-config.js okta-hosted-login/src/.samples.config.js';
    command2 = 'copy custom-login/util/default-config.js custom-login/src/.samples.config.js';
  } else {
    command1 = 'cp okta-hosted-login/util/default-config.js okta-hosted-login/src/.samples.config.js';
    command2 = 'cp custom-login/util/default-config.js custom-login/src/.samples.config.js';
  }

  console.log('Copying the configuration files...');
  executeCommand(command1);
  executeCommand(command2);
}

function updateConfig(file) {
  if (process.env.ISSUER === undefined || process.env.CLIENT_ID === undefined) {
    console.log('[ERROR] Please set the ISSUER and CLIENT_ID Environment variables');
    return;
  }

  const data = fs.readFileSync(file, 'utf8');
  let result = data.replace(/{clientId}/g, process.env.CLIENT_ID);
  result = result.replace(/https:\/\/{yourOktaDomain}.com\/oauth2\/default/g, process.env.ISSUER);
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
  executeCommand(command);
}

copyConfig();
updateConfig(path.join(__dirname, '..', 'okta-hosted-login', '/src/.samples.config.js'));
updateConfig(path.join(__dirname, '..', 'custom-login', '/src/.samples.config.js'));
cloneRepository('https://github.com/okta/samples-nodejs-express-4.git', 'samples-nodejs-express-4');
executeCommand(`cd ${path.join(__dirname, '..', 'samples-nodejs-express-4')} && npm install`);
updateConfig(path.join(__dirname, '..', 'samples-nodejs-express-4', '.samples.config.json'));
cloneRepository('https://github.com/okta/okta-oidc-tck.git', 'okta-oidc-tck');
