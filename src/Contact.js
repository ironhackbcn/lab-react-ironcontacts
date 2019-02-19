import React, { Component } from 'react'

export default class Contact extends Component {

  delete =() => {
    this.props.onDelete(this.props.name)
  }

  render() {
  
    return (
      
        <tr>
          <td><img src={this.props.pictureUrl} alt=""/></td>
          <td>{this.props.name}</td>
          <td>{this.props.popularity}</td>
          <td><button onClick={this.delete}>Delete</button></td>
        </tr>
      
  
    )
  }
}
