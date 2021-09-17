const CLIENT_ID = process.env.CLIENT_ID || '{clientId}';
const ISSUER = process.env.ISSUER || 'https://{yourOktaDomain}.com/oauth2/default';
const OKTA_TESTING_DISABLEHTTPSCHECK = process.env.OKTA_TESTING_DISABLEHTTPSCHECK || false;
const BASENAME = process.env.PUBLIC_URL || '';
const REDIRECT_URI = `${window.location.origin}${BASENAME}/login/callback`;
let USE_INTERACTION_CODE = false;
if (process.env.USE_INTERACTION_CODE === 'true') {
  USE_INTERACTION_CODE = true;
}

export default {
  oidc: {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: REDIRECT_URI,
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
    useInteractionCode: USE_INTERACTION_CODE,
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages',
  },
  app: {
    basename: BASENAME,
  },
};
