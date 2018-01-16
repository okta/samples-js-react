# React Sample Applications for Okta

This repository contains several sample applications that demonstrate various Okta use-cases in your React application.

Each sample makes use of the [Okta React Library][].

Please find the sample that fits your use-case from the table below.

| Sample | Description |
|--------|-------------|
| [Okta-Hosted Login](/okta-hosted-login) | A React application that will redirect the user to the Okta-Hosted login page of your Org for authentication.  The user is redirected back to the React application after authenticating. |
| [Custom Login Page](/custom-login) | A React application that uses the Okta Sign-In Widget within the React application to authenticate the user. |


[Okta React Library]: https://github.com/okta/okta-oidc-js/tree/master/packages/okta-react

## Running E2E Tests locally

E2E Tests will be run against the Custom Login and Okta-Hosted Login servers

In addition to running npm install in the root of the project (to install the dev dependencies for testing), you will also need to install the dependencies of each library:

```bash
npm install
cd okta-hosted-login
npm install
cd ../custom-login
npm install
cd ..
```
Then you need to setup the following environment variables

```bash
export CLIENT_ID={yourAppClientId}
export OKTA_DOMAIN={yourOktaOrgDomain}
```

**NOTE:** Use only the domain part of your org url while setting OKTA_DOMAIN environment.

* E.g - If your org url is https://myorg.oktapreview.okta.com, your OKTA_DOMAIN should be myorg.oktapreview

After setting up the environment variables, you need to run a script to update the configuration

```bash
sh scripts/setup-env.sh
```
A final step is update the following environment variables with username & password of the user you want to use in your tests

Note that the USERNAME should be of the form "username@email.com"

```bash
export USERNAME={userName}
export PASSWORD={password}
```

Then run the E2E tests:

```bash
npm test
```
