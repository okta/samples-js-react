/**
 * This is run after running `npm install` inside any of the samples.
 *
 * It copies the specified file to the cwd of the calling process.
 */
const path = require('path');
const fs = require('fs');

const colorsPath = path.join(process.cwd(), 'node_modules', 'colors');
const colors = require(colorsPath);

const defaultFilePath = path.join(process.cwd(), 'util', 'default-config.js');
const defaultFile = fs.readFileSync(defaultFilePath);
const newFilePath = path.join(process.cwd(), 'src', '.samples.config.js');

/* eslint-disable no-console */

module.exports = function createConfigFile() {
  if (!fs.existsSync(newFilePath)) {
    console.log('Creating default configuration file..');
    fs.writeFileSync(newFilePath, defaultFile);
  }
  console.log(colors.green('\nSample project is ready to go!  Please add your configuration to src/.samples.config.js, see the README for instructions.\n'));
};
