import React, {Component} from 'react';
import { Input, Button, Form, Image } from 'semantic-ui-react';
import {Router, Route, browserHistory, history} from 'react-router';
import '../stylesheets/AppLoginPage.css';

class AppLogin extends Component {

  handleLoginRedirect(e) {
    browserHistory.push('/dashboard');
  }


  render() {
    return (
      <div className = 'container'>
        <Image className = 'evive-logo'
        src = 'https://047f018102c8c8f717a6-1efb167bc857a9871c34d9fa1ea1cbde.ssl.cf1.rackcdn.com/myevive_black.png' />

        <div className = 'client-logo'>
          <Image src = 'https://59b602507414a6d288cf-98a1a17df509e6abbdfa88e2a08a0e33.ssl.cf1.rackcdn.com/static_resources/clientLogosImages/travelers%20transparent.png' />
        </div>

        <Form className ='form'>
          <Form.Field>
            <label>Username: </label>
            <Input placeholder = 'Email Address' />
          </Form.Field>

          <Form.Field>
            <label>Password</label>
            <Input type='password' action={{icon: 'eye'}} placeholder='********' />
          </Form.Field>

          <Button type = 'submit' onClick = { this.handleLoginRedirect } > login </Button>

        </Form>

      </div>

    );
  }
}

export default AppLogin;
