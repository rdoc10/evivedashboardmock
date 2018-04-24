import React, { Component } from 'react';
import { getCards } from '../services/cardsApi';
import SideCards from './SideCards';
import MyCards from './MyCards';
import '../stylesheets/AppDashboard.css';
import {
  Sidebar,
  Button,
  Segment,
  Menu,
  Image,
  Icon,
  Header,
  Card,
} from 'semantic-ui-react';

class AppSideBar extends Component {

  render() {
    const visible = this.props.toggle;
    return (
      <div className = 'sidebar'>
        <Sidebar.Pushable as = { Segment } >
          <Sidebar as = {Menu} animation = 'scale down' width = 'thin' visible = {visible} icon = 'labeled' vertical inverted>

          <Menu.Item id="hover" name="user">
            <Icon name="user" />
              User
          </Menu.Item>

          <Menu.Item id="hover" name="home">
            <Icon name="home" />
              Home
            </Menu.Item>

            <Menu.Item  id="hover" name="block layout">
              <Icon name="block layout" />
                My Resources
            </Menu.Item>

            <Menu.Item  id="hover" name="clock">
              <Icon name="clock" />
                Recently Used
            </Menu.Item>

            <Menu.Item  id="hover" name="location arrow">
              <Icon name="location arrow" />
                Nearby
            </Menu.Item>

            <Menu.Item  id="hover" name="trophy">
              <Icon name="trophy" />
                Challenges
            </Menu.Item>

            <Menu.Item  id="hover" name="help">
              <Icon name="help" />
                Help Center
            </Menu.Item>

          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>

              <Header as = 'h2'>CAMPAIGNS</Header>

                <Image className = 'campaigns' src = 'https://eeab9099f80ae9d42d2d-c92ae8cf13840fd451d25c3e40c26443.ssl.cf1.rackcdn.com/6cc51395d081dd909f670d529ecf38c60084ee68cb82a7345578664e34a88369c8f52be2d492a11bd129dd4b9dc2767a946cf764428103e2e75f085982a5f724.png'/>

                <div className = 'sidecards'>
                  <SideCards />
                </div>

              <br/><br/><br/><br/><br/><br/>

              <div className = 'mycards'>
                <MyCards />
              </div>

            </Segment>
          </Sidebar.Pusher>

        </Sidebar.Pushable>
      </div>
    );
  }
}

export default AppSideBar;
