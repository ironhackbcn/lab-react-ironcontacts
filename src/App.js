import React, { Component } from 'react';
import contacts from './data/contacts.json'
import './App.css';
import Card from './components/Card'

class App extends Component {
  state = {
    originalContactList : contacts,
    contactList : contacts.slice(0,5)
  }

  deleteContactHandler = (celebrityName) => {
    const contactCopy = [...this.state.contactList];
    const filtered = contactCopy.filter(contact => contact.name !== celebrityName)
    this.setState({
        contactList: filtered
    })
  }
  addContact = () => {
    const randomContact = this.state.originalContactList[Math.floor(Math.random()*this.state.originalContactList.length)];
    const newContacts = [...this.state.contactList,randomContact];
    this.setState({contactList:newContacts})
  }
  sortByName = () =>{
    const aux = [...this.state.contactList]
    const contactNameSorted = aux.sort((a,b) => {
      if(a.name>b.name){
        return -1
      } else if (a.name<b.name) {
        return 1
      } else {return 0}
    })
    this.setState({contactList: contactNameSorted})
  }
  sortByPopularity = () => {
    const aux = [...this.state.contactList]
    const contactPopuSorted = aux.sort((a,b) => {
      if(a.popularity>b.popularity){
        return -1
      } else if (a.popularity<b.popularity) {
        return 1
      } else {return 0}
    })
    this.setState({contactList: contactPopuSorted})
  }

  render() {
    return (
      <div className="App">
      <button onClick={this.addContact}>Add random</button>
      <button onClick={this.sortByName}>Sort by name</button>
      <button onClick={this.sortByPopularity}>Sort by popularity</button>
      
        {
          this.state.contactList.map(contact => {
            return (
              <Card contact={contact} clickToDelete={() => this.deleteContactHandler(contact.name)}/>
            )
          })
        }
      </div>
    );
  }
}

export default App;
