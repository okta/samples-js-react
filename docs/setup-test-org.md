Setting up a test org to run the e2e tests
==========================================

Follow these instructions to setup a real org to run against the e2e tests. This is the same setup that is mocked by the test server, which you can run with `npm run mock-okta`.

## Feature Flags

You will need the following features enabled:

- `OPENID_CONNECT`

## Okta Admin Setup

1. Navigate to the admin app

2. Enable CORS for the sample app server `/admin/access/api/corsList`

    - Check the *Enable CORS for the following base URLs* checkbox
    - Enter `http://localhost:3000` in the textbox

3. Create an OpenId Connect group `/admin/groups`

    | Setting           | Value                        |
    | ----------------- | ---------------------------- |
    | Name              | OpenId Connect Group         |
    | Group Description | OpenId Connect Samples Group |

4. Create an OpenId Connect app `/admin/apps/oauth2-wizard/create?applicationType=WEB`

    | Setting             | Value                                               |
    | ------------------- | --------------------------------------------------- |
    | Application Name    | OpenId Connect App                                  |
    | Redirect URIs       | `http://localhost:3000/authorization-code/callback` |
    | Allowed grant types | Authorization Code                                  |

5. Assign the `OpenId Connect App` to the `OpenId Connect Group` in the `Groups` tab


6. Add the sample users, activate, and set these passwords `/admin/users`

    **Note:** Add all users to the `OpenId Connect Group`

    | Name              | Username        | Password | What is this user for?                    |
    | ----------------- | --------------- | -------- | ----------------------------------------- |
    | George Washington | george@acme.com | Asdf1234 | Authorization code flow, redirect to Okta |
    | John Adams        | john@acme.com   | Asdf1234 | Authorization code flow, custom login     |
