import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import listOfContacts from './data/contacts.json';
import IronContactsTable from './components/IronContactsTable';
import RandomBtn from './components/RandomBtn';
import SortByNameBtn from './components/SortByNameBtn';
import SortByPopularity from './components/SortByPopularity';

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

  handleSortByName = () => {
    this.setState({
      contacts: [...this.state.contacts].sort(function(a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      }),
    });
  };

  handleSortByPopularity = () => {
    this.setState({
      contacts: [...this.state.contacts].sort(function(a, b) {
        if (a.popularity < b.popularity) {
          return 1;
        }
        if (a.popularity > b.popularity) {
          return -1;
        }
        return 0;
      }),
    });
  };

  deleteContact = (index) => {
    this.state.contacts.splice(index,1);
    this.setState({
      contacts: [...this.state.contacts],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <RandomBtn randomContact={this.handleAddRandomContact}>
          Add Random Contact
        </RandomBtn>
        <SortByNameBtn sortName={this.handleSortByName}>
          Sort by name
        </SortByNameBtn>
        <SortByPopularity sortPopularity={this.handleSortByPopularity}>
          Sort by popularity
        </SortByPopularity>
        <div>
          {this.state.contacts.map((contact, index) => {
            return (
              <IronContactsTable
                key={`${contact[0]}-${index}`}
                name={contact.name}
                pictureUrl={contact.pictureUrl}
                popularity={contact.popularity}
                deleteContact={() => this.deleteContact(index)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
