import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './Contact.js';
import contacts from './data/contacts.json'

class App extends Component {
  state = {
     contacts: contacts.slice(0,5)
  }  
  addContact = () => {
    const newArray = this.state.contacts;
    newArray.push(contacts[Math.floor(Math.random()*contacts.length)]);
    this.setState({
      contacts: newArray
    })
  }  

  sortByName = () => {
    const newArray = this.state.contacts;
    let sortedArray = newArray.sort(function(a, b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    }) 
    this.setState({
      contacts: sortedArray,
         
    })
  } 
  sortByPopularity = () => {
    let sortedContacts = this.state.contacts.sort((a, b) => {
      return b.popularity - a.popularity
    })
    this.setState({
      contactsList: sortedContacts, 
    })
  } 

  handleDelete = (name) => {
    let newArr = this.state.contacts.filter((element) => {
      return element.name !== name;
    })
    this.setState({
      contacts: newArr,
         
    })
  }


render() {
    return (
      <div>
          <div>
            <h1>IronContacts</h1>
          </div>
          <div>
            <ul>
              <li>Picture</li>
              <li>Name</li>
              <li>Popularity</li>
            </ul>
          </div>
          <div>
          <table className="table">
          {this.state.contacts.map((item, index) => {
          return <Contact key={index} pictureUrl={item.pictureUrl} name={item.name} popularity={item.popularity} onDelete={this.handleDelete} />
          })}
          </table>
          </div>
          <div>
            <button onClick={this.addContact}>Random Contact</button>
          </div>
          <div>
            <button onClick={this.sortByPopularity}>Sort By popularity</button>
          </div>
          <div>
            <button onClick={this.sortByName}>Sort By Name</button>
          </div>
      </div>
    );
  }
}

export default App;
