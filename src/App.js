import React, { Component } from 'react';
import './App.css';
import ContactCard from './components/ContactCard';
import contacts from './data/contacts.json'

let firstFiveContacts = contacts.slice(0,5);
console.log(firstFiveContacts[3]);

class App extends Component {
  state = {
    initialContacts: firstFiveContacts,
  } 

  // handleAddContact = () =>{
  //   const { firstFiveContacts } = this.state;
  //   this.setState({
  //     gradients: [...firstFiveContacts],
      
  //   }, () => {
  //     console.log('🤣', this.state.gradients)
  //   })
  // }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        
        <div className="wrapper">
          {firstFiveContacts.map((card, index) =>{
            return (
              <ContactCard 
                key={`${card.name}-${index}`} 
                name={card.name} 
                pictureUrl={card.pictureUrl}
                popularity={card.popularity}
              />
            );
          })}
        </div>

        {/* <ContactCard>
          theContacts = {this.state.contacts}
        </ContactCard> */}
      </div>
    );
  }
}

export default App;
