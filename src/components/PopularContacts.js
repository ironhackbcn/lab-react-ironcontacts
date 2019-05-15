import React, { Component } from 'react'
import Card from './Card'



class PopularContacts extends Component {
constructor(props){
  super();
  this.state = {
    contacts : props.contactsArray.slice(0,5)
  }
}



  render() {
    return (
      <ul>
        {/* <li>
        Picture Name Popularity
        </li> */}
      {
      this.state.contacts.map ((oneContact,index) => {
        return (
          <Card key={index}
          name={oneContact.name}
          pic={oneContact.pictureUrl}
          popular={oneContact.popularity}
            />
        )
      })

      }
      </ul>
    )
  }
}
export default PopularContacts;