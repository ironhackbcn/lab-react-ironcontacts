import React, { Component } from 'react';
import './App.css';
import contacts from './data/contacts.json'
import Contacts from './components/Contacts'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Contacts data={contacts}/>
      </div>
    );
  }
}

export default App;
