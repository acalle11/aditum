import React, { Component } from 'react';
import {
  DisabledInput,
  Edit,
  FormTab,
  TabbedForm,
  TextInput,
  required,
} from 'react-admin';

import { Config } from '../../config';

class CardholderEdit extends Component {
  componentDidMount() {
    document.title = Config.app.name + ' - Edit Cardholder';
  }

  render() {
    return (
      <Edit title="Edit" {...this.props}>
        <TabbedForm defaultValue={{ role: 'cardholder' }}>
          <FormTab label="Cardholder Info" path="">
            <DisabledInput source="id" />
            <TextInput source="firstName" validate={[required()]} />
            <TextInput source="lastName" validate={[required()]} />
            <TextInput type="email" source="email" validate={[required()]} />
            <TextInput source="department" validate={[required()]} />
            <TextInput source="telephone" validate={[required()]} />
            <TextInput source="rfidTag" validate={[required()]} />
          </FormTab>

          <FormTab label="Role" path="security">
            <TextInput source="role" validate={required()} />
          </FormTab>
        </TabbedForm>
      </Edit>
    );
  }
}

export default CardholderEdit;