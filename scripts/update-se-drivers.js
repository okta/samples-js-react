/*
 * Copyright (c) 2018-2021, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

/* eslint no-console: 0 */
const axios = require('axios');
const { execSync, execFileSync } = require('child_process');

function getOS() {
  let os = process.platform;
  if (os === 'darwin') {
    os = 'MacOS';
  } else if (os === 'win32' || os === 'win64') {
    os = 'Windows';
  } else if (os === 'linux') {
    os = 'Linux';
  }
  return os;
}

const os = getOS();
console.log(`Operating System - ${os}`);

let chromeVersion;
if (os === 'MacOS') {
  const chromeVersionString = execSync('/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome --version').toString();
  // Get the major and minor version of the chrome version using regex (1 or more digits followed by a dot followed by 1 or more digits)
  const matchIndex = 0;
  chromeVersion = chromeVersionString.match(/(\d+(\.\d+)?)/)[matchIndex];
} else {
  chromeVersion = execSync('google-chrome --product-version').toString();
}

const chromeMajorVersion = chromeVersion.split('.')[0];
console.log(`Chrome Major Version - ${chromeMajorVersion}`);

const chromeDriverUrl = `https://chromedriver.storage.googleapis.com/LATEST_RELEASE_${chromeMajorVersion}`;

axios.get(chromeDriverUrl).then((response) => {
  const chromeDriverVersion = response.data;
  console.log(`Chrome Driver Version - ${chromeDriverVersion}`);

  execFileSync(`${__dirname}/../node_modules/protractor/bin/webdriver-manager`, ["update",  "--versions.chrome", chromeDriverVersion, "--gecko", "false", "--versions.standalone", "latest"]);
  console.log('Webdriver was updated');
}).catch((err) => {
  console.log(err);
});
