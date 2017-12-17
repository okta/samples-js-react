import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import config from './.samples.config';
import Home from './Home';
import CustomLoginComponent from './Login';
import Messages from './Messages';
import Profile from './Profile';

function customAuthHandler({ history }) {
  // Redirect to the /login page that has a CustomLoginComponent
  history.push('/login');
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security
          issuer={config.oktaSample.oidc.issuer}
          client_id={config.oktaSample.oidc.clientId}
          redirect_uri={config.oktaSample.oidc.redirectUri}
          onAuthRequired={customAuthHandler}
        >
          <Route path="/" exact component={Home} />
          <Route path="/implicit/callback" component={ImplicitCallback} />
          <Route path="/login" component={CustomLoginComponent} />
          <SecureRoute path="/messages" component={Messages} />
          <SecureRoute path="/profile" component={Profile} />
        </Security>
      </Router>
    );
  }
}

export default App;
