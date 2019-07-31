/* eslint-disable consistent-return, no-console */

const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');

// Users can also provide the testenv configuration at the root folder
require('dotenv').config({ path: path.join(__dirname, '..', 'testenv') });

function startResourceServer() {
  const dir = path.join(__dirname, '..', 'samples-nodejs-express-4');
  if (!fs.existsSync(dir)) {
    console.error('[ERROR] samples-nodejs-express4 doesn\'t exist.');
    return;
  }

  if (process.env.ISSUER === undefined) {
    console.error('[ERROR] Please set the ISSUER Environment variable');
    return;
  }

  if (process.env.CLIENT_ID === undefined) {
    console.error('[ERROR] Please set the CLIENT_ID Environment variable');
    return;
  }

  const command = `node ${dir}/resource-server/server.js`;
  const options = {
    env: {
      ISSUER: process.env.ISSUER,
      SPA_CLIENT_ID: process.env.CLIENT_ID,
      PATH: process.env.PATH,
    },
  };
  exec(command, options, (err, stdout) => {
    if (err !== null) {
      return console.error(err);
    }
    return console.log(stdout);
  });
}

startResourceServer();
