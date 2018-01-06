# Okta React + Okta Hosted Login Example

This example shows you how to use the [Okta React Library][] to login a user to a React application.  The login is achieved through the [OAuth 2.0 Implicit Flow][], where the user is redirected to the Okta-Hosted login page.  After the user authenticates they are redirected back to the application with an ID token and access token.

This example is built with [Create React App][].

## Prerequisites

Before running this sample, you will need the following:

* An Okta Developer Org, you can sign up for one at https://developer.okta.com/signup/.
* An OIDC application in your Org, configured for Single-Page Application mode. You can find instructions [here][OIDC SPA Setup Instructions].  When following the wizard, use the default properties.  They are are designed to work with our sample applications.

[OIDC Web Application Setup Instructions]: https://developer.okta.com/authentication-guide/implementing-authentication/auth-code#1-setting-up-your-application

[OAuth 2.0 authorization code flow]: https://developer.okta.com/authentication-guide/implementing-authentication/auth-code

## Running This Example

To run this application, you first need to clone this repo and then enter into this directory:

```bash
git clone git@github.com:okta/samples-js-react.git
cd samples-js-react/okta-hosted-login
```

Then install dependencies:

```bash
npm install
```

You will need to provide these values to the sample application:

* Issuer
* Client ID
* Redirect URI

These are application settings for the [OAuth 2.0 Implicit Flow][] and can be found in the Developer Console when looking at the Application that you created earlier.  Place them into this configuration block in  `src/.samples.config.js`:

```javascript
// src/.samples.config.js

export default {
  oktaSample: {
    oidc: {
      issuer: 'https://{yourOktaDomain}.com/oauth2/default',
      clientId: '{yourSpaApplicationClientId}',
      redirectUri: 'http://localhost:8080/implicit/callback',
    },
  },
};

```

Now start the app server:

```
npm start
```

At this point you should be able to navigate to http://localhost:8080 and view the React application.

If you see a home page that prompts you to login, then things are working!  When you click the login button you will be redirected to the Okta login page of your Okta Org, where you will be prompted to login.

You can login with the same account that you created when signing up for your Developer Org, or you can use a known user in your Okta Directory.

Once you have logged in you will be redirected back to the application where you should see information about your login state.

**Note:** If you are currently using your Developer Console, you already have a Single Sign-On (SSO) session for your Org.  You will be automatically logged into your application as the same user that is using the Developer Console.

## Integrating The Resource Server

If you were able to successfully login in the previous section you can continue with the resource server example.  Please download and run one of these sample applications in another terminal window:

* [Node/Express Resource Server Example](https://github.com/okta/samples-nodejs-express-4/tree/master/resource-server)
* [Java/Spring MVC Resource Server Example](https://github.com/okta/samples-java-spring-mvc/tree/master/resource-server)

Once you have the resource server running (it will run on port 8000) you can visit the `/messages` page within the React application to see the authentication flow.  The React application will use its stored access token to authenticate itself with the resource server, you will see this as the `Authorization: Bearer <access_token>` header on the request if you inspect the network traffic in the browser.

[Create React App]: https://github.com/facebookincubator/create-react-app
[OAuth 2.0 Implicit Flow]: https://developer.okta.com/authentication-guide/implementing-authentication/implicit
[Okta React Library]: https://github.com/okta/okta-oidc-js/tree/master/packages/okta-react
[OIDC SPA Setup Instructions]: https://developer.okta.com/authentication-guide/implementing-authentication/implicit#1-setting-up-your-application
[Okta Sign In Widget]: https://github.com/okta/okta-signin-widget
