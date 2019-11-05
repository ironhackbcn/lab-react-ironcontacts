import React from 'react'

const Contact = ({ pictureUrl, name, popularity, deleteContact }) => {
  return (
    <tr>
      <td><img src={pictureUrl} alt={name} /></td>
      <td>{name}</td>
      <td>{popularity}</td>
      <td><button onClick={() => {deleteContact(name)}}>Delete</button></td>
    </tr>
  )
}

export default Contact;
