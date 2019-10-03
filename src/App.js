import React, { Component } from 'react';
import './App.css';
import contacts from './data/contacts.json'
import Contact from './components/contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Contact data={contacts}/>
      </div>
    );
  }
}

export default App;
