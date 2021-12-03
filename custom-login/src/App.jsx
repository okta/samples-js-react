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
import { Route, useHistory, Switch } from 'react-router-dom';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { Container } from 'semantic-ui-react';
import config from './config';
import Home from './Home';
import Messages from './Messages';
import Navbar from './Navbar';
import Profile from './Profile';
import CorsErrorModal from './CorsErrorModal';
import SIW from './SIW';

const oktaAuth = new OktaAuth(config.oidc);

const Default = ({ setCorsErrorModalOpen }) => <SIW {...{ setCorsErrorModalOpen, flow: 'default' }} />;
const Login = ({ setCorsErrorModalOpen }) => <SIW {...{ setCorsErrorModalOpen, flow: 'login' }} />;
const Register = ({ setCorsErrorModalOpen }) => <SIW {...{ setCorsErrorModalOpen, flow: 'signup' }} />;
const ResetPassword = ({ setCorsErrorModalOpen }) => <SIW {...{ setCorsErrorModalOpen, flow: 'resetPassword' }} />;
const UnlockAccount = ({ setCorsErrorModalOpen }) => <SIW {...{ setCorsErrorModalOpen, flow: 'unlockAccount' }} />;
const Proceed = ({ setCorsErrorModalOpen }) => <SIW {...{ setCorsErrorModalOpen, flow: 'proceed' }} />;

const App = () => {
  const history = useHistory(); // example from react-router

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  const customAuthHandler = () => {
    // Redirect to the /login page that has a CustomLoginComponent
    history.push('/login');
  };

  const onAuthResume = async () => {
    history.push('/login');
  };

  const [corsErrorModalOpen, setCorsErrorModalOpen] = React.useState(false);

  return (
    <Security
      oktaAuth={oktaAuth}
      onAuthRequired={customAuthHandler}
      restoreOriginalUri={restoreOriginalUri}
    >
      <Navbar {...{ setCorsErrorModalOpen }} />
      <CorsErrorModal {...{ corsErrorModalOpen, setCorsErrorModalOpen }} />
      <Container text style={{ marginTop: '7em' }}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login/callback" render={(props) => <LoginCallback {...props} onAuthResume={onAuthResume} />} />
          <Route path="/default" render={() => <Default {...{ setCorsErrorModalOpen }} />} />
          <Route path="/login" render={() => <Login {...{ setCorsErrorModalOpen }} />} />
          <Route path="/register" render={() => <Register {...{ setCorsErrorModalOpen }} />} />
          <Route path="/recover" render={() => <ResetPassword {...{ setCorsErrorModalOpen }} />} />
          <Route path="/unlock" render={() => <UnlockAccount {...{ setCorsErrorModalOpen }} />} />
          <Route path="/proceed" render={() => <Proceed {...{ setCorsErrorModalOpen }} />} />
          <SecureRoute path="/messages" component={Messages} />
          <SecureRoute path="/profile" component={Profile} />
        </Switch>
      </Container>
    </Security>
  );
};

export default App;
