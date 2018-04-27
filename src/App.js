import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppLoginPage from './components/LoginPage';
import AppDashboard from './components/Dashboard';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div className = 'container'>
        <Routes />
      </div>
    );
  }
}

export default App;
