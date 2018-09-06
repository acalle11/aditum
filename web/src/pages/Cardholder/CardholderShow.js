import React, { Component } from 'react';
import {
  Show,
  Tab,
  TabbedShowLayout,
  TextField
} from 'react-admin';

import { Config } from '../../config';

class CardholderShow extends Component {
  componentDidMount() {
    document.title = Config.app.name + ' - Cardholder';
  }

  render() {
    return (
      <Show title="Cardholder Info" {...this.props}>
        <TabbedShowLayout>
          <Tab label="Cardholder Info">
          <TextField source="firstName" />
          <TextField source="lastName" />
          <TextField type="email" source="email" />
          <TextField source="department" />
          <TextField source="telephone" />
          <TextField source="rfidTag" />
          </Tab>

          <Tab label="Role" path="security">
            <TextField source="role" />
          </Tab>
        </TabbedShowLayout>
      </Show>
    );
  }
}

export default CardholderShow;