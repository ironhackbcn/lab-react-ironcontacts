import React, { Component } from 'react';
import '../css/App.css';
import Contact from './Contact';
import contacts from '../data/contacts.json';

class App extends Component {
  state = {
    myContacts: contacts.slice(0, 5),
  };

  handleAddContact = () => {
    const { myContacts } = this.state;
    const newContact =
      contacts[Math.floor(Math.random() * (contacts.length - 1) + 1)];
    const newState = [newContact, ...myContacts];
    this.setState({
      myContacts: newState,
    });
  };

  handleSortbyName = () => {
    const { myContacts } = this.state;

    const newState = [...myContacts].sort((name1, name2) => {
      if (name1.name > name2.name) {
        return 1;
      }
      if (name1.name < name2.name) {
        return -1;
      }
      return 0;
    });
    this.setState({
      myContacts: newState,
    });
  };

  handleSortbyPopularity = () => {
    const { myContacts } = this.state;

    const newState = [...myContacts].sort((name1, name2) => {
      return name2.popularity - name1.popularity;
    });
    this.setState({
      myContacts: newState,
    });
  };

  handleDelete = (index) => {
    const { myContacts } = this.state;
    console.log(index);
    myContacts.splice(index, 1);

    this.setState({
      myContacts: myContacts,
    });
  };

  render() {
    const { myContacts } = this.state;
    return (
      <div className="App">
        <h1>IronHack Contacts</h1>
        <button onClick={this.handleAddContact}>Add Contact</button>
        <button onClick={this.handleSortbyName}>Sort by Name</button>
        <button onClick={this.handleSortbyPopularity}>
          Sort by Popularity
        </button>
        <div className="container">
          {myContacts.map((contact, index) => {
            return (
              <Contact
                key={`${contact.name}-${index}`}
                pictureUrl={contact.pictureUrl}
                name={contact.name}
                popularity={contact.popularity}
                handleDelete={this.handleDelete}
                index={index}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
