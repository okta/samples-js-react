/*!
 * Copyright (c) 2015-2016, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

/* eslint brace-style:0, no-param-reassign:0, import/no-extraneous-dependencies:0, no-shadow:0, no-return-assign:0 */

'use strict';

const request = require('request');
const querystring = require('querystring');
const config = require('../../.samples.config.json');
const jws = require('jws');
const jwk2pem = require('pem-jwk').jwk2pem;

const handlers = module.exports = {};
const cachedJwks = {};

/**
 * Index page - lists the scenarios that the developer can choose from
 *
 * Route: /
 */
handlers.scenarios = (req, res) => {
  res.render('index', { oidc: config.oidc });
};

/**
 * Authorization code, login redirect flow - Initiates the flow to get a code
 * by redirecting to Okta as the IDP. This flow is useful if you don't need
 * a custom login form.
 *
 * Route: /authorization-code/login-redirect
 */
handlers.loginRedirect = (req, res) => {
  if (req.session.user) {
    res.redirect(302, '/authorization-code/profile');
    return;
  }
  res.render('index', { oidc: config.oidc });
};

/**
 * Authorization code, custom login flow - Initiates the flow to get a code
 * using a custom login form:
 * 1. Shows a custom login form on the app page, using the Okta Sign-In Widget
 * 2. After logging in, uses the sessionToken that is returned from the
 *    Authn API to initiate an OIDC flow
 *
 * Route: /authorization-code/login-custom
 */
handlers.loginCustom = (req, res) => {
  if (req.session.user) {
    res.redirect(302, '/authorization-code/profile');
    return;
  }
  res.render('index', { oidc: config.oidc });
};

/**
 * Basic app logged-in state. This is protected by the session cookie, which is
 * only set when a successful auth to Okta has finished.
 *
 * Route: /authorization-code/profile
 */
handlers.profile = (req, res) => {
  if (!req.session.user) {
    res.redirect(302, '/');
    return;
  }
  res.render('index', { user: req.session.user, oidc: config.oidc });
};


/**
 * Logout handler - clears the server side app session. Note - the Okta
 * session is killed before visiting this route in the client side code.
 *
 * Route: /authorization-code/logout
 */
handlers.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.redirect(302, '/');
  });
};

/**
 * Callback redirect handler for the OAuth 2.0 flow:
 * 1. Initiate the flow with login-redirect or login-custom
 * 2. This will redirect to the Okta /authorize endpoint
 * 3. When the user is verified, an authorization code is returned here
 * 4. Exchange the code for an id_token
 * 5. Validate the id_token claims
 * 6. Set the user session
 *
 * Route: /authorization-code/callback
 */
