import React, { Component } from 'react';
import './App.css';
import Contact from './components/Contact';
import contacts from './data/contacts.json';

class App extends Component {
  state = {
    contactsInitialList: contacts.slice(0, 5)
  }

  handleClick = () => {
    const randomContact = contacts[Math.floor(Math.random()*contacts.length)];
    this.setState({
      contactsInitialList: [...this.state.contactsInitialList, randomContact]
    })
  }

  sortByName = () => {
    const sortedByName = this.state.contactsInitialList.sort((a,b) => {
      return (a.name).localeCompare(b.name);
      });
    this.setState({
      contactsInitialList: [...sortedByName]
    })
  }

  sortByPopularity = () => {
    const sortedByPopularity = this.state.contactsInitialList.sort((a,b) => {
      return b.popularity - a.popularity;
      });

    this.setState({
      contactsInitialList: [...sortedByPopularity]
    })
  }

  deleteFunc = (contact) => {
    const newArray = this.state.contactsInitialList.splice(contact.index, 1);
    this.setState({
      contactInitialList: [...newArray]
    })
  }

  renderList() {
  return (this.state.contactsInitialList.map((item, index) => {
    return  <Contact
              name= {item.name}
              pictureUrl={item.pictureUrl}
              popularity={item.popularity}
              key={`id${index}`}
              index={index}
              onDelete={this.deleteFunc}
            />
    }))
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.handleClick}>Add random contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <div className="header">
          <h2>Picture</h2>
          <h2>Name</h2>
          <h2>Popularity</h2>
        </div>
        <ul>{this.renderList()}</ul>
      </div>
    )
  }
}

export default App;
