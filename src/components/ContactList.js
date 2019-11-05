import React, {
  Component
} from 'react';
import contacts from '../data/contacts.json';
import Contact from './Contact';

export default class ContactList extends Component {
  
  // Get first 5 contacts
  shortContacts = (contacts) => {
    return contacts.slice(0,5);
  }

  // Get a random contact
  getRandom = () => {
    let randomIndex = Math.floor((Math.random() * contacts.length) + 0);
    return contacts[randomIndex];
  }

  render () {
    return (
      <div>
        <button>Add Random Contact</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {
              this.shortContacts(contacts).map((contact, index) =>
                <Contact
                  key={index}
                  pictureUrl={contact.pictureUrl}
                  name={contact.name}
                  popularity={contact.popularity}
                />
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
}
