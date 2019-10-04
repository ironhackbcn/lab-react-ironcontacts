import React, { Component } from "react";
import "./App.css";
import contacts from "./data/contacts.json";
import Card from "./components/Card.js";

class App extends Component {
  state = {
    allContactsArray: contacts,
    contacts: contacts.slice(0, 5)
  };
  render() {
    const { contacts } = this.state;
    return (
      <div className="App">
        <header className="Jumbotron">
          <h1>Iron Contacts</h1>
          <h2>Picture Name Popularity</h2>
          {contacts.map((artist, index) => {
            return (
              <Card
                key={`${artist[0]}-${index}`}
                name={artist.name}
                photo={artist.pictureUrl}
                popularity={artist.popularity}
              />
            );
          })}
        </header>
      </div>
    );
  }
}

export default App;
