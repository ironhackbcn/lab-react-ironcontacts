import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import contacts from './data/contacts.json';
import List from './components/List'

class App extends Component {
  state = {
    mycontacts: contacts.slice(0, 5),
  }

  handleRandom = () => {
    const arrayLength = contacts.length;
    const randomContact = contacts[Math.floor(Math.random() * arrayLength)];

    this.setState({
      mycontacts: [...this.state.mycontacts, randomContact],
    })
  }

  handleSortbyName = () => {
    this.setState({
      mycontacts: this.state.mycontacts.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)),
    })
  }

  handleSortbyPopularity = () => {
    this.setState({
      mycontacts: this.state.mycontacts.sort((a,b) => (a.popularity > b.popularity) ? 1 : ((b.popularity > a.popularity) ? -1 : 0)),
    })
  }

  handleDelete = (index) => {
    this.state.mycontacts.splice(index, 1);
    console.log(index);
    this.setState({
      mycontacts: [...this.state.mycontacts],
    })
  }

  render() {
    const { mycontacts } = this.state;
    
    return (
      <div className="App">
        <h1>Contacts</h1>
        <button onClick={this.handleRandom}>Add Random</button>
        <button onClick={this.handleSortbyName}>Sort by name</button>
        <button onClick={this.handleSortbyPopularity}>Sort by popularity</button>
        <ul>
          {mycontacts.map((contact, index) => {
          return (
            <List key={index} index={index} contact={contact} handleDelete={this.handleDelete}/>
          );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
