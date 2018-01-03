import { withAuth } from '@okta/okta-react';
import React, { Component } from 'react';
import { Container, Icon, Image, Menu } from 'semantic-ui-react';
import { checkAuthentication } from './helpers';

export default withAuth(class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null };
    this.checkAuthentication = checkAuthentication.bind(this);
  }

  async componentDidMount() {
    this.checkAuthentication();
  }

  async componentDidUpdate() {
    this.checkAuthentication();
  }

  render() {
    return (
      <div>
        <Menu fixed="top" inverted>
          <Container>
            <Menu.Item as="a" header href="/">
              <Image size="mini" src="/react.svg" />
              &nbsp;
              Okta-React Sample Project
            </Menu.Item>
            {this.state.authenticated === true && <Menu.Item id="messages-button" as="a" href="/messages"><Icon name="mail outline" />Messages</Menu.Item>}
            {this.state.authenticated === true && <Menu.Item id="profile-button" as="a" href="/profile">Profile</Menu.Item>}
            {this.state.authenticated === true && <Menu.Item id="logout-button" as="a" onClick={this.props.auth.logout}>Logout</Menu.Item>}
            {this.state.authenticated === false && <Menu.Item as="a" onClick={this.props.auth.login}>Login</Menu.Item>}
          </Container>
        </Menu>
      </div>
    );
  }
});
