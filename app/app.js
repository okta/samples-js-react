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

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Overview from './components/overview';
import LoginRedirect from './components/authorization-code/login-redirect';
import LoginCustom from './components/authorization-code/login-custom';
import Profile from './components/authorization-code/profile';
import initDoc from './util/doc';

export function bootstrap(config) {
  initDoc();
  render((
    <Router history={browserHistory}>
      <Route path="/authorization-code/login-redirect" component={LoginRedirect} config={config} />
      <Route path="/authorization-code/login-custom" component={LoginCustom} config={config} />
      <Route path="/authorization-code/profile" component={Profile} config={config} />
      <Route path="/" component={Overview} />
    </Router>
  ), document.querySelector(config.container));
}

export default bootstrap;
