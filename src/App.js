import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import contacts from './data/contacts.json';
import TableContacts from './components/TableContacts';
import Button from './components/Button';

console.log('Contacts', contacts);
class App extends Component {
  state = {
    startingContacts: contacts.slice(0, 5),
  };

  // // Retorna un número aleatorio entre min (incluido) y max (excluido)
  // function getRandomArbitrary(min, max) {
  //   return Math.random() * (max - min) + min;
  // }

  addRandomContact = () => {
    // const contacts = contacts;
    const startingContacts = this.state.startingContacts;
    console.log('Long : ', contacts.length);
    const randomNumber = Math.floor(Math.random() * (contacts.length - 5) + 5);
    console.log('Random: ', randomNumber);
    this.setState(
      {
        startingContacts: [contacts[randomNumber], ...startingContacts],
      },
      () => {
        console.log('🤣', this.state.startingContacts);
      },
    );
  };

  sortByName = () => {
    // sort by name
    const sortedContacts = this.state.startingContacts.sort(function(a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    this.setState({ startingContacts: sortedContacts }, () => {
      console.log('🤣', this.state.startingContacts);
    });
  };
  sortByPopularity = () => {
    // sort by name
    const sortedContacts = this.state.startingContacts.sort(function(a, b) {
      return b.popularity - a.popularity;
    });
    this.setState({ startingContacts: sortedContacts }, () => {
      console.log('🤣', this.state.startingContacts);
    });
  };

  deleteContact = contactIndex => {
    console.log('Index: ', contactIndex);
    this.state.startingContacts.splice(contactIndex, 1);
    // this.setState({ startingContacts: this.state.startingContacts });
    this.setState({ startingContacts: [...this.state.startingContacts] });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div>
          <Button myProp={this.addRandomContact}>Add Random Contact</Button>
          <Button myProp={this.sortByName}>Sort by Name</Button>
          <Button myProp={this.sortByPopularity}>Sort by Popularity</Button>
        </div>
        <TableContacts
          contacts={this.state.startingContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
