import React, { Component } from 'react';
import './App.css';

class Row extends Component {

  deleteHandler = () => {
    this.props.delete(this.props.contact.name);
  }

  render() {
    return ( 
      <tr>
        <td><img className="img" src={this.props.contact.pictureUrl} alt="celebrity"/></td>
        <td>{this.props.contact.name}</td>
        <td>{this.props.contact.popularity}</td>
        <td><button className="btn" onClick={this.deleteHandler}>Delete</button></td>
      </tr> 
    );
  }
}

export default Row;
