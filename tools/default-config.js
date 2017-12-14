export default {
  oktaSample: {
    oidc: {
      issuer: 'https://{yourOktaDomain}.com/oauth2/default',
      clientId: '{yourClientId}',
      redirectUri: 'http://localhost:8080/implicit/callback',
    },
  },
};
