import React, { Component } from 'react';
import './App.css';
import contacts from './data/contacts.json';
import List from './Components/List';
import Add from './Components/Add';
import ByName from './Components/ByName';
import ByPop from './Components/ByPop';


class App extends Component {
  state = {
    contacts: contacts.slice(0,5)
  };

  getRandomInt = (min, max)  => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  random = () => {
    console.log("Click")
    const contactRandom = this.getRandomInt(0,contacts.length);
    
    this.setState({
      contacts: [...this.state.contacts, contacts[contactRandom]],
    
    });
  };
  SortName = () => {
    this.setState({
      contacts: this.state.contacts.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)),
    })
  };

  SortPop = () => {
    this.setState({
      contacts: this.state.contacts.sort((a,b) => (a.popularity < b.popularity) ? 1 : ((b.popularity < a.popularity) ? -1 : 0)),
    })
  };

  deleteContact = (index) => {
    this.state.contacts.splice(index, 1);
    this.setState({
      contacts: [...this.state.contacts],
    })
  }
  

  
  render() {
   const {contacts} = this.state;
    return (
      <>
      <div className="App">
        <h1>Iron Contacts</h1>
          <Add button={this.random} />
          <ByName button={this.SortName} />
          <ByPop button={this.SortPop} />
          <div className="h2">
            <h2>Pic</h2>
            <h2>Name</h2>
            <h2>Pop</h2>
          </div>
          <List list={contacts} del={this.deleteContact}/>
      </div>
      </>
    );
  };
};

export default App;
