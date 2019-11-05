import React, {
  Component
} from 'react';
import contactsJSON from '../data/contacts.json';
import Contact from './Contact';

export default class ContactList extends Component {

  constructor() {
    super();
    this.state = {
      contacts: contactsJSON.slice(0, 5)
    }
  }
  
  // Get a random contact
  addRandom = () => {
    let randomIndex = Math.floor((Math.random() * contactsJSON.length) + 0);
    this.state.contacts.push(contactsJSON[randomIndex]);
      this.setState({
      contacts: this.state.contacts
    })   
  }

  render () {
    return (
      <div>
        <button onClick={ () => this.addRandom() }>Add Random Contact</button>
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
              this.state.contacts.map((contact, index) =>
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
