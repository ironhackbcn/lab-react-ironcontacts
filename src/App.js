import React, { Component } from 'react';
import './App.css';
import contacts from './data/contacts.json'

class App extends Component {
  state = {
  constactsList: contacts.slice(0, 5)
  }



  randomContact = () => {
    const copy = [...this.state.constactsList];
    let newContact = contacts[Math.floor(Math.random() * (contacts.length))];
    copy.unshift(newContact);
    this.setState({
      constactsList: copy
    })
  };

  sortByName = () => {
    const sortCopy = [...this.state.constactsList];
    const newArr = sortCopy.sort((a, b) => {
      return a.name<b.name ? -1: a.name>b.name? 1:0;
    })

    this.setState({
      constactsList: newArr
    })
  }

  sortByPopularity = () => {
    const sortPop = [...this.state.constactsList];
    const orderPop = sortPop.sort((a, b) => {
      return a.popularity < b.popularity ? -1 : a.popularity > b.popularity ? 1 : 0;
    })

    this.setState({
      constactsList: orderPop
    })
  }

  deleteContact = (index) => {
    const copyContact = [...this.state.constactsList];
    copyContact.splice(index, 1);
    this.setState({
      constactsList: copyContact
    })
  }

    render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button className='btn' onClick={this.randomContact}>Add random Contact</button>
        <button className='btn'onClick={this.sortByName}>Sort by Name</button>
        <button className='btn'onClick={this.sortByPopularity}>Sort by Popularity</button>
        <table className='table'>
          <thead>
          <tr className='headers'>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {
            this.state.constactsList.map((oneContact, index) => {
              return <tr className='row-table' key={index}> 
              <td> <img width='80px' src={oneContact.pictureUrl} alt='' /> </td> 
              <td> <p>{oneContact.name}</p> </td>
              <td> <p>{oneContact.popularity}</p> </td>
              <td> <button className='btn-delete' onClick={this.deleteContact}>Delete</button></td>
              </tr>
            })
          }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;



