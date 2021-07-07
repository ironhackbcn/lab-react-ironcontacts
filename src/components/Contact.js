import React, { Component } from 'react'

export default class Contact extends Component {

  deleteHandler = () => {
    this.props.delete(this.props.name);
  }
  render() {
    // Aqui defines la llamada a la funcion this.handleDelete que le has pasado por props en app.js y le pasas la prop name a dicha funcion
    return (

    <tr>
      <td><img src={this.props.pictureUrl} alt="famous-person"/></td>
      <td><h5>{this.props.name}</h5></td>
      <td><h5>{this.props.popularity}</h5></td>
      <td><button onClick={this.deleteHandler}>Delete</button></td>
    </tr>


      
    )
  }
}
