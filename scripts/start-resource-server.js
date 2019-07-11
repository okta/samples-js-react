/* eslint-disable consistent-return, no-console */

const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');
// Users can also provide the testenv configuration at the root folder
/* eslint-disable global-require */
require('dotenv').config({ path: path.join(require('os').homedir(), '.okta', 'testenv') });
require('dotenv').config({ path: path.join(__dirname, '..', 'testenv') });
/* eslint-disable global-require */

function startResourceServer() {
  const dir = path.join(__dirname, '..', 'samples-java-spring');
  if (!fs.existsSync(dir)) {
    console.error("[ERROR] samples-java-spring doesn't exist.");
    return;
  }

  if (process.env.ISSUER === undefined) {
    console.error('[ERROR] Please set the ISSUER Environment variable');
    return;
  }

  const command = `mvn -Dokta.oauth2.issuer=${process.env.ISSUER} -f samples-java-spring/resource-server/pom.xml`;

  exec(command, { maxBuffer: 1024 * 2000 }, (err, stdout) => {
    if (err !== null) {
      return console.error(err);
    }
    return console.log(stdout);
  });
}

startResourceServer();
