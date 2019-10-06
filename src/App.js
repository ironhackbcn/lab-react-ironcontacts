import React, { Component } from "react";
import "./App.css";
import Contact from "./components/Contact";
import contacts from "./data/contacts.json";
import Button from "./components/Button";

class App extends Component {
  state = {
    contacts: contacts.splice(0, 5) // 5 selected contacts
  };

  randomActor = () => {
    return contacts[Math.floor(Math.random() * contacts.length)];
  }; // generate random actor to add

  // function to add random actor
  addRandom = () => {
    const { contacts } = this.state;
    this.setState({
      contacts: [this.randomActor(), ...contacts]
    });
  };
  // function to sort by name
  sortByName = () => {
    const { contacts } = this.state;
    const sortedList = contacts.sort((Contact1, Contact2) =>
      Contact1.name > Contact2.name ? 1 : Contact1.name < Contact2.name ? -1 : 0
    );
    this.setState({
      contacts: sortedList
    });
  };
  // function to sort by popularity
  sortByPopularity = () => {
    const { contacts } = this.state;
    const sortedList = contacts.sort((Contact1, Contact2) =>
      Contact2.popularity > Contact1.popularity
        ? 1
        : Contact2.popularity < Contact1.popularity
        ? -1
        : 0
    );
    this.setState({
      contacts: sortedList
    });
  };
  // function to delet contact
  deleteContact = index => {
    const { contacts } = this.state;
    contacts.splice(index, 1);
    this.setState({
      contacts: contacts
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <Button myProp={this.addRandom}>Add Random Contact</Button>
        <Button myProp={this.sortByName}>Sort By Name</Button>
        <Button myProp={this.sortByPopularity}>Sort by Popularity</Button>
        <table className="table">
          <thead>
            <tr>
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact, index) => {
              return (
                <Contact
                  pictureUrl={contact.pictureUrl}
                  name={contact.name}
                  popularity={contact.popularity}
                  id={index}
                  deleteContact={this.deleteContact}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
