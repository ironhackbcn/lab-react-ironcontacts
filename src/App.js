import React, { Component } from 'react';
import './App.css';

// Components
import Card from './components/Card'

import contacts from './data/contacts.json'

class App extends Component {

  state = {
    initialContacts: contacts.slice(0, 5)
  }

  renderList() {
    return this.state.initialContacts.map((contact, index) => {
      return (
        <Card
          key={index}
          imgUrl={contact.pictureUrl}
          imgAlt={contact.name}
          name={contact.name}
          popularity={contact.popularity}
        />
      )
    })
  }

  handleClick = () => {
    const contactRandom = contacts[Math.floor(Math.random() * contacts.length)]
    this.setState({
      initialContacts: [...this.state.initialContacts, contactRandom]
    })
  }

  handleSortByName = () => {
    const sortByName = this.state.initialContacts.sort((a,b) => {
      return (a.name).localeCompare(b.name);
    })
    this.setState({
      initialContacts: [...sortByName]
    })
  }

  handleSortByPopularity = () => {
    const sortByPopularity = this.state.initialContacts.sort((a,b) => {
      return (b.popularity) - (a.popularity)
    })
    this.setState({
      initialContacts: [...sortByPopularity]
    })
  }

  render() {
    return (
      <section>
        <h1 onClick={this.handleClick}>IronContacts</h1>
        <button onClick={this.handleClick}>Add random contact</button>
        <button onClick={this.handleSortByName}>Sort by name</button>
        <button onClick={this.handleSortByPopularity}>Sort by popularity</button>
        {this.renderList()}
      </section>
    )
  }
}

export default App;
