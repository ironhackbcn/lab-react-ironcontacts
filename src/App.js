import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import listOfContacts from './data/contacts.json';
import IronContactsTable from './components/IronContactsTable';
import RandomBtn from './components/RandomBtn';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: listOfContacts.slice(0, 5),
    };
  }

  handleAddRandomContact = () => {
    const randomContact =
      listOfContacts[Math.floor(Math.random() * listOfContacts.length)];
    this.setState({
      contacts: [...this.state.contacts, randomContact],
    });
    // console.log(this.state.contacts);
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <RandomBtn randomContact={this.handleAddRandomContact}>
          Add Random Contact
        </RandomBtn>
        <div>
          {this.state.contacts.map((contact, index) => {
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
