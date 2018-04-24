import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import AppLogin from './AppLogin';
import '../stylesheets/AppLoginPage.css';

class AppLoginPage extends Component {
  render() {
    return(
      <Grid>
        <Grid.Column width = {5}>
          <AppLogin />
        </Grid.Column>

        <Grid.Column width = {11}>
          <Image className = 'first-image'
          src = 'https://59b602507414a6d288cf-98a1a17df509e6abbdfa88e2a08a0e33.ssl.cf1.rackcdn.com/static_resources/auth/banner_bg.jpg' />
        </Grid.Column>
      </Grid>
    );
  }
}

export default AppLoginPage;


// login page functionality: redux
// validation
// footer
// cards dropable: react.sortable
// pinnable
// sidebar always present
// alignmnet
