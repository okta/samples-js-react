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
import SignIn from '@okta/okta-signin-widget';

class LoginCustom extends React.Component {

  componentDidMount() {
    const config = this.props.route.config;
    const signIn = new SignIn({
      baseUrl: config.oktaUrl,
      clientId: config.clientId,
      redirectUri: config.redirectUri,
      authParams: {
        responseType: 'code',
        scopes: ['openid', 'email', 'profile'],
      },
      i18n: {
        en: {
          'primaryauth.title': 'Sign in with john/Asdf1234',
        },
      },
    });
    signIn.renderEl({ el: '#sign-in-container' }, () => {});
  }

  render() {
    return (
      <div id="sign-in-container" />
    );
  }
}

LoginCustom.propTypes = {
  route: React.PropTypes.object.isRequired,
};

export default LoginCustom;
