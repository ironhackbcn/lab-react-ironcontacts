import React, { Component } from "react";

class List extends Component {

  handleDelete = (e) => {
    this.props.handleDelete(this.props.index);
  }

  render() {
    return (
      <li> 
        <img src={this.props.contact.pictureUrl} alt='actor'/> {' '}
        {this.props.contact.name + ' '} 
        {this.props.contact.popularity}
        <button onClick={this.handleDelete}>delete</button>
      </li>
    );
  }
}

export default List;
