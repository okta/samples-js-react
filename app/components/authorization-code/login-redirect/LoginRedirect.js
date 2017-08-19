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
import OktaAuth from '@okta/okta-auth-js/jquery';

class LoginRedirect extends React.Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    const config = this.props.route.config;
    this.authClient = new OktaAuth({
      url: config.oktaUrl,
      issuer: config.issuer,
      clientId: config.clientId,
      redirectUri: config.redirectUri,
      scopes: ['openid', 'email', 'profile'],
    });
  }

  login(e) {
    e.stopPropagation();
    e.preventDefault();
    this.authClient.token.getWithRedirect({ responseType: 'code' });
  }

  render() {
    return (
      <div>
        <p>
          Click <strong>Login with Okta</strong> to redirect to your Okta org for
          authentication.
        </p>
        <table className="ui collapsing celled table compact inverted grey">
          <thead>
            <tr>
              <th colSpan="2">If you&rsquo;re using the mock-okta server:</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>User</td><td><strong>george</strong></td></tr>
            <tr><td>Pass</td><td><strong>Asdf1234</strong></td></tr>
          </tbody>
        </table>
        <p>
          <button
            id="login"
            data-se="login-link"
            className="ui icon button blue"
            onClick={this.login}
          >
            <i className="sign in icon" />
            Login with Okta
          </button>
        </p>
      </div>
    );
  }
}

LoginRedirect.propTypes = {
  route: React.PropTypes.object.isRequired,
};

export default LoginRedirect;

