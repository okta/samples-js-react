#! /usr/bin/env node

/*!
 * Copyright (c) 2015-2016, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

/* eslint import/no-dynamic-require:0 */
const cwd = process.cwd();
const path = require('path');
const exec = require('child_process').execSync;

const config = require(path.resolve(cwd, '.samples.config.json'));
const out = path.resolve(cwd, config.oktaSample.server.staticDir);

exec(`DIST_OUT=${out} npm run build`, { cwd: __dirname, stdio: 'inherit' });
