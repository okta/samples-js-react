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
      <div className="profile">
        <h2 className="ui icon header">
          <i className="hand peace icon" />
          <div className="content">
            Signed In
          </div>
        </h2>
        <table className="ui collapsing celled table inverted black">
          <thead>
            <tr>
              <th colSpan="2">Some claims from the id_token</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>email</td><td data-se="email">{this.state.user.email}</td></tr>
            <tr><td>exp</td><td>{this.state.expFormatted}</td></tr>
          </tbody>
        </table>
        <p>
          <button
            id="logout"
            data-se="logout-link"
            onClick={this.logout}
            className="ui grey icon button"
          >
            <i className="sign out icon" />
            Sign out
          </button>
        </p>
      </div>
    );
  }
}

Profile.propTypes = {
  route: React.PropTypes.object.isRequired,
};

export default Profile;
