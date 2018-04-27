import React, { Component } from 'react';
import '../../styles/AppDashboard.css';
import {Router, Route, browserHistory, history} from 'react-router';
import { Image, Menu, Button, Icon, Header } from 'semantic-ui-react';

const EVIVE_LOGO = 'https://047f018102c8c8f717a6-1efb167bc857a9871c34d9fa1ea1cbde.ssl.cf1.rackcdn.com/myevive_black.png';

const TRAVELLERS_LOGO = 'https://59b602507414a6d288cf-98a1a17df509e6abbdfa88e2a08a0e33.ssl.cf1.rackcdn.com/static_resources/clientLogosImages/travelers%20transparent.png';

class AppNavBar extends Component {

  handleLogoutRedirect(e) {
    browserHistory.push('/login');
  }

  render() {
    return (
      <Menu size='huge' borderless>
        <Menu.Item>

          <Icon name = 'bars' onClick = { this.props.toggleSidebar } />
        </Menu.Item>

        <Menu.Item>
          <Image src = {EVIVE_LOGO} />
        </Menu.Item>

        <Menu.Menu position = 'right'>
          <Menu.Item>
            <p className = 'text' >You are logged in with</p>
          </Menu.Item>

          <Menu.Item className = 'travellers'>
            <Image src = {TRAVELLERS_LOGO} />
          </Menu.Item>

          <Menu.Item>
            Sign Up
          </Menu.Item>

          <Menu.Item>
            <Icon name = 'power' onClick = { this.handleLogoutRedirect } />
          </Menu.Item>

        </Menu.Menu>
      </Menu>
    );
  }
}

export default AppNavBar;
