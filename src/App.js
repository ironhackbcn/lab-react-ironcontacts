import React, { Component } from 'react';
import './App.css';
import contacts from './data/contacts.json';
import Row from './Row';

class App extends Component {
  state = {
    data: contacts.slice(0, 5),
  }  

  getRandomContact = () => {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    this.setState({
      data: [...this.state.data, randomContact],
    });
  }

  sortContactByName = () => {
    const sortedContacts = [...this.state.data.sort((a, b) => {
      var nameA = a.name.split(" ")[0].toUpperCase();
      var nameB = b.name.split(" ")[0].toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    })];
    this.setState({
      data: sortedContacts,
    });
  }

  sortContactByPopularity = () => {
    const sortedContacts = [...this.state.data.sort((a, b) => {
      return b.popularity - a.popularity;
    })];
    console.log(sortedContacts);
    this.setState({
      data: sortedContacts,
    });
  }

  deleteContact = (name) => {
    const newArray = this.state.data.filter((el) => {
      return name !== el.name;
    });
    this.setState({
      data: newArray,
    });
  }

  render() {
    const items = this.state.data.map((contact, index) => 
      <Row key={index} contact={contact} delete={this.deleteContact} />
    );

    return (
      <div className="App">
        <h1>Iron Contacts</h1>
        <button onClick={this.getRandomContact} className="btn">Add random contact</button>
        <button onClick={this.sortContactByName} className="btn">Sort By Name</button>
        <button onClick={this.sortContactByPopularity} className="btn">Sort By Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
