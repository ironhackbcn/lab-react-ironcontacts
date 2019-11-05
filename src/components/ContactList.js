import React from 'react'
import contacts from '../data/contacts.json';
import Contact from './Contact';

const ContactList = () => {
  return (
    <tbody>
      {
        contacts.map((contact, index) =>
          <Contact
            key={index}
            pictureUrl={contact.pictureUrl}
            name={contact.name}
            popularity={contact.popularity}
          />
        )
      }
    </tbody>
  )
}

export default ContactList;
