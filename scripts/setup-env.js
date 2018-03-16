/* eslint-disable consistent-return, no-console */

const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');

function sleep(millis) {
  return new Promise(resolve => setTimeout(resolve, millis));
}

function executeCommand(command) {
  exec(command, (err, stdout) => {
    if (err !== null) {
      return console.error(err);
    }
    return console.log(stdout);
  });
}

function copyConfig() {
  const command1 = 'cp okta-hosted-login/util/default-config.js okta-hosted-login/src/.samples.config.js';
  const command2 = 'cp custom-login/util/default-config.js custom-login/src/.samples.config.js';
  console.log('Copying the configuration files...');
  executeCommand(command1);
  executeCommand(command2);
}

function updateConfig(file) {
  if (process.env.ISSUER === undefined || process.env.CLIENT_ID === undefined) {
    console.log('[ERROR] Please set the ISSUER and CLIENT_ID Environment variables');
    return;
  }

  // const file = path.join(__dirname, '..', directory, '/src/.samples.config.js');
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
// Wait for 2 seconds for copy to complete
sleep(2000).then(() => {
  updateConfig(path.join(__dirname, '..', 'okta-hosted-login', '/src/.samples.config.js'));
  updateConfig(path.join(__dirname, '..', 'custom-login', '/src/.samples.config.js'));
});

cloneRepository('https://github.com/okta/samples-nodejs-express-4.git', 'samples-nodejs-express-4');
executeCommand('cd samples-nodejs-express-4; npm install;');
cloneRepository('https://github.com/okta/okta-oidc-tck.git', 'okta-oidc-tck');

updateConfig(path.join(__dirname, '..', 'samples-nodejs-express-4', '.samples.config.json'));
