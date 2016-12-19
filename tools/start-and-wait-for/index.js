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

/**
 * Starts a child process that resolves when the given msg is found. Useful
 * when starting a standup service whose ready signal is determined by stdout.
 */

/* eslint no-console:0 */

const childProcess = require('child_process');
const chalk = require('chalk');

module.exports = (cmd, args, msg, color) => {
  const name = `${cmd} ${args.join(' ')}`;
  const normal = chalk[color || 'yellow'];
  const bold = normal.bold.underline;
  console.log(normal(`Running "${name}" and waiting for "${msg}"`));
  return new Promise((resolve, reject) => {
    const child = childProcess.spawn(cmd, args, { encoding: 'utf8', detached: true });

    child.stdout.on('data', (buffer) => {
      const data = buffer.toString('utf8');
      console.log(normal(data));
      if (msg && data.indexOf(msg) > -1) {
        console.log(bold(`Found "${msg}" for "${name}", resolving`));
        resolve(child);
      }
    });

    child.stderr.on('data', (data) => {
      console.log(normal(`${data}`));
    });

    child.on('close', (code) => {
      console.log(normal(`"${name}" finished with exit code ${code}`));
      if (code) {
        reject();
      } else {
        resolve(child);
      }
    });

    child.on('error', (err) => {
      console.log(bold(`Failed to start ${name}`));
      console.log(bold(err));
      reject(err);
    });
  });
};
