import React, { Component } from 'react';
import {
  Show,
  Tab,
  TabbedShowLayout,
  TextField
} from 'react-admin';

import { Config } from '../../config';

class EmployeeShow extends Component {
  componentDidMount() {
    document.title = Config.app.name + ' - Employee';
  }

  render() {
    return (
      <Show title="Employee Info" {...this.props}>
        <TabbedShowLayout>
          <Tab label="Employee Info">
            <TextField source="id" />
            <TextField source="firstName" />
            <TextField source="lastName" />
            <TextField type="email" source="email" />
            <TextField source="department" />
            <TextField source="telephone" />
          </Tab>

          <Tab label="Role" path="security">
            <TextField source="role" />
          </Tab>
        </TabbedShowLayout>
      </Show>
    );
  }
}

export default EmployeeShow;