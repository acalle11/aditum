import React, { Component } from 'react';
import {
  Create,
  SaveButton,
  SimpleForm,
  TextInput,
  Toolbar,
  required,
} from 'react-admin';

import { Config } from '../../config';

const EmployeeCreateToolbar = ({ ...props }) => (
  <Toolbar {...props}>
    <SaveButton
      label="Save"
      redirect="show"
      submitOnEnter={true}
    />
  </Toolbar>
);

class EmployeeCreate extends Component {
  componentDidMount() {
    document.title = Config.app.name + ' - Create Employee';
  }

  render() {
    return (
      <Create {...this.props}>
        <SimpleForm
          toolbar={<EmployeeCreateToolbar />}
          defaultValue={{ role: 'employee' }}
        >
          <TextInput source="firstName" validate={[required()]} />
          <TextInput source="lastName" validate={[required()]} />
          <TextInput type="email" source="email" validate={[required()]} />
          <TextInput source="department" validate={[required()]} />
          <TextInput source="telephone" validate={[required()]} />
          <TextInput source="role" validate={[required()]} />
        </SimpleForm>
      </Create>
    );
  }
}

export default EmployeeCreate;