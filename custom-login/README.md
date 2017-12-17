# Okta React + Custom Login Example

This example shows you how to use the [Okta React Library][] to login a user to a React application.  The login is achieved with the [Okta Sign In Widget][], allowing you to customize the login experience within your app (see the Widget README for full details).

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

These settings can be found in the Developer Console, when looking at the Application that you created.  Place them into this configuration block in  `src/App.js`:

```javascript
export default {
  issuer: 'https://{{yourOktaDomain}}.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '{{yourClientId}}'
}
```

Now you should be able to run the app server:

```
npm start
```

At this point you should be able to navigate to http://localhost:8080

If you see a home page that prompts you to login, then things are working!  When you click the login button you should be redirected to the Okta login page, where you will be prompted to login.  You can use the same account that you created whe signing up for your Developer Org, or you can use a known user in your Okta Directory.  Note: if you are currently in the Developer Console for your Org, you may already be considered logged in.  In either case, you will be redirected back to the application where you should see information about your login state.

## Integrating The Resource Server

If you were able to successfully login in the previous section you can continue with the resource server example.  Please download and run one of these sample applications in another terminal window:

* [Node/Express Resource Server Example](https://github.com/okta/samples-nodejs-express-4/tree/master/resource-server)
* [Java/Spring MVC Resource Server Example](https://github.com/okta/samples-java-spring-mvc/tree/master/resource-server)

Once you have the resource server running (it will run on port 8000) you can visit the `/messages` page within the React application to see the authentication flow (the React application will use its access token to authenticate itself with the resource server).

[Okta React Library]: https://github.com/okta/okta-oidc-js/tree/master/packages/okta-react
[OAuth 2.0 Ipmlicit Flow]: https://developer.okta.com/authentication-guide/implementing-authentication/implicit
[OIDC SPA Setup Instructions]: https://developer.okta.com/authentication-guide/implementing-authentication/implicit#1-setting-up-your-application
[OIDC Web Application Setup Instructions]: https://developer.okta.com/authentication-guide/implementing-authentication/auth-code#1-setting-up-your-application
[OAuth 2.0 authorization code flow]: https://developer.okta.com/authentication-guide/implementing-authentication/auth-code
