import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './data/contacts.json';
import IronContactsTable from './components/IronContactsTable';
import RandomBtn from './components/RandomBtn';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: contacts,
      contactsInitialFilter: [],
    };
  }

  handleAddRandomContact = () => {
    const contacts = this.state;
    this.setState(
      {
        contacts: [...contacts],
        contactsInitialFilter: ,
      },
      () => {
        console.log('🤣', this.state.contacts);
      },
    );
  };

  render() {
    const initialSize = 5;
    const contactsInitialFilter = contacts.slice(0, initialSize);
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <RandomBtn randomContact={this.handleAddRandomContact}>
          Add Random Contact
        </RandomBtn>
        <div>
          {contactsInitialFilter.map((contact, index) => {
            return (
              <IronContactsTable
                key={`${contact[0]}-${index}`}
                name={contact.name}
                pictureUrl={contact.pictureUrl}
                popularity={contact.popularity}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
