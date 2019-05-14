import React from 'react';
import shortid from 'shortid';
import TableRow from './TableRow';

const ContactsTable = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>

        {
          props.contactsArray.slice(0, 5).map((oneContact) => <TableRow key={shortid.generate()} contact={oneContact} />)
        }
      </tbody>
    </table>
  )
};

export default ContactsTable; 