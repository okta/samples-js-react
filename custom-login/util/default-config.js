export default {
  oktaSample: {
    widget: {
      /**
       * Note: even when using the Sign-In Widget for an ODIC flow, it still
       * needs to be configured with the base URL for your Okta Org.
       */
      baseUrl: 'https://{yourOktaDomain}.com',
    },
    oidc: {
      issuer: 'https://{yourOktaDomain}.com/oauth2/default',
      clientId: '{yourClientId}',
      redirectUri: 'http://localhost:8080/implicit/callback',
    },
  },
};
