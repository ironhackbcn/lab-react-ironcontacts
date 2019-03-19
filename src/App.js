import React, { Component } from 'react';
import './App.css';

// Components
import Card from './components/Card'

import contacts from './data/contacts.json'

class App extends Component {

  renderList() {
    return contacts.map((contact, index) => {
      return (
        <Card 
          key={index}
          imgUrl={contact.pictureUrl}
          imgAlt={contact.name}
          name={contact.name}
          popularity={contact.popularity}
        />
      )
    }).slice(0,5)
  }

  render() {
    return (
      <section>
        <h1>IronContacts</h1>
        {this.renderList()}
      </section>
    )
  }
}

export default App;
