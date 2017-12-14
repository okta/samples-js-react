import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';
import { Container, Header, Icon, Table } from 'semantic-ui-react';

import Navbar from './Navbar';

export default withAuth(class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { userinfo: null };
  }

  componentDidMount() {
    this.getUserInfo();
  }

  async getUserInfo() {
    if (!this.state.userinfo) {
      const userinfo = await this.props.auth.getUser();
      const claims = Object.entries(userinfo);
      this.setState({ userinfo, claims });
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <Container text style={{ marginTop: '7em' }}>
          {!this.state.userinfo && <p>Fetching user profile..</p>}
          {this.state.userinfo &&
          <div>
            <Header as="h1"><Icon name="drivers license outline" /> My User Profile (ID Token Claims) </Header>
            <p>
              Below is the information from your ID Token which was obtained during the
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
                  return <tr key={claimName}><td>{claimName}</td><td>{claimValue}</td></tr>;
                })}
              </tbody>
            </Table>
          </div>
          }
        </Container>
      </div>
    );
  }
});
