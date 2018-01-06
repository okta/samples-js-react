import { withAuth } from '@okta/okta-react';
import React, { Component } from 'react';
import { Button, Header } from 'semantic-ui-react';
import { checkAuthentication } from './helpers';

export default withAuth(class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null, userinfo: null };
    this.checkAuthentication = checkAuthentication.bind(this);
  }

  async componentDidMount() {
    this.checkAuthentication();
  }

  async componentDidUpdate() {
    this.checkAuthentication();
  }

  render() {
    const resourceServerExamples = [
      {
        label: 'Node/Express Resource Server Example',
        url: 'https://github.com/okta/samples-nodejs-express-4/tree/master/resource-server',
      },
      {
        label: 'Java/Spring MVC Resource Server Example',
        url: 'https://github.com/okta/samples-java-spring-mvc/tree/master/resource-server',
      },
    ];

    return (
      <div>
        {this.state.authenticated !== null &&
        <div>
          <Header as="h1">Implicit Flow w/ Okta Hosted Login Page</Header>
          {this.state.authenticated &&
            <div>
              <p>Welcome back, {this.state.userinfo.name}!</p>
              <p>
                You have successfully authenticated against your Okta org, and have been redirected back to this application.  You now have an ID token and access token in local storage.
                Visit the <a href="/profile">My Profile</a> page to take a look inside the ID token.
              </p>
              <h3>Next Steps</h3>
              <p>Currently this application is a stand-alone front end application.  At this point you can use the access token to authenticate yourself against resource servers that you control.</p>
              <p>This sample is designed to work with one of our resource server examples.  To see access token authentication in action, please download one of these resource server examples:</p>
              <ul>
                {resourceServerExamples.map(example => <li key={example.url}><a href={example.url}>{example.label}</a></li>)}
              </ul>
              <p>Once you have downloaded and started the example resource server, you can visit the <a href="/messages">My Messages</a> page to see the authentication process in action.</p>
            </div>
          }
          {!this.state.authenticated &&
            <div>
              <p>If you&lsquo;re viewing this page then you have successfully started this React application.</p>
              <p>
                <span>This example shows you how to use the </span>
                <a href="https://github.com/okta/okta-oidc-js/tree/master/packages/okta-react">Okta React Library</a>
                <span> to add the </span>
                <a href="https://developer.okta.com/authentication-guide/implementing-authentication/implicit">Implicit Flow</a>
                <span> to your application.</span>
              </p>
              <p>
                When you click the login button below, you will be redirected to the login page on your Okta org.
                After you authenticate, you will be returned to this application with an ID token and access token.  These tokens will be stored in local storage and can be retrieved at a later time.
              </p>
              <Button id="login-button" primary onClick={this.props.auth.login}>Login</Button>
            </div>
          }

        </div>
        }
      </div>
    );
  }
});
