import React, { Component } from 'react';
import RandomButton from './RandomButton';

class ContactList extends Component {

  constructor(props){
    super();
    this.state = {
      Contacts: props.contacts,
      contactsShowed: props.contacts.slice(0,5)
    }
  }

  addRandomActor = () => {
    let contactsShowedCopy = this.state.contactsShowed;
    let index = Math.floor(Math.random() * (this.state.Contacts.length - 4) + 4);
    contactsShowedCopy.push(this.state.Contacts[index]);
    this.state.Contacts.splice(index,1);
    this.setState( { contactsShowed: contactsShowedCopy } );
  }

  render() {

    return(
      
      <div className="main">
        <h1>IronContacts</h1>
        <RandomButton clickToAddRandom={ () => this.addRandomActor()} />
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th> 
            <th>Popularity</th>
          </tr>
          {
          this.state.contactsShowed.map( (oneContact) => {
              return (
                <tr>
                  <td><img src={oneContact.pictureUrl} alt={oneContact.name}/></td>
                  <td>{oneContact.name}</td>
                  <td>{oneContact.popularity}</td>
                </tr>
              ); 
            })
          }
        </table>
      </div>
    );
  }
}

export default ContactList;