handlers.callback = (req, res) => {
  let nonce;
  let state;

  // Before initiating the /token request, validate that the user's state
  // matches what we expect. The client sends a state parameter to Okta in
  // the /authorize request, and sets these cookies for validation here on the
  // server side.
  if (req.cookies['okta-oauth-nonce'] && req.cookies['okta-oauth-state']) {
    nonce = req.cookies['okta-oauth-nonce'];
    state = req.cookies['okta-oauth-state'];
  }
  else {
    res.status(401).send('"state" and "nonce" cookies have not been set before the /callback request');
    return;
  }

  if (!req.query.state || req.query.state !== state) {
    res.status(401).send(`Query state "${req.query.state}" does not match cookie state "${state}"`);
    return;
  }

  if (!req.query.code) {
    res.status(401).send('Required query parameter "code" is missing');
    return;
  }

  // The default token auth method is 'client_secret_basic'
  const secret = new Buffer(`${config.oidc.clientId}:${config.oidc.clientSecret}`, 'utf8').toString('base64');

  const query = querystring.stringify({
    grant_type: 'authorization_code',
    code: req.query.code,
    redirect_uri: config.oidc.redirectUri,
  });

  const options = {
    url: `${config.oidc.oktaUrl}/oauth2/v1/token?${query}`,
    method: 'POST',
    headers: {
      Authorization: `Basic ${secret}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    json: true,
  };

  request(options, (err, tokenRes, json) => {
    if (err) {
      res.status(500).send(err);
      return;
    }

    if (json.error) {
      res.status(401).send(`${json.error}: ${json.error_description}`);
      return;
    }

    // Decode the id_token first to:
    // 1. Verify that it is a JWT
    // 2. Decode the header, which contains the public key id (kid) we can use
    //    to verify the id_token signature. More information about validating
    //    id_tokens can be found here:
    //    http://developer.okta.com/docs/api/resources/oidc.html#validating-id-tokens
    const decoded = jws.decode(json.id_token);
    if (!decoded) {
      res.status(401).send('id_token could not be decoded from the response');
      return;
    }

    new Promise((resolve, reject) => {
      // If we've already cached this JWK, return it
      if (cachedJwks[decoded.header.kid]) {
        resolve(cachedJwks[decoded.header.kid]);
        return;
      }

      // If it's not in the cache, get the latest JWKS from /oauth2/v1/keys
      const options = {
        url: `${config.oidc.oktaUrl}/oauth2/v1/keys`,
        json: true,
      };
      request(options, (err, resp, json) => {
        if (err) {
          reject(err);
          return;
        } else if (json.error) {
          reject(json);
          return;
        }

        json.keys.forEach(key => cachedJwks[key.kid] = key);
        if (!cachedJwks[decoded.header.kid]) {
          res.status(401).send('No public key for the returned id_token');
          return;
        }

        resolve(cachedJwks[decoded.header.kid]);
      });
    })
    .then((jwk) => {
      const claims = JSON.parse(decoded.payload);

      // Using the jwk, verify that the id_token signature is valid. In this
      // case, the library we're using, JWS, requires PEM encoding for our JWK.
      const pem = jwk2pem(jwk);
      if (!jws.verify(json.id_token, jwk.alg, pem)) {
        res.status(401).send('id_token signature is invalid');
        return;
      }

      // Verify that the nonce matches the nonce generated on the client side
      if (nonce !== claims.nonce) {
        res.status(401).send(`claims.nonce "${claims.nonce}" does not match cookie nonce ${nonce}`);
        return;
      }

      // Verify that the issuer is Okta, and specifically the endpoint that we
      // performed authorization against.
      if (config.oidc.oktaUrl !== claims.iss) {
        res.status(401).send(`id_token issuer ${claims.iss} does not match our issuer ${config.oidc.oktaUrl}`);
        return;
      }

      // Verify that the id_token was minted specifically for our clientId
      if (config.oidc.clientId !== claims.aud) {
        res.status(401).send(`id_token aud ${claims.aud} does not match our clientId ${config.oidc.clientId}`);
        return;
      }

      // Verify the token has not expired. It is also important to account for
      // clock skew in the event this server or the Okta authorization server has
      // drifted.
      const now = Math.floor(new Date().getTime() / 1000);
      const maxClockSkew = 300; // 5 minutes
      if (now - maxClockSkew > claims.exp) {
        const date = new Date(claims.exp * 1000);
        res.status(401).send(`The JWT expired and is no longer valid - claims.exp ${claims.exp}, ${date}`);
        return;
      }

      // Verify that the token was not issued in the future (accounting for clock
      // skew).
      if (claims.iat > (now + maxClockSkew)) {
        res.status(401).send(`The JWT was issued in the future - iat ${claims.iat}`);
        return;
      }

      // The id_token is good! In a real app, this is the point where you would
      // lookup the user in a user store, and set the session for the user.
      //
      // In this sample app, we'll take a shortcut and just set some of the
      // claims as the "user object"
      req.session.user = {
        email: claims.email,
        claims,
      };

      // Now that the session cookie is set, we can navigate to the logged-in
      // app page.
      res.redirect(302, '/authorization-code/profile');
    })
    .catch(err => res.status(500).send(`Error! ${JSON.stringify(err)}`));
  });
};
