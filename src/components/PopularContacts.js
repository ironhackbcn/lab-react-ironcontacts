import React, { Component } from 'react'

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
      {
      this.state.contacts.map ((element,index) => {
        return (
          <li>{{element}}</li>
        )
      })

      }
      </ul>
    )
  }
}
export default PopularContacts;