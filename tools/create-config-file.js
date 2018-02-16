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
