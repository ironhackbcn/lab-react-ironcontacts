import React, { Component } from 'react';
import './App.css';
import contacts from './data/contacts.json';
import TableRow from './components/TableRow.js';

class App extends Component {
  state = {
    data: contacts.slice(0,5)
  }

  randomContactHandler =() => {
    const randomContact = contacts[Math.floor(Math.random()*contacts.length)];    
    this.setState({
      data: [...this.state.data, randomContact]
    })
  }

  sortByNameHandler =() => {
    const sorted = [this.state.data].sort((a, b) => {      
      return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0;
    });
      this.setState({
        data: sorted
      })
  }

  sortByPopularityHandler =() => {
    const sorted = [...this.state.data].sort((a, b) => {
      return (a.popularity < b.popularity) ? 1 : (a.popularity > b.popularity) ? -1 : 0;
    });
      this.setState({
        data: sorted
    })
  }

  deleteHandler = (id) => {    
    const contactsCopy = [...this.state.data]
    contactsCopy.splice(id, 1)
    this.setState({
      data: contactsCopy
    })
  }  

  render() {

    const contacts = this.state.data.map((contact, index) => 
      <TableRow key={`id-${index}`} id={index} contact={contact} onDelete={this.deleteHandler}/>
    );
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.randomContactHandler}>Add random Contact</button>
        <button onClick={this.sortByNameHandler}>Sort by name</button>
        <button onClick={this.sortByPopularityHandler}>Sort by Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {contacts}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
