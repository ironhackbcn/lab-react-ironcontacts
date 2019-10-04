import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./data/contacts.json";

class App extends Component {
  state = {
    allContactsArray: contacts,
    contacts: contacts.slice(0,5)
  };
  render() {
    const { contact } = this.state;
    return (
      <div className="App">
        <header>
          <h1>Iron Contacts</h1>
          {
            contact.map ((artist)=>{
                return ()
            });
          }
        </header>
      </div>
    );
  }
}

export default App;
