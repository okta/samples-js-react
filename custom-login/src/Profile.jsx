import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';
import { Header, Icon, Table } from 'semantic-ui-react';

import { checkAuthentication } from './helpers';

export default withAuth(class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { userinfo: null, ready: false };
    this.checkAuthentication = checkAuthentication.bind(this);
  }

  async componentDidMount() {
    await this.checkAuthentication();
    this.applyClaims();
  }

  async componentDidUpdate() {
    await this.checkAuthentication();
    this.applyClaims();
  }

  async applyClaims() {
    if (this.state.userinfo && !this.state.claims) {
      const claims = Object.entries(this.state.userinfo);
      this.setState({ claims, ready: true });
    }
  }

  render() {
    return (
      <div>
        {!this.state.ready && <p>Fetching user profile..</p>}
        {this.state.ready &&
        <div>
          <Header as="h1"><Icon name="drivers license outline" /> My User Profile (ID Token Claims) </Header>
          <p>
            Below is the information from your ID token which was obtained during the
            <a href="https://developer.okta.com/authentication-guide/implementing-authentication/implicit">Implicit Flow</a> and is now stored in local storage.
          </p>
          <p>This route is protected with the <code>&lt;SecureRoute&gt;</code> component, which will ensure that this page cannot be accessed until you have authenticated.</p>
          <Table>
            <thead>
              <tr>
                <th>Claim</th><th>Value</th>
              </tr>
            </thead>
            <tbody>
              {this.state.claims.map((claimEntry) => {
                const claimName = claimEntry[0];
                const claimValue = claimEntry[1];
                const claimId = `claim-${claimName}`;
                return <tr key={claimName}><td>{claimName}</td><td id={claimId}>{claimValue}</td></tr>;
              })}
            </tbody>
          </Table>
        </div>
        }
      </div>
    );
  }
});
