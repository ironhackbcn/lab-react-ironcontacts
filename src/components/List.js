import React, { Component } from "react";
import "./List.css";
import Titles from "./Titles";
import Card from "./Card";
import contacts from "../data/contacts.json";
// const end = 5;

class List extends Component {
  state = {
    contacts: contacts,
    indexNr: 5
  };

  addNextContact = () => {
    this.setState({
      indexNr: this.state.indexNr + 1
    });
    console.log("cheer up girl");
  };

  sortName = () => {
    // this.setState({
    //   indexNr: this.state.indexNr + 1
    // });
    //   contacts.sort(function(0, indexNr){
    //     return a.firstname.localeCompare(b.firstname);
    // })
    console.log("cheer up girl2");
  };

  sortPopularity = () => {
    // this.setState({
    //   indexNr: this.state.indexNr + 1
    // });
    console.log("cheer up girl3");
  };

  render() {
    return (
      <div className="List">
        <button onClick={this.addNextContact}>Add NEXT (Random) Contact</button>
        <button onClick={this.sortName}>Sort by name</button>
        <button onClick={this.sortPopularity}>Sort by popularity</button>
        <Titles />
        {/* <Card
          pictureUrl={this.state.contacts[this.state.indexNr].pictureUrl}
          name={this.state.contacts[this.state.indexNr].name}
          popularity={this.state.contacts[this.state.indexNr].popularity}
        /> */}
        <ul>
          {contacts.slice(0, this.state.indexNr).map((oneContact, index) => (
            <Card
              key={index}
              pictureUrl={oneContact.pictureUrl}
              name={oneContact.name}
              popularity={oneContact.popularity}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
