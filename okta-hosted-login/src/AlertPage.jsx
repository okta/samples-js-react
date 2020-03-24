import React, { Component } from 'react';
import { withOktaAuth } from '@okta/okta-react';

export default withOktaAuth(class AlertPage extends Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    if(this.props.authState.isAuthenticated){
      console.log('didMount: isAuthenticated');
    } else {
      console.log('didMount: i am not athenticated');
    }
  }

  render() {
    console.log('isAuthenticated? ', this.props.authState.isAuthenticated);
    return null;
  }
});
