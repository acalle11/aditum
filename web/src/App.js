import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import loopbackRestClient, { authClient } from 'aor-loopback';

import { Config } from './config';
import Dashboard from './pages/Dashboard';
import Cardholder from './pages/Cardholder';
import Employee from './pages/Employee';
import User from './pages/User';
import { createMuiTheme } from '@material-ui/core/styles';

import './App.css';

//Theming
const theme = createMuiTheme({
  palette: {
    type: "dark" 
    },
  },
);

class App extends Component {
  componentDidMount() {
    document.title = Config.app.name;
  }

  render() {
    return (
      <Admin title="Aditum Admin"
        dataProvider={loopbackRestClient(Config.api())}
        authProvider={authClient(Config.api() + '/Users/login')}
        dashboard={Dashboard}
        theme={theme}
      >
        <Resource {...Cardholder} />
        <Resource {...Employee} />
        <Resource {...User} />
      </Admin>
    );
  }
}

export default App;
