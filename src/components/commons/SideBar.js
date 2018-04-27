import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import SideCards from '../SideCards';
import './../../styles/AppDashboard.css';
import SortableCards from '../SortableCards';
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

const CAMPAIGNS = 'https://eeab9099f80ae9d42d2d-c92ae8cf13840fd451d25c3e40c26443.ssl.cf1.rackcdn.com/6cc51395d081dd909f670d529ecf38c60084ee68cb82a7345578664e34a88369c8f52be2d492a11bd129dd4b9dc2767a946cf764428103e2e75f085982a5f724.png';

class AppSideBar extends Component {

  sidebar = () => {
    return (
      <div className = 'sidebar'>
      <Menu.Item id="hover" name="user">
        <Icon name = 'user' className = 'icon' />
          <div className = 'icon-desc'> User </div>
      </Menu.Item>

      <Menu.Item id="hover" name="home">
        <Icon name = 'home' className = 'icon' />
          <div className = 'icon-desc'> Home </div>
        </Menu.Item>

        <Menu.Item  id="hover" name="block layout">
          <Icon name = 'block layout' className = 'icon' />
            <div className = 'icon-desc'> My Resources </div>
        </Menu.Item>

        <Menu.Item  id="hover" name="clock">
          <Icon name = 'clock' className = 'icon' />
            <div className = 'icon-desc'> Recently Used </div>
        </Menu.Item>

        <Menu.Item  id="hover" name="trophy">
          <Icon name = 'trophy' className = 'icon' />
            <div className = 'icon-desc'> Challenges </div>
        </Menu.Item>

        <Menu.Item  id="hover" name="help">
          <Icon name = 'help' className = 'icon' />
            <div className = 'icon-desc'> Help Center </div>
        </Menu.Item>
      </div>
    );

  }

  carousel = () => (
    <div className = 'campaigns-carousel'>
      <Carousel>
        <div>
          <img alt = 'image-not-found' src = {CAMPAIGNS} />
        </div>
        <div>
          <img alt = 'image-not-found' src = {CAMPAIGNS} />
        </div>
      </Carousel>
    </div>
  )


  render() {
    const visible = this.props.toggle;
    return (
      <div className = 'sidebar'>
        <Sidebar.Pushable as = { Segment } >

          <Sidebar as = {Menu} animation = 'scale down' width = 'thin' visible = {visible} icon = 'labeled' vertical inverted>
            { this.sidebar() }
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>

              <div className = 'voting' >
                <Card fluid color = 'red' header = { 'Which exercise did you do yesterday?' } />
              </div>

              <div className = 'text-sample'> <h2>CAMPAIGNS</h2> </div>

              <div className = 'dashboard-center'>
                <Image className = 'campaigns' src = { CAMPAIGNS } />

                <div className = 'sidecards'>
                  <SideCards />
                </div>
              </div>

              <div className = 'mycards'>
                <div className = 'text-sample'> <h3>MY FAVORITES</h3> </div>
                <SortableCards />
              </div>

            </Segment>
          </Sidebar.Pusher>

        </Sidebar.Pushable>
      </div>
    );
  }
}

export default AppSideBar;
