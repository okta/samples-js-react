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
 *
 */

/*
 * We use a shrinkwrap file for internal CI, but don't expose it externally
 * because of versioning conflicts with NPM:
 * - NPM 4.0.0 removed support for partial shrinkwraps, but does tag optional
 *   and dev in the generated shrinkwrap file
 * - However, it does not act on the optional property - a dep marked optional
 *   still throws an error if it 404s (which our private modules will do)
 * - The common workaround prior to 4.x was to remove optional deps from the
 *   shrinkwrap in a post-shrinkwrap task, as described here:
 *   https://github.com/npm/npm/issues/2679
 * - This no longer works with the dropped support for partial shrinkwraps.
 *
 * The current workaround is to generate a shrinkwrap in this directory for
 * internal CI, and copy it over when we run it.
 */

/* eslint no-console:0 */

const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
const execSync = require('child_process').execSync;

// ----------------------------------------------------------------------------
// Setup

// Use 4.0.2, which includes many fixes to make shrinkwraps more consistent
const expectedNpmVersion = '4.0.2';
const rootDir = path.resolve(__dirname, '../../');

// ----------------------------------------------------------------------------
// Helper functions

function getNpmVersion() {
  return execSync('npm -v', { encoding: 'utf8' }).trim();
}

function generateShrinkwrap() {
  console.log(`Generating root shrinkwrap in ${rootDir}`);
  execSync('npm shrinkwrap --dev', { encoding: 'utf8', cwd: rootDir });
  return fs.readFileSync(path.resolve(rootDir, 'npm-shrinkwrap.json'));
}

function updateShrinkwrap(shrinkwrap) {
  console.log('Removing "from" and "resolved" from shrinkwrap');
  const replacer = (key, val) => {
    // Remove:
    // 1. resolved - remove internal registry urls
    // 2. from - reduce shrinkwrap churn when installing new dependencies
    if (key === 'resolved' || key === 'from') {
      return undefined;
    }
    return val;
  };
  return `${JSON.stringify(JSON.parse(shrinkwrap), replacer, 2)}\n`;
}

function writeCiShrinkwrap(shrinkwrap) {
  const out = path.resolve(__dirname, 'npm-shrinkwrap-ci.json');
  console.log(`Writing new shrinkwrap to ${out}`);
  fs.writeFileSync(out, shrinkwrap);
}

function deleteRootShrinkwrap() {
  const shrinkwrapPath = path.resolve(rootDir, 'npm-shrinkwrap.json');
  console.log(`Deleting root shrinkwrap from ${shrinkwrapPath}`);
  fs.unlinkSync(shrinkwrapPath);
}

// ----------------------------------------------------------------------------
// Init

const npmVersion = getNpmVersion();
if (npmVersion !== expectedNpmVersion) {
  const error = chalk.red(`
    Your npm version is ${npmVersion}, but we expect ${expectedNpmVersion}.
    Install ${expectedNpmVersion} by running:

    $ npm install -g npm@${expectedNpmVersion}
  `);
  throw new Error(error);
}

const shrinkwrap = generateShrinkwrap();
const updated = updateShrinkwrap(shrinkwrap);

writeCiShrinkwrap(updated);
deleteRootShrinkwrap();
