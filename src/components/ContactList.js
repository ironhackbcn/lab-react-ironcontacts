import React, { Component } from 'react';

class ContactList extends Component {

  constructor(props){
    super();
    this.state = {
      contacts: props.contacts.slice(0,5)
    }
  }

  render() {

    return(
      
      <div className="main">
        <h1>IronContacts</h1>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th> 
            <th>Popularity</th>
          </tr>
          {
          this.state.contacts.map( (oneContact) => {
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