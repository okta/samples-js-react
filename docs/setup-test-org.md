Setting up a test org to run the e2e tests
==========================================

Follow these instructions to setup a real org to run against the e2e tests. This is the same setup that is mocked by the test server, which you can run with `npm run mock-okta`.

## Feature Flags

You will need the following features enabled:

- `OPENID_CONNECT`

## Okta Admin Setup

1. Navigate to the admin app

2. Create a new **Web** application `dev/console/apps/new`
3. Copy the **Client ID** and **Client Secret**, as it will be needed for the client configuration.
4. Add the sample users, activate, and set these passwords `/admin/users`

    | Name              | Username        | Password | What is this user for?                    |
    | ----------------- | --------------- | -------- | ----------------------------------------- |
    | George Washington | george@acme.com | Asdf1234 | Authorization code flow, redirect to Okta |
    | John Adams        | john@acme.com   | Asdf1234 | Authorization code flow, custom login     |
