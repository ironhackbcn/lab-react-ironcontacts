import React, { Component } from 'react';
import './CelebrityCard.css';

class CelebrityCard extends Component {
  render() {
    return (
      <tr>
        <td className="picture"><img src={this.props.picture} alt="" /></td>
        <td className="name">{this.props.name}</td>
        <td className="popularity">{this.props.popularity}</td>
        <td className="delete"><button>DELETE</button></td>
      </tr>
    )
  }
}

export default CelebrityCard;