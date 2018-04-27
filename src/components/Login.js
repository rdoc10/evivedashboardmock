import React, {Component} from 'react';
import { Input, Button, Form, Image } from 'semantic-ui-react';
import {Router, Route, browserHistory, history} from 'react-router';
import '../styles/AppLoginPage.css';

const EVIVE_LOGO = 'https://047f018102c8c8f717a6-1efb167bc857a9871c34d9fa1ea1cbde.ssl.cf1.rackcdn.com/myevive_black.png';

const TRAVELLERS_LOGO = 'https://59b602507414a6d288cf-98a1a17df509e6abbdfa88e2a08a0e33.ssl.cf1.rackcdn.com/static_resources/clientLogosImages/travelers%20transparent.png';

class AppLogin extends Component {

  state = {
    username: {
      value: '',
      initial: true,
      valid: false,
    },

    password: {
      value: '',
      valid: false,
      initial: true,
      visible: false,
    },
    allowSubmit: false
  }

  handleLoginRedirect(e) {
    browserHistory.push('/dashboard');
  }

  handleInputs = ( type, value ) => {
    const validations = {
      password: /.{8,16}./,
      username: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    }

    const valid = validations[type].test(value);
      this.setState( (prev) => ({
        [type]: {
          ...prev[type],
          value,
          valid,
          initial: false
        }
      }),

      () => {
        if ( this.state.username.valid === true && this.state.password.valid === true ) {
          this.setState({ allowSubmit: true })
        }
        else {
          this.setState({ allowSubmit: false })
        }
      }

    )
  }

  render() {
    return (
      <div className = 'container'>
        <Image className = 'evive-logo'
        src =  {EVIVE_LOGO} />

        <div className = 'client-logo'>
          <Image src = {TRAVELLERS_LOGO} />
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
