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

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    const config = this.props.route.config;
    this.state = {
      user: config.user,
    };
    this.state.iatFormatted = (new Date(this.state.user.iat * 1000)).toString();
    this.state.expFormatted = (new Date(this.state.user.exp * 1000)).toString();
    this.authClient = new OktaAuth({ url: config.oktaUrl });
  }

  logout() {
    this.authClient.session.close().then(() => {
      window.location = '/authorization-code/logout';
    });
  }

  render() {
    return (
      <p>
        <strong data-se="email">{this.state.user.email}</strong> is logged in!<br />
        {this.state.user.iat} - {this.state.iatFormatted}<br />
        {this.state.user.exp} - {this.state.expFormatted}<br />
        <a onClick={this.logout} data-se="logout-link" href="">Logout</a>
      </p>
    );
  }
}

Profile.propTypes = {
  route: React.PropTypes.object.isRequired,
};

export default Profile;
