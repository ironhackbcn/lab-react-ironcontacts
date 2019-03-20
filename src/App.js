import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import contacts from './data/contacts.json';
import { sortByName, sortByPopularity } from './helpers';
import Form from './components/Form';

class App extends Component {
  state = {
    contactsNewList: contacts.slice(0, 5)
  };

  handleSubmit = (e, state) => {
    e.preventDefault();
    let newContact = {
      name: state.name,
      popularity: parseInt(state.popularity),
      pictureUrl: state.image
    }
    this.setState({
      contactsNewList: [...this.state.contactsNewList, newContact]
    })
  }

  handleClick = () => {
    const randomContact = contacts[Math.floor(Math.random()*contacts.length)]
    this.setState({
      contactsNewList: [...this.state.contactsNewList, randomContact]
    });
  };

  sortByName = () => {
    let contactsNewList = sortByName([...this.state.contactsNewList])
    this.setState({
      contactsNewList
    });
  };

  sortByPopularity = () => {
    let contactsNewList = sortByPopularity([...this.state.contactsNewList])
    this.setState({
      contactsNewList
    });
  };

  deleteFunc = (name) => {
    const filtered = this.state.contactsNewList.filter((item)=> {
      return name !== item.name;
    });
    this.setState({
      contactsNewList: filtered
    });
  };

  renderList(){
    return (this.state.contactsNewList.map((item, index) => {
      return <Card
              image={item.pictureUrl}
              name={item.name}
              popularity={Math.round(`${item.popularity}`*100)/100}
              key={`id${index}`}
              onDelete={this.deleteFunc}
             />
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <Form
        submit={this.handleSubmit}
        ></Form>
        <button onClick={this.handleClick}>Add random contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <div className="titles">
          <h2>Picture</h2>
          <h2>Name</h2>
          <h2>Popularity</h2>
        </div>
        <ul>{this.renderList()}</ul>
      </div>
    )
  }
};

export default App;
