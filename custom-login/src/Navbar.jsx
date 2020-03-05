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
import { Container, Icon, Image, Menu } from 'semantic-ui-react';

const Navbar = () => {
  const { authState, authService } = useOktaAuth();

  const login = async () => authService.login('/');
  const logout = async () => authService.logout('/');

  return (
    <div>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as="a" header href="/">
            <Image size="mini" src="/react.svg" />
            &nbsp;
            Okta-React Sample Project
          </Menu.Item>
          {authState.isAuthenticated && (
          <Menu.Item id="messages-button" as="a" href="/messages">
            <Icon name="mail outline" />
            Messages
          </Menu.Item>
          )}
          {authState.isAuthenticated && <Menu.Item id="profile-button" as="a" href="/profile">Profile</Menu.Item>}
          {authState.isAuthenticated && <Menu.Item id="logout-button" as="a" onClick={logout}>Logout</Menu.Item>}
          {!authState.isPending && !authState.isAuthenticated && <Menu.Item as="a" onClick={login}>Login</Menu.Item>}
        </Container>
      </Menu>
    </div>
  );
};
export default Navbar;
