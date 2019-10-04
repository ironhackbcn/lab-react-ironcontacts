import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TableContacts from "./components/TableContacts";
import Contacts from "./data/contacts";
import Button from "./components/Button";

class App extends Component {
  state = {
    contacts: Contacts.slice(0, 5)
  };

  addContact = () => {
    const { contacts } = this.state;
    const randomNumber = Math.floor(Contacts.length * Math.random());
    console.log(randomNumber);
    this.setState({
      contacts: [Contacts[randomNumber], ...contacts]
    });
  };
  sortByName = () => {
    const { contacts } = this.state;
    const sortName = contacts.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    this.setState({
      contacts: sortName
    });
  };

  sortByPopularity = () => {
    const { contacts } = this.state;
    const sortPopularity = contacts.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    this.setState({
      contacts: sortPopularity
    });
  };
  deleteContact = index => {
    const { contacts } = this.state;
    contacts.splice(index, 1);
    this.setState({
      contacts: contacts
    });
    console.log("DELETE");
  };
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div className="wrapper">
          <Button myFunction={this.addContact}>Add Contact</Button>
          <Button myFunction={this.sortByName}>Sort by name</Button>
          <Button myFunction={this.sortByPopularity}>Sort by Popularity</Button>
          <TableContacts
            contacts={this.state.contacts}
            delete={this.deleteContact}
          ></TableContacts>
        </div>
      </div>
    );
  }
}

export default App;
