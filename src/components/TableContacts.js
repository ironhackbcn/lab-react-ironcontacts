import React, { Component } from 'react';
import './TableContacts.css';
import TableRow from './TableRow';

class TableContacts extends Component {
  render() {
    const { contacts, deleteContact } = this.props;
    // const deleteFunction = deleteContact();

    // console.log('DeleteFunction: ', deleteContact);
    return (
      <div className="table">
        <table>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
            {contacts.map((SingleContact, index) => (
              <TableRow
                key={`${index}`}
                index={index}
                picture={SingleContact.pictureUrl}
                name={SingleContact.name}
                popularity={SingleContact.popularity}
                deleteContact={deleteContact}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableContacts;
