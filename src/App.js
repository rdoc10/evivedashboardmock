import React, { Component } from 'react';
import './App.css';
import AppLoginPage from './components/LoginPage';
import Routes from './routes/Routes';

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
