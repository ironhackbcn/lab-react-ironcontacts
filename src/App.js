import React, { Component } from 'react';
import './App.css';
import contacts from './data/contacts.json'
import Card from './components/Card'

class App extends Component {

  state = {
    contactList: contacts.slice(0,5)
  }

  handleAdd = () => {
    const contact = contacts[Math.floor(Math.random()* contacts.length)];
    this.setState({
      contactList: [...this.state.contactList, contact]
    })
  }

  handleSortName = () => {
    const sortByName = this.state.contactList.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    this.setState({
        contactList: sortByName
    })
  }

  handleSortPopularity = () => {
    const handleSortPopularity = this.state.contactList.sort((a,b) => (a.popularity > b.popularity) ? -1 : ((b.popularity > a.popularity) ? 1 : 0));
    this.setState({
        contactList: handleSortPopularity
    })
  }

  delete = (id) => {
    const contactListCopy = [...this.state.contactList]
    contactListCopy.splice(id, 1)
    this.setState({
      contactList: contactListCopy
    })
  }

  render() {
    return (
      <div className="container">
        <ul className="card-list">
            {this.state.contactList.map((item, index) => {
              return <Card 
                key ={`id${index}`}
                name={item.name}
                popularity={item.popularity}
                pictureUrl={item.pictureUrl}
                id={index}
                deleteItem = {this.delete}
              />
            })}
        </ul>
        <button className="btn" onClick={this.handleAdd}>Random</button>
        <button className="btn" onClick={this.handleSortName}>Sort by name</button>
        <button className="btn" onClick={this.handleSortPopularity}>Sort by popularity</button>
      </div>
    );
  }
}

export default App;
