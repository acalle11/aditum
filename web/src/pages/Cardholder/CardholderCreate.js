import React, { Component } from 'react';
import {
  Create,
  SaveButton,
  SimpleForm,
  TextInput,
  Toolbar,
  required,
} from 'react-admin';

import axios from 'axios';

import { Config } from '../../config';

const CardholderCreateToolbar = ({ ...props }) => (
  <Toolbar {...props}>
    <SaveButton
      label="Save"
      redirect="show"
      submitOnEnter={true}
    />
    <SaveButton
      label="SCAN"
      redirect={false}
      submitOnEnter={false}
      variant="flat"
      onClick= { function() { axios.get('/api/arduino').then(result =>
        //  console.log(result))
          alert('ID is ' + result.data));
        
        }}
    />
  </Toolbar>
);

class CardholderCreate extends Component {
  componentDidMount() {
    document.title = Config.app.name + ' - Create Cardholder';
  }

  render() {
    return (
      <Create {...this.props}>
        <SimpleForm
          toolbar={<CardholderCreateToolbar />}
          defaultValue={{ role: 'cardholder' }}
        >
          <TextInput source="firstName" validate={[required()]} />
          <TextInput source="lastName" validate={[required()]} />
          <TextInput type="email" source="email" validate={[required()]} />
          <TextInput source="department" validate={[required()]} />
          <TextInput source="telephone" validate={[required()]} />
          <TextInput source="rfidTag" validate={[required()]} />
          <TextInput source="role" validate={[required()]} />
        </SimpleForm>
      </Create>
    );
  }
}

export default CardholderCreate;