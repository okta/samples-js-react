# React Sample Applications for Okta

This repository contains several sample applications that demonstrate various Okta use-cases in your React application.

Each sample makes use of the [Okta React Library][].

Before running the samples, you will need to gather the following information from the Okta Developer Console:

- **Client Id** - The client ID of the SPA application that you created earlier. This can be found on the "General" tab of an application, or the list of applications.  This identifies the application that tokens will be minted for.
- **Issuer** - This is the URL of the authorization server that will perform authentication.  All Developer Accounts have a "default" authorization server.  The issuer is a combination of your Org URL (found in the upper right of the console home page) and `/oauth2/default`. For example, `https://dev-1234.oktapreview.com/oauth2/default`.

These values must exist as environment variables. They can be exported in the shell, or saved in a file named `testenv`, located in the same directory as this README. See [dotenv](https://www.npmjs.com/package/dotenv) for more details on this file format.

```ini
ISSUER=https://yourOktaDomain.com/oauth2/default
CLIENT_ID=123xxxxx123
```

Please find the sample that fits your use-case from the table below.

| Sample | Description |
|--------|-------------|
| [Okta-Hosted Login](/okta-hosted-login) | A React application that will redirect the user to the Okta-Hosted login page of your Org for authentication.  The user is redirected back to the React application after authenticating. |
| [Custom Login Page](/custom-login) | A React application that uses the Okta Sign-In Widget within the React application to authenticate the user. |


[Okta React Library]: https://github.com/okta/okta-oidc-js/tree/master/packages/okta-react

## Running the resource server
The samples include a page which accesses a protected resource (messages). To start the sample resource server:

```
npm run resource-server
```

## Running the tests

In addition to the other environment vars, you will need credentials for a test user.
Set the values for `USERNAME` and `PASSWORD` and export as shell variables. 
(At this time, the `testenv` file is not supported)

```ini
ISSUER=https://yourOktaDomain.com/oauth2/default
CLIENT_ID=123xxxxx123
USERNAME=testuser
PASSWORD=testpass
```

With variables set, run `npm test`
