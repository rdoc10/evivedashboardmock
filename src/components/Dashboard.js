import React, {Component} from 'react';
import AppSideBar from './commons/SideBar';
import AppNavBar from './commons/NavBar';

class AppDashboard extends Component {
  state = {
    sidebarToggle: false
  };

  toggleSidebar = () => {
    this.setState((prevState) => ({
      sidebarToggle: !prevState.sidebarToggle
    }))
  };

  render() {
    return(
      <div className = 'dashboard-container'>
        <AppNavBar toggleSidebar={this.toggleSidebar}/>
        <AppSideBar toggle={this.state.sidebarToggle}/>



      </div>
    );
  }
}

export default AppDashboard;
