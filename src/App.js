import React, { Component } from 'react';
import './App.css';
import contacts from './data/contacts.json'
import Card from './Components/Card'
import AddRandomButon from './Components/AddRandomButton'


class App extends Component {

  state = {
    contacts: contacts.slice(0, 5)
  }

  handleClickRandom = () => {
    const index = Math.floor(Math.random() * contacts.length);
    const randomContact = contacts[index]
    this.setState({
      contacts: [...this.state.contacts, randomContact]
    })
  }

  handleClickSortByName = () => {
    const nameArray = this.state.contacts.sort((a, b) => {
      return a.name.localeCompare(b.name);
    })
    this.setState({
      contacts: nameArray,
    })
  }

  handleClickSortByPopularity = () => {
    const popuArray = this.state.contacts.sort((a, b) => {
      return b.popularity - a.popularity;
    })
    this.setState({
      contacts: popuArray,
    })
  }

  handleClickDeleted = (index) => {
    const { contacts } = this.state;
    contacts.splice(index, 1);
    this.setState({
      contacts
    })
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <AddRandomButon
          addContact={this.handleClickRandom}
        />
        <button onClick={this.handleClickSortByName}>Sort by Name</button>
        <button onClick={this.handleClickSortByPopularity}>Sort by Popularity</button>
        <section className="row">
          {this.state.contacts.map((item, index) => {
              return <div>
                <Card
                  key={`id-${index}`}
                  pictureUrl={item.pictureUrl}
                  name={item.name}
                  popularity={item.popularity}
                />
                <button onClick={()=>this.handleClickDeleted(index)}>Delete</button>
              </div>
            })
          }
        </section>
      </div>
    );
  }
}

export default App;
