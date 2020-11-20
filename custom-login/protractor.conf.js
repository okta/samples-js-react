/*!
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
/* eslint-disable */
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

// Load environment variables
require('./env');

var E2E_DIR = '../okta-oidc-tck/e2e-tests/custom-login/';
var config = require(E2E_DIR + 'conf.js').config;
config.specs = config.specs.map(function (path) {
  return E2E_DIR + path;
});

['CLIENT_ID', 'ISSUER', 'USERNAME', 'PASSWORD'].forEach(function(key) {
  console.log('ENVIRONMENT VAR "' + key + '"', process.env[key]); // TODO: REMOVEME
  if (!process.env[key]) {
    throw new Error('Environment variable "' + key + '" is not set');
  }
});

exports.config = config;