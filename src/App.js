import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './data/contacts.json'

class App extends Component {
  state = {
    contacts: contacts.slice(0,5)
  }

  addContact = () => {
    const newArr = this.state.contacts;
    newArr.push(contacts[Math.floor(Math.random() * contacts.length)]);
    this.setState({
      contacts: newArr
    })
  }

  sortContactsAlpha = () => {
    let sortedContacts = contacts.sort((a, b) => {
      return a.name.localeCompare(b.name);
    })
    this.setState({
      contacts: sortedContacts,
    })
  }

  sortPopular = () => {
    let sortedContacts = contacts.sort((a, b) => {
      return a.popularity-b.popularity;
    })
    this.setState({
      contacts: sortedContacts,
    })
  }

  remove = (index) => {
    let arr = this.state.contacts;
    arr.splice(index, 1);
    this.setState({
      contacts: arr,
    })
  }
  


  render() {

    return (
      <div>
      <button onClick={this.addContact}>Random Celebrity</button>
      <button onClick={this.sortContactsAlpha}>Sort by Name</button>
      <button onClick={this.sortPopular}>Sort by Popularity</button>

      <table>
        <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
        </thead>
        <tbody>
            {this.state.contacts.map((item, i) => 
              <tr key={i}>
                <td><img src={item.pictureUrl} alt="" /></td>
                <td>{item.name}</td>
                <td>{item.popularity}</td>
                <td><button onClick={()=>{this.remove(i)}}>Remove</button></td>
              </tr>
            )};
        </tbody>
      </table>
    </div>
    );
  }
}

export default App;
