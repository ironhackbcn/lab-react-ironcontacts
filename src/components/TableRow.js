// src/components/TableRow.js
import React from 'react';

const TableRow = (props) => {
  return (
    <tr>
      <td><img src={props.contact.pictureUrl} alt={props.contact.name} width="60" /></td>
      <td>{props.contact.name}</td>
      <td>{props.contact.popularity.toFixed(2)}</td>
      <td><button className='btn' onClick={() => props.deleteContactFunction(props.arrayIndex)}>Delete</button></td>
    </tr>
  )
};

export default TableRow;