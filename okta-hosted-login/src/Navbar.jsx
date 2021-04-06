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

import { useOktaAuth } from '@okta/okta-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Icon, Image, Menu, Modal } from 'semantic-ui-react';
import config from './config';

const Navbar = () => {
  const [errorModalOpen, setErrorModalOpen] = React.useState(false);
  const { authState, oktaAuth } = useOktaAuth();

  // Note: Can't distinguish CORS error from other network errors
  const isCorsError = (err) => (err.name === 'AuthApiError' && !err.errorCode && err.xhr.message === 'Failed to fetch');

  // Build URL to "Trusted Origins" page in Admin panel
  const { issuer } = config.oidc;
  const baseUrl = issuer.split('/oauth2')[0];
  const hostParts = new URL(baseUrl).host.split('.');
  hostParts[0] += '-admin';
  const adminHost = hostParts.join('.');
  const corsAdminUrl = `https://${adminHost}/admin/access/api/trusted_origins`;

  // URL to guide for enabling CORS
  const guideUrl = 'https://developer.okta.com/docs/guides/enable-cors/granting-cors/';

  const login = async () => oktaAuth.signInWithRedirect();

  const logout = async () => {
    try {
      await oktaAuth.signOut();
    } catch (err) {
      if (isCorsError(err)) {
        setErrorModalOpen(true);
      } else {
        throw err;
      }
    }
  };

  // CORS error modal
  const errorModal = (
    <Modal
      onClose={() => setErrorModalOpen(false)}
      open={errorModalOpen}
      closeIcon
    >
      <Modal.Header>Network Error</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <p>Seems like logout API call resulted with CORS error.</p>
          <p>
            You may need to add your origin
            {' '}
            {window.location.origin}
            {' '}
            to list of trusted origins in your
            {' '}
            <a href={corsAdminUrl} target="_blank" rel="noreferrer">Okta Administrator Dashboard</a>
          </p>
          <p>
            Read
            {' '}
            <a href={guideUrl} target="_blank" rel="noreferrer">this guide</a>
            {' '}
            for more info.
          </p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );

  return (
    <div>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item header>
            <Image size="mini" src="/react.svg" />
            &nbsp;
            <Link to="/">Okta-React Sample Project</Link>
          </Menu.Item>
          {authState.isAuthenticated && (
          <Menu.Item id="messages-button">
            <Icon name="mail outline" />
            <Link to="/messages">Messages</Link>
          </Menu.Item>
          )}
          {authState.isAuthenticated && (
            <Menu.Item id="profile-button">
              <Link to="/profile">Profile</Link>
            </Menu.Item>
          )}
          {authState.isAuthenticated && (
            <Menu.Item id="logout-button" onClick={logout}>Logout</Menu.Item>
          )}
          {!authState.isPending && !authState.isAuthenticated && (
            <Menu.Item onClick={login}>Login</Menu.Item>
          )}
        </Container>
      </Menu>
      {errorModal}
    </div>
  );
};
export default Navbar;
