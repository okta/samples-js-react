# Okta React + Custom Login Example

This example shows you how to use the [Okta React Library][] to login a user to a React application.  The login is achieved with the [Okta Sign In Widget][], which gives you more control to customize the login experience within your app.

This example is built with [Create React App][].

## Prerequisites

Before running this sample, you will need the following:

* An Okta Developer Org, you can sign up for one at https://developer.okta.com/signup/.
* An OIDC application in your Org, configured for Single-Page Application mode. You can find instructions [here][OIDC SPA Setup Instructions].  When following the wizard, use the default properties.  They are are designed to work with our sample applications.


## Running This Example

To run this application, you first need to clone this repo and then enter into this directory:

```bash
git clone git@github.com:okta/samples-js-react.git
cd samples-js-react/custom-login
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
export default {
  oktaSample: {
    widget: {
      /**
       * Note: even when using the Sign-In Widget for an OIDC flow,
       * it must be configured with the base URL for your Okta Org.
       */
      baseUrl: 'https://{yourOktaDomain}.com',
    },
    oidc: {
      issuer: 'https://{yourOktaDomain}.com/oauth2/default',
      clientId: '{yourSpaApplicationClientId}',
      redirectUri: 'http://localhost:8080/implicit/callback',
    },
  },
};

```

Now you should be able to run the app server:

```
npm start
```

At this point you should be able to navigate to http://localhost:8080

If you see a home page that prompts you to login, the app is working!  When you click the login button you should be shown the Sign In Widget on the `/login` page.

You can login with the same account that you created when signing up for your Developer Org, or you can use a known user in your Okta Directory.

Once you have logged in you will be redirected through your authorization server (the issuer defined in config) to create a session for Single-Sign-On (SSO).  After this you will be redirected back to the application where you should see information about your login state.

**Note:** If you are currently using your Developer Console, you already have a Single Sign-On (SSO) session for your Org.  You will be automatically logged into your application as the same user that is using the Developer Console.


## Integrating The Resource Server

This sample contains the same "Messages" page that is included in the [Okta Hosted Login](/okta-hosted-login) sample, please refer to that sample for instructions on setting up the resource server.

[Create React App]: https://github.com/facebookincubator/create-react-app
[OAuth 2.0 Implicit Flow]: https://developer.okta.com/authentication-guide/implementing-authentication/implicit
[Okta React Library]: https://github.com/okta/okta-oidc-js/tree/master/packages/okta-react
[OIDC SPA Setup Instructions]: https://developer.okta.com/authentication-guide/implementing-authentication/implicit#1-setting-up-your-application
[Okta Sign In Widget]: https://github.com/okta/okta-signin-widget