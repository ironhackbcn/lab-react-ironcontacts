import React, { Component } from 'react';
import Contact from './Contact';

class ContactsTable extends Component {
  constructor(props) {
    super();
    this.state = {
      contacts: props.selectedContacts
    }
  }
  render(props) {
    console.log(this.props.selectedContacts);
    return (
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
      { 
        this.state.contacts.map( (contact) => <Contact {...contact} /> ) 
      }
      </table>
    )
  }
}

export default ContactsTable;
