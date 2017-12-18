/**
 * Helper function that watches the authenticate state, then applies it
 * as a boolean (authenticated) as well as attaches the userinfo data.
 */
async function checkAuthentication() {
  const authenticated = await this.props.auth.isAuthenticated();
  if (authenticated !== this.state.authenticated) {
    if (authenticated && !this.state.userinfo) {
      const userinfo = await this.props.auth.getUser();
      this.setState({ authenticated, userinfo });
    } else {
      this.setState({ authenticated });
    }
  }
}

/* eslint-disable import/prefer-default-export */
export { checkAuthentication };
