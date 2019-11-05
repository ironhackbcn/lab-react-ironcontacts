import React from 'react'
import contacts from '../data/contacts.json';
import Contact from './Contact';

const ContactList = () => {
  const shortContacts = contacts.slice(0,5);
  return (
    <tbody>
      {
        shortContacts.map((contact, index) =>
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
