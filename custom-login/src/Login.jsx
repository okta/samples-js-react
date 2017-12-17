import React, { Component } from 'react';
import * as OktaSignIn from '@okta/okta-signin-widget';
import { Container } from 'semantic-ui-react';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import '@okta/okta-signin-widget/dist/css/okta-theme.css';

import Navbar from './Navbar';
import config from './.samples.config';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.signIn = new OktaSignIn({
      baseUrl: config.oktaSample.widget.baseUrl,
      clientId: config.oktaSample.oidc.clientId,
      redirectUri: config.oktaSample.oidc.redirectUri,
      logo: '/react.svg',
      i18n: {
        en: {
          'primaryauth.title': 'Sign in to React & Company',
        },
      },
      authParams: {
        responseType: ['id_token', 'token'],
        issuer: config.oktaSample.oidc.issuer,
        display: 'page',
        scopes: ['openid', 'profile'],
      },
    });
  }
  componentDidMount() {
    this.signIn.renderEl(
      { el: '#sign-in-widget' },
      () => {
        /**
         * In this flow, the success handler will not be called beacuse we redirect
         * to the Okta org for the authentication workflow.
         */
      },
      (err) => {
        throw err;
      },
    );
  }
  render() {
    return (
      <div>
        <Navbar />
        <Container text style={{ marginTop: '7em' }}>
          <div id="sign-in-widget" />
        </Container>
      </div>
    );
  }
}

