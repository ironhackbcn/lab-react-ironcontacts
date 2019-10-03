import React from 'react'
import contacts from '../data/contacts.json'

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data.slice(0,5)
    }
  }

  getRandom ()  {
    console.log(this)
    //make copy of contacts and splice randomContact so that it cannot be selected twice!!!
    const contactsCopy = [...contacts]
    const randomNum = Math.floor(Math.random() * contactsCopy.length);
    const randomContact = contactsCopy.splice(randomNum, 1)
    
    this.setState({
      data: [...this.state.data, randomContact[0]],
    });
  }

  sortNames() {
    this.setState({
      data: this.state.data.sort((a, b) => (a.name > b.name) ? 1 : -1)
      // 1 -  contact b takes precedence in sorting over contact a
      //-1 - does the opposite

    })
  }

  sortByPopularity() {
    this.setState({
      data: this.state.data.sort((a, b) => (a.popularity > b.popularity) ? -1 : 1)

    })
  }

  delete(contactIndex) {
    const contactsCopy = this.state.data;
    contactsCopy.splice(contactIndex, 1);
    this.setState( {data: contactsCopy} );
  }
  
    render() {
      return (
        <div>
      <h1>Iron Contacts</h1>
      <button onClick={ () => this.getRandom()}>Random Contact</button>
      <button onClick={ () => this.sortNames()}>Sort By Name</button>
      <button onClick={ () => this.sortByPopularity()}>Sort By Popularity</button>
     
      {
        this.state.data.map((contact, i)=> {
         return  <div key={i}>
         <h2>{contact.name}</h2>
         <img src={contact.pictureUrl} alt="" height="100px"/>
         <h2>{contact.popularity}</h2>
         <button onClick={ ()=> this.delete(i)}>Delete!</button>
         </div>
         
        })
      }
      </div>
    )
  }
}
    


export default Contacts;



