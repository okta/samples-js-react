/**
 * This is run after running `npm install` inside any of the samples
 */

// This creates a boilerplate config file for you

const fs = require('fs');
const path = require('path');

const defaultFile = fs.readFileSync(path.join(__dirname, 'default-config.js'));

const newFilePath = path.join(process.cwd(), 'src', '.samples.config.js');

module.exports = function createConfigFile() {
  if (!fs.existsSync(newFilePath)) {
    console.log('Creating default configuration file');

    fs.writeFileSync(newFilePath, defaultFile);
  }
};
