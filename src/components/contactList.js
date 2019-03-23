import React, { Component } from 'react';


const NewTr = ({contact, remove, index}) => {
  return (
    <tbody>
      <tr>
        <td><img src={contact.pictureUrl} height="42" width="42" alt={contact.name}></img></td>
        <td>{contact.name}</td>
        <td>{contact.popularity}</td>
        <td><button onClick={()=>{ remove(index) }}>Delete</button></td>
      </tr>
    </tbody>
  )
}


export default class contactList extends Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </tbody>
          {this.props.contacts.map((element, index) => {
            return <NewTr key={index} index={index} contact={element} remove={this.props.remove}/>
          })}
      </table>
      </div>
    )
  }
}
