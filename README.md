# React Sample Applications for Okta

This repository contains several sample applications that demonstrate various Okta use-cases in your React application.

Each sample makes use of the [Okta React Library][].

If you haven't done so already, register for a free account at [developer.okta.com](https://developer.okta.com/). Select **Create Free Account** and fill in the forms to complete the registration process. Once you are done and logged in, you will see your Okta Developer Console. 

> **Tip**: You can also create an account using the [Okta CLI](https://github.com/oktadeveloper/okta-cli) and `okta register`. To create an app, run `okta apps create` and use the settings below.

Register your application by selecting **Applications** > **Add Application**. On the next screen, choose **Single Page App** and click **Next**.

On the following screen, edit the application settings. For React applications running in developer mode, the port number should be 8080. Configure your app as follows:

* **Base URI**: `http://localhost:8080`
* **Login redirect URI**: `http://localhost:8080/login/callback` 
* **Logout redirect URI**: `http://localhost:8080` 

Once you have completed the form, you will be given a **client ID**. You will also need the **issuer** value for your Okta org. 

The **issuer** is the URL of the authorization server that will perform authentication.  All Developer Accounts have a "default" authorization server.  The issuer is a combination of your Org URL (found in the upper right of the console home page) and `/oauth2/default`. For example, `https://dev-133337.okta.com/oauth2/default`.

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


[Okta React Library]: https://github.com/okta/okta-react

**Note:** npm@7 users are advised to specify `--legacy-peer-deps` flag during samples installation.

## Quick Start: Automatic Setup with Heroku

You need a [Heroku](https://signup.heroku.com/) account to follow these instructions.

You can create a free Okta Developer org and deploy this app directly to Heroku by clicking the purple button:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

To deploy the app, you will need an Okta org setup as described in the section above.

You will also need to replace the config values for `ISSUER` and `CLIENT_ID` in Heroku configuration based on your Okta org.
Also be sure to add your Heroku app's base URL to the list of trusted origins in your Okta admin settings.

After you deploy the app, you will also need to go to your Okta account to [enable cors](https://developer.okta.com/docs/guides/enable-cors/granting-cors/) and configure the `login` and `logout` redirect URI in your client application settings for the newly deployed app domain if they are not preconfigured. 

**Note:** Due to sample apps are served under different routes, base urls will be needed for the redirect uris, e.g.`https://<myapp.heroku.com>/okta-hosted-login` or `https://<myapp.heroku.com>/custom-login`.

Finally, click on **View** on the result screen to navigate to the newly deployed app.

You can use your Okta user credentials to login to the applications. That's it! You've successfully logged in using Okta. 

## Running the resource server
The samples include a page which accesses a protected resource (messages). To start the sample resource server:

```
npm run resource-server
```

## Running the tests

In addition to the other environment vars, you will need credentials for a test user. Add the values for your Okta org and user in a `testenv` file.

```ini
ISSUER=https://yourOktaDomain.com/oauth2/default
CLIENT_ID=123xxxxx123
USERNAME=testuser@email.com
PASSWORD=testpass
```

**NOTE**: The test suite expects you to use `8080` for your port number. Make sure your Okta app has the redirect URI if you want to test these samples.

With these variables set, you should be able to run `npm test` and bask in the glory of passing tests.
