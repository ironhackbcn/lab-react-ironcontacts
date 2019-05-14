import React, { Component } from 'react';
import Contact from './Contact';

class ContactsTable extends Component {
  render(props) {
    console.log(this.props);
    return (
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
      { 
        this.props.selectedContacts.map( (contact) => <Contact {...contact} /> ) 
      }
      </table>
    )
  }
}

export default ContactsTable;
