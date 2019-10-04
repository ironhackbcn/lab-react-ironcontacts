import React, { Component } from "react";
import "./App.css";
import contacts from "./data/contacts.json";
import Card from "./components/Card.js";

class App extends Component {
  state = {
    allContactsArray: contacts,
    contacts: contacts.slice(0, 5)
  };

  handlerAddContact = () => {
    const { contacts } = this.state;
    const { allContactsArray } = this.state;
    const number = Math.floor(
      Math.random() * this.state.allContactsArray.length
    );
    const newState = [...contacts, allContactsArray[number]];
    this.setState({ contacts: [...newState] });
  };

  handlerDeleteContact = ({ index }) => {
    const { contacts } = this.state;
    contacts.splice(index, 1);
    this.setState({ contacts: contacts });
  };

  handlerSortByName = () => {
    const { contacts } = this.state;
    const newState = contacts.sort((ArtistA, ArtistB) => {
      if (ArtistA.name < ArtistB.name) {
        return -1;
      }
      if (ArtistA.name > ArtistB.name) {
        return 1;
      }
      return 0;
    });
    this.setState({ contacts: newState }, () => {
    });
  };

  handlerSortByPopularity = () => {
    const { contacts } = this.state;
    const newState = contacts.sort((ArtistA, ArtistB) => {
      if (ArtistA.popularity < ArtistB.popularity) {
        return -1;
      }
      if (ArtistA.popularity > ArtistB.popularity) {
        return 1;
      }
      return 0;
    });
    this.setState({ contacts: newState }, () => {
    });
  };
  render() {
    const { contacts } = this.state;
    return (
      <div className="App">
        <div className="button-iteraction">
          <button onClick={this.handlerAddContact}>Add Random Contact</button>
          <button onClick={this.handlerSortByName}>Sort by Name</button>
          <button onClick={this.handlerSortByPopularity}>
            Sort by popularity
          </button>
        </div>
        <header className="Jumbotron">
          <h1>Iron Contacts</h1>
          <div className="Title">
            <div>
              <h2>Picture</h2>
            </div>
            <div>
              <h2>Name</h2>
            </div>
            <div>
              <h2>Popularity</h2>
            </div>
            <div>
              <h2>Action</h2>
            </div>
          </div>
          {contacts.map((artist, index) => {
            return (
              <div>
                <Card
                  key={`${artist[0]}-${index}`}
                  name={artist.name}
                  photo={artist.pictureUrl}
                  popularity={artist.popularity}
                  handlerDelete={this.handlerDeleteContact}
                  index={index}
                />
              </div>
            );
          })}
        </header>
      </div>
    );
  }
}

export default App;
