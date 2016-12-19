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

/* eslint import/no-extraneous-dependencies:0, no-console:0, no-param-reassign:0 */

'use strict';

const path = require('path');
const chalk = require('chalk');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cons = require('consolidate');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../../webpack.config');
const handlers = require('./route-handlers');
const config = require('../../.samples.config.json');

const templateDir = path.resolve(__dirname, '../templates');

const server = new WebpackDevServer(webpack(webpackConfig), {
  setup: (app) => {
    // Use mustache to serve up the server side templates
    app.engine('mustache', cons.mustache);
    app.set('view engine', 'mustache');
    app.set('views', templateDir);

    // The authorization code flows are stateful - they use a session to
    // store user state (vs. relying solely on an id_token or access_token).
    app.use(cookieParser());
    app.use(session({
      secret: 'AlwaysOn',
      cookie: { maxAge: 3600000 },
      resave: false,
      saveUninitialized: false,
    }));

    // These are the routes that need to be implemented to handle the
    // authorization code scenarios
    app.get('/', handlers.scenarios);
    app.get('/authorization-code/login-redirect', handlers.loginRedirect);
    app.get('/authorization-code/login-custom', handlers.loginCustom);
    app.get('/authorization-code/profile', handlers.profile);
    app.get('/authorization-code/logout', handlers.logout);
    app.get('/authorization-code/callback', handlers.callback);
  },

  // Webpack Options
  compress: true,
  clientLogLevel: 'info',
  quiet: false,
  noInfo: false,
  lazy: false,
  stats: { colors: true },
});

server.listen(config.server.port, () => {
  console.log('==============================================================');
  console.log(chalk.bold('= DEV SERVER STARTED '));
  console.log(chalk.bold(`= Access it at: http://localhost:${config.server.port} `));
  console.log('==============================================================');
});
