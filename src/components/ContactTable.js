import React from 'react'

const ContactList = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
      </thead>
      {props.children}
    </table>
  )
}

export default ContactList;