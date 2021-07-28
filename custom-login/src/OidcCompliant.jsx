import React from 'react';
import { useLocation } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

const OidcCompliant = () => {
  const { oktaAuth, authState } = useOktaAuth();

  const login = async () => oktaAuth.signInWithRedirect('/');

  const searchParams = new URLSearchParams(useLocation().search);
  const iss = searchParams.get('iss');
  // if app can be configured for multiple issuers use this value
  console.log(`iss: ${iss}`);

  if (!authState || !authState.isAuthenticated) {
    login();
  }

  return (
    <div>
      <h2>Authorizing.....</h2>
    </div>
  );
};

export default OidcCompliant;
