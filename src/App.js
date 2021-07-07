import React, { Component } from 'react';
import './App.css';
import contacts from './data/contacts.json'
import Card from './components/card'

class App extends Component {
  state = {
    contactsList: contacts.splice(0,5)
  }

  handleAdd = () => {
    const contact = contacts[Math.floor(Math.random() * contacts.length)];
    this.setState({
      contactsList: [...this.state.contactsList, contact],
    })
  }

  sortName = () => {
    const sortedArray = this.state.contactsList.sort(function(a, b) {
      let nameA = a.name.toUpperCase(); // ignore upper and lowercase
      let nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0; // names must be equal
    })
    this.setState({
      contactsList: sortedArray,
    })
  }

  sortPopularity = () => {
    const sortedArray = this.state.contactsList.sort(function (a, b) {
      return b.popularity - a.popularity;
    })
    this.setState({
      contactsList: sortedArray,
    })
  }

  deleteContact = (index) => {
    let sortedArray = this.state.contactsList;
    sortedArray.splice(index,1)
    this.setState({
      contactsList: sortedArray,
    })
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.handleAdd}>Add Random Contact</button>
        <button onClick={this.sortName}>Sort by name</button>
        <button onClick={this.sortPopularity}>Sort by popularity</button>
        <table>
          <tbody>
            <tr>
              <th><h2>Picture</h2></th>
              <th><h2>Name</h2></th>
              <th><h2>Popularity</h2></th>
              <th><h2>Action</h2></th>
            </tr>
          </tbody>
            {
            this.state.contactsList.map((contact, index) => {
              return <Card key={index} pictureUrl={contact.pictureUrl} name={contact.name} popularity={contact.popularity} index={index} deleteContact={this.deleteContact} />
            })
          }
        </table>
      </div>
    );
  }
}

export default App;
