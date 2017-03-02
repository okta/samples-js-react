### Running the Samples with your Okta Organization
These steps require an Okta account - if you do not have one, sign up for a free developer organization [here](https://www.okta.com/developer/signup/).

1. Add an OpenID Connect Application:
  - `Admin -> Applications -> Add Application -> Create New App -> OpenID Connect -> Create`
  - If you **do not** see the `OpenID Connect` option, contact us at [developers@okta.com](mailto:developers@okta.com) to enable it
2. Create an OpenID Connect application:

    | Setting             | Value                                               |
    | ------------------- | --------------------------------------------------- |
    | Application Name    | OpenId Connect App                                  |
    | Redirect URIs       | `http://localhost:3000/authorization-code/callback` |
    | Allowed grant types | Authorization Code                                  |
3. Click **Finish** to redirect back to the *General Settings* of your application.
4. Copy the **Client ID**, as it will be needed for the client configuration.
5. Select the **Edit** button and change the **Client Authentication** to *Client Secret*. Copy the *Client Secret*, as it will be needed for the client configuration.
6. Enable [CORS access](http://developer.okta.com/docs/api/getting_started/enabling_cors.html) to your Okta organization:
  - In the navigation bar, select **Security** then **API**.
  - Select the *CORS* tab
  - Click the **Edit** button and add `http://localhost:3000`
  - **Save**
7. Create an OpenID Connect group:
  - In the navigation bar, select **Directory** then **Groups**
  - Select the `Add Group` button
  - Enter the following information for your new group:
  
    | Setting           | Value                        | 
    | ----------------- | ---------------------------- |
    | Name              | OpenID Connect Group         |
    | Group Description | OpenID Connect Samples Group |
    
8. Add new or existing users to your `OpenID Connect Group`:

    | Name              | Username        | Password | Group                 |
    | ----------------- | --------------- | -------- | --------------------- |
    | George Washington | george@acme.com | Asdf1234 | OpenID Connect Group  |
    | John Adams        | john@acme.com   | Asdf1234 | OpenID Connect Group  |

9. Finally, select the **Groups** tab and **Assign to Groups** to add the `OpenID Connect Group` to your application.
