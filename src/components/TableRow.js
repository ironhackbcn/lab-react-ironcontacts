import React, { Component } from 'react';

class TableRow extends Component {

  deleteContact =() => {
    this.props.delete(this.props.contact.name)
  }
  render() {
    return(
      <tr>
        <td><img className="image" src={this.props.contact.pictureUrl} alt={this.props.contact.name}/></td>
        <td>{this.props.contact.name}</td>
        <td>{this.props.contact.popularity}</td>
        <td><button onClick={this.deleteContact}>Delete</button></td>
      </tr>
    );
  }
}


export default TableRow;