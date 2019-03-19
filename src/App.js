import React, { Component } from 'react';
import contacts from './data/contacts.json'
import Contacts from './components/Contacts'
import './App.css';
import './contacts.css'

/* const arrContacts = contacts.splice(0, 5); */

class App extends Component {
  //estado inicial
  state = {
    arrContacts: contacts.splice(0, 5),
  }
  
  renderContacts = () => {
    return this.state.arrContacts.map((item, index) => {
      return(
        <Contacts key={`id-${index}`} name={item.name} 
        image={item.pictureUrl} pop={item.popularity} id={index} onDelete={this.handleDelete}/>
      )
    })
  }

  handleRandomContact = () => {
    const randomContact = contacts[Math.floor(Math.random()*contacts.length)];
    /* console.log(randomContact) */
    this.setState ({
      arrContacts: [...this.state.arrContacts, randomContact]
    }) 
  }

  handleSortName = () => {
    //utilizar siempre spread operator para generar nuevo array y no mutar el que ya tenemos
    let sortName = [...this.state.arrContacts].sort((a, b) => {
      if(a.name < b.name){
        return -1;
      } if(a.name > b.name){
        return 1;
      } return 0;
    })
    this.setState ({
      arrContacts: sortName
    })
  }

  handleSortPop = () => {
    let sortPop = [...this.state.arrContacts].sort((a, b) => {
      return b.popularity - a.popularity;
    })
    this.setState ({
      arrContacts: sortPop
    }) 
  }

  handleDelete = (id) => {
    const arrContacts = [...this.state.arrContacts]
    arrContacts.splice(id, 1)
    this.setState({
      arrContacts
    })
  }

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <div className="buttons">
          <button onClick={this.handleRandomContact}>Add Random Contact</button>
          <button onClick={this.handleSortName}>Sort by name</button>
          <button onClick={this.handleSortPop}>Sort by popularity</button>
        </div>
        {this.renderContacts()}
      </div>
    );
  }
}

export default App;
