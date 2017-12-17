import { withAuth } from '@okta/okta-react';
import React, { Component } from 'react';
import { Container, Header, Icon, Message, Table } from 'semantic-ui-react';
import Navbar from './Navbar';

export default withAuth(class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: null, failed: null };
  }

  componentDidMount() {
    this.getMessages();
  }

  async getMessages() {
    if (!this.state.messages) {
      try {
        const accessToken = await this.props.auth.getAccessToken();
        /* global fetch */
        const response = await fetch('http://localhost:8000/api/messages', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const data = await response.json();
        const messages = data.messages.map((message) => {
          const date = new Date(message.date);
          const day = date.toLocaleDateString();
          const time = date.toLocaleTimeString();
          return {
            date: `${day} ${time}`,
            text: message.text,
          };
        });
        this.setState({ messages, failed: false });
      } catch (err) {
        this.setState({ failed: true });
        throw err;
      }
    }
  }

  render() {
    const possibleErrors = [
      'You\'ve downloaded one of our resource server examples, and it\'s running on port 8000.',
      'Your resource server example is using the same Okta authorization server (issuer) that you have configured this React application to use.',
    ];
    return (
      <div>
        <Navbar />
        <Container text style={{ marginTop: '7em' }}>
          <Header as="h1"><Icon name="mail outline" /> My Messages</Header>
          {this.state.failed === true && <Message error header="Failed to fetch messages.  Please verify the following:" list={possibleErrors} />}
          {this.state.failed === null && <p>Fetching Messages..</p>}
          {this.state.messages &&
            <div>
              <p>This component makes a GET request to the resource server example, which must be running at <code>localhost:8080/api/messages</code></p>
              <p>
                It attaches your current access token in the <code>Authorization</code> header on the request,
                and the resource server will attempt to authenticate this access token.
                If the token is valid the server will return a list of messages.  If the token is not valid
                or the resource server is incorrectly configured, you will see a 401 <code>Unauthorized response</code>.
              </p>
              <p>
                This route is protected with the <code>&lt;SecureRoute&gt;</code> component, which will
                ensure that this page cannot be accessed until you have authenticated and have an access token in local storage.
              </p>
              <Table>
                <thead>
                  <tr>
                    <th>Date</th><th>Message</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.messages.map(message => <tr key={message.date + message.text}><td>{message.date}</td><td>{message.text}</td></tr>)}
                </tbody>
              </Table>
            </div>
          }
        </Container>
      </div>
    );
  }
});
