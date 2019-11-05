import React, {
  Component
} from 'react';
import contactsJSON from '../data/contacts.json';
import Contact from './Contact';

export default class ContactList extends Component {

  constructor() {
    super();
    this.state = {
      // Start with only 5 contacts
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

  // Sort by name
  sortName = () => {
    this.setState({
      contacts: this.state.contacts.sort((a, b) => a.name.localeCompare(b.name))
    })
  }

  // Sort by popularity
  sortPopularity = () => {
    this.setState({
      contacts: this.state.contacts.sort((a, b) => b.popularity - a.popularity)
    })
  }

  // Delete contact
  deleteContact = (name) => {
    let newContacts = [...this.state.contacts];
    this.setState({
      contacts: newContacts.filter((contact) => {
        return contact.name !== name
      })
    })
    console.log('!')
  }

  render () {
    return (
      <div>
        <button onClick={ () => this.addRandom() }>Add Random Contact</button>
        <button onClick={ () => this.sortName() }>Sort by name</button>
        <button onClick={ () => this.sortPopularity() }>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
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
                  deleteContact={this.deleteContact}
                />
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
}
