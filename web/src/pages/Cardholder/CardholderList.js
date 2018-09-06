import React, { Component } from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ShowButton
} from 'react-admin';

import { Config } from '../../config';

class CardholderList extends Component {
  componentDidMount() {
    document.title = Config.app.name + ' - Cardholder';
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
          <TextField source="rfidTag" />
          <EditButton />
          <ShowButton />
        </Datagrid>
      </List>
    );
  }
}

export default CardholderList;