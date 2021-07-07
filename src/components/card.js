import React, { Component } from 'react'
import './card.css';

class Card extends Component {

  sendIndex = (index) => {
    this.props.deleteContact(index)
  }

  render() {
    return (
      <tbody>
        <tr className="card">
          <th><img src={this.props.pictureUrl} alt={this.props.name}/></th>
          <th><h3>{this.props.name}</h3></th>
          <th><h3>{this.props.popularity}</h3></th>
          <th><button onClick={() => {this.sendIndex(this.props.index)}}>Delete</button></th>
        </tr>
      </tbody>
    )
  }
}

export default Card;