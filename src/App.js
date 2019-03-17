import React, { Component } from 'react';
import './App.css';
import contacts from './data/contacts.json';
import TableRow from './components/TableRow.js';
// import { constants } from 'perf_hooks';

class App extends Component {
  state = {
    data: contacts.slice(0,5)
  }

  randomContactHandler = () => {
    const randomContact = contacts[Math.floor(Math.random()*contacts.length)];
    this.setState({
      data: [...this.state.data, randomContact]
    })
  }

  sortByNameHandler =() => {
    const sorted = this.state.data.sort((a, b) => {
      const textA = a.name;
      const textB = b.name;
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
      this.setState({
        data: sorted
      })
  }

  sortByPopularityHandler =()=> {
    const sorted = this.state.data.sort((a, b) => {
      const textA = a.popularity;
      const textB = b.popularity;
      return (textA < textB) ? 1 : (textA > textB) ? -1 : 0;
    });
      this.setState({
        data: sorted
    })
  }

  deleteHandler = (name) => {
    const filtered = this.state.data.filter((contact) => {
      return name !== contact.name;
    });
    this.setState({
      data: filtered
    })
  }
  

  render() {
    const items = this.state.data.map((contact, index) => 
      <TableRow key={index} contact={contact} delete={this.deleteHandler}/>
    );
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={() => this.randomContactHandler()}>Add random Contact</button>
        <button onClick={() => this.sortByNameHandler()}>Sort by name</button>
        <button onClick={() => this.sortByPopularityHandler()}>Sort by Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
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
