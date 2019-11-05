import React from 'react'

const Contact = ({ pictureUrl, name, popularity }) => {
  return (
    <tr>
      <td><img src={pictureUrl} alt={name} /></td>
      <td>{name}</td>
      <td>{popularity}</td>
    </tr>
  )
}

export default Contact;
