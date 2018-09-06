import React, { Component } from 'react';
import { List, Datagrid, TextField } from 'react-admin';

import { Config } from '../../config';

class EmployeeList extends Component {
  componentDidMount() {
    document.title = Config.app.name + ' - Employee';
  }

  render() {
    return (
      <List {...this.props}>
        <Datagrid>
          <TextField source="id" />
          <TextField source="firstName" />
          <TextField source="lastName" />
          <TextField type="email" source="email" />
          <TextField source="department" />
          <TextField source="telephone" />
        </Datagrid>
      </List>
    );
  }
}

export default EmployeeList;