import React, {Component} from 'react';
import AppLogin from './AppLogin';
import AppSideBar from './AppSideBar';
import AppNavBar from './AppNavBar';

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
