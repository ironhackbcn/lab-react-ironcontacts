import React, { Component } from 'react';
import './App.css';
import Ironcontacts from './components/Ironcontacts';
import contacts from './data/contacts.json';
import Titles from './components/Titles';
 


class App extends Component {

  //Definir estado actuaql
  state = {
    arrayContacts : contacts.slice(0,5),
  }

  // todo lq eu renderizamos de Ironcontacts.js
  renderList(){
    return this.state.arrayContacts.map((contact, index) => {
      return <Ironcontacts 
                  key={`id-${index}`} 
                  name={contact.name} 
                  pictureUrl={contact.pictureUrl} 
                  popularity={contact.popularity}
                  index={index}
                  deleteHandler={this.deleteContact} />
    })
  }

  addRandom = () => {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    // estado que queremos crear    ... Array actual
    this.setState({
      arrayContacts:[...this.state.arrayContacts, randomContact]
    })
  }
  // Ordenar por nombre utlizando sort
  sortName = () => {
    this.setState({
      arrayContacts: this.state.arrayContacts.sort(function(a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      })
        
    })
  }
  // ordenaar por valor utlizando sort
  sortPopularity = () => {
    this.setState({
      arrayContacts: this.state.arrayContacts.sort(function(a, b) {
        return b.popularity - a.popularity;
      })
        
    })
  }
  // Eliminar pasando como parametro el contact del array y luego actualizamos estado
  deleteContact = (contact) => {
    let { arrayContacts } = this.state
    arrayContacts.splice(contact, 1)
    this.setState({
      arrayContacts
    })
  }
  


  // Rendetizamos todo
  render() {
    return (
      <div> 
        <button onClick={this.addRandom}>Random</button>
        <button onClick={this.sortName}>Sort Name</button>
        <button onClick={this.sortPopularity}>Sort Popularity</button>

        <Titles />
        {this.renderList()}      
      </div>
    );
  }
}

export default App;
