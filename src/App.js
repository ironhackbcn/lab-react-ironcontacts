import React, { Component } from 'react';
import './App.css';
import contacts from './data/contacts.json'


class App extends Component {
  constructor(){
    super();
    this.state = {
        fiveContacts:contacts.slice(0,5)
    }
}

  addRandomContact=()=>{
    let randomContact=contacts[Math.floor(Math.random()*(contacts.length))]
    const contactsCopy = [randomContact,...this.state.fiveContacts]
    //contactsCopy.unshift(randomContact);
    this.setState({
        fiveContacts:contactsCopy
    })
    
  }
  sortAlphabetically=()=>{
    const sortCopy = [...this.state.fiveContacts]
    const newArr = sortCopy.sort((a,b)=> {
      return a.name<b.name ? -1: a.name>b.name? 1: 0;
    })
    console.log(newArr)
    this.setState({
      fiveContacts:newArr
  })
  }

  sortNumber=()=>{
    const popularityCopy=[...this.state.fiveContacts]
    const popularitySort = popularityCopy.sort((a,b)=> {
      return a.popularity<b.popularity ? -1: a.popularity>b.popularity? 1: 0;
    })
    this.setState({
      fiveContacts:popularitySort
    })
  }

  deleteContact=(index)=>{
    const deleteCopy=[...this.state.fiveContacts]
    deleteCopy.splice(index,1)
    this.setState({
      fiveContacts:deleteCopy
    })
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button className="btn"onClick={this.addRandomContact}>ADD RANDOM CONTACT</button>
        <button className="btn"onClick={this.sortAlphabetically}>Sort Alphabetically</button>
        <button className="btn"onClick={this.sortNumber}>Sort by popularity</button>
        <table className="table">
        <thead className="titols">
           <tr >
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th> Action</th>
          </tr>

        </thead>
        

        <tbody>
        {
                this.state.fiveContacts.map((oneContact,index)=>{
                return <tr key={index} className="item-contact">
               <td> <img  width='100px'  src={oneContact.pictureUrl} alt=""/> </td>
               <td> <p> {oneContact.name}</p></td>
               <td> <p> {oneContact.popularity}</p></td>
               <td> <button className="delete-btn" onClick={this.deleteContact}>Delete</button> </td>
               </tr>
                }
               )
            }
        </tbody>
            
           
            
          


        </table>
        
      </div>
    );
  }
}

export default App;
