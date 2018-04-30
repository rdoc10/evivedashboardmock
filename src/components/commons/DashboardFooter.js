import React, { Component } from 'react';
import '../../styles/AppDashboard.css';

class DashboardFooter extends Component {
  render() {
    return (
      <div className = 'footer' >
        <div className = 'footer-left' >
          © 2018 Evive Health, LLC
        </div>
        <div className = 'footer-right' >
          <a href = '#' > Reset Tracking </a>
          <a href = '#' > Privacy Policy </a>
          <a href = '#' > Terms and Conditions </a>
        </div>
      </div>
    );
  }
}

export default DashboardFooter;
