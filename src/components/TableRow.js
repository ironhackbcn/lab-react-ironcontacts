// src/components/TableRow.js
import React from 'react';

// Destructuring the prop object immediately
const TableRow = ({ contact }) => {
  return (
    <tr>
      <td><img src={contact.pictureUrl} alt={contact.name} width="60" /></td>
      <td>{contact.name}</td>
      <td>{contact.popularity.toFixed(2)}</td>
    </tr>
  )
};

export default TableRow;