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

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { Container } from 'semantic-ui-react';
import config from './config';
import Home from './Home';
import Messages from './Messages';
import Navbar from './Navbar';
import Profile from './Profile';

const App = () => (
  <Router>
    <Security {...config.oidc}>
      <Navbar />
      <Container text style={{ marginTop: '7em' }}>
        <Route path="/" exact component={Home} />
        <Route path="/login/callback" component={LoginCallback} />
        <SecureRoute path="/messages" component={Messages} />
        <SecureRoute path="/profile" component={Profile} />
      </Container>
    </Security>
  </Router>
);
export default App;
