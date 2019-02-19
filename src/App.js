import React, { Component } from 'react';
import './App.css';
import contacts from './data/contacts.json'
import Contact from './components/Contact'

class App extends Component {
  
  state = {
    contacts : contacts.slice(0,5)
  }

  addContact = () =>{
    const newArr = this.state.contacts;
    const randomNumber = Math.floor(Math.random() * (contacts.length + 1));
    newArr.push(contacts[randomNumber]);

    this.setState({
      contacts: newArr
    });

    
  }
  
  sortByName = () =>{
      const sortArr = this.state.contacts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      })

      this.setState({
        contacts: sortArr
      });
    }

    sortByPop = () =>{
      const sortArr = this.state.contacts.sort((a, b) => {
        return b.popularity-a.popularity;
      })

      this.setState({
        contacts: sortArr
      });
    }

    delete = (name) => {
      let newArr = this.state.contacts.filter((element) => {
        return element.name !== name;
      });

      this.setState({
        contacts: newArr
      })

    }

  render() {

    return (
  
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={
          this.addContact
        }>Add random contact</button>
        <button onClick={
          this.sortByName
        }>Sort by name</button>
        <button onClick={
          this.sortByPop
        }>Sort by popularity</button>
        <div className='contact-header'>
      <table> 
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>popularity</th>
          </tr>
        </thead>
        <tbody> 
          {this.state.contacts.map((object, i)=>{
        return <Contact obj={object} key={i} name={object.name} pictureUrl={object.pictureUrl} popularity={object.popularity} delete={this.delete}
         />;
    })}

        </tbody>
           
      </table>  
        </div>
      </div>
    );
  }
}

export default App;
