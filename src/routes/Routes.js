import React, { PureComponent } from 'react';
import {Router, Route, browserHistory, history} from 'react-router';
import {render} from 'react-dom'
import AppLoginPage from '../components/LoginPage';
import AppDashboard from '../components/Dashboard';

class Routes extends PureComponent {
  render() {
    return(
      <Router history = { browserHistory }>
        <Route path = '/' component = { AppLoginPage } />
        <Route path = '/login' component = { AppLoginPage } />
        <Route path = '/dashboard' component = { AppDashboard } />
      </Router>
    );
  }
}

export default Routes;
