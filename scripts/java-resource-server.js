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
