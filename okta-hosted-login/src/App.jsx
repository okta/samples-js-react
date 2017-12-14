import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import config from './.samples.config';
import Home from './Home';
import Messages from './Messages';
import Profile from './Profile';

class App extends Component {
  render() {
    return (
      <Router>
        <Security
          issuer={config.oktaSample.oidc.issuer}
          client_id={config.oktaSample.oidc.clientId}
          redirect_uri={config.oktaSample.oidc.redirectUri}
        >
          <Route path="/" exact component={Home} />
          <Route path="/implicit/callback" component={ImplicitCallback} />
          <SecureRoute path="/messages" component={Messages} />
          <SecureRoute path="/profile" component={Profile} />
        </Security>
      </Router>
    );
  }
}

export default App;
