import React, { Component } from 'react';
import ContactComponent from './components/ContactComponent';
import logo from './logo.svg';
import './App.css';
import contacts from './data/contacts.json';
import AddContact from './components/AddContact';


class App extends Component {
state = {
  contacts: contacts.slice(0, 5),
}

handleRandom = () => {
  const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
  this.setState({
    contacts: [...this.state.contacts, randomContact]
  })
}

handleName = () => {
  this.setState({
    contacts: this.state.contacts.sort(function (a, b) {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    })
  })
}

handlePopularity = () => {
  this.setState({
    contacts: this.state.contacts.sort(function (a, b){
      return b.popularity -a.popularity
    })
  })
}

delete = (index) => {
 
  this.state.contacts.splice(index, 1);
  console.log(this.state);
  this.setState({
    contacts: [...this.state.contacts],
  })
}

handleContact = (contact) => {
  this.setState({
    contacts: [...this.state.contacts, contact],
    contact: '',
  })
}
  render() {
    return (
      <div className="App">
       <h1>IronContacts</h1>
       
       <button onClick={this.handleRandom}>Add random contact</button>
       <button onClick={this.handleName}>Sort by name</button>
       <button onClick={this.handlePopularity}>Sort by popularity</button>

       <ul>
        <li className="card">
         <h2>Picture</h2>
         <h2>Name</h2>
         <h2>Popularity</h2>
        </li>
        {this.state.contacts.map((contact, index) => {
          return <ContactComponent 
          key={index} 
          id={index}
          paraEliminar={this.delete}
          contact={contact}
          
          />
        })}
        </ul>
        <AddContact new={this.handleContact} />
      </div>
    );
  }
}

export default App;
