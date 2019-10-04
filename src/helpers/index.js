
import contacts from '../data/contacts.json';

export const randomContact = () => {
    return contacts[Math.floor(Math.random() * contacts.length)];
  }