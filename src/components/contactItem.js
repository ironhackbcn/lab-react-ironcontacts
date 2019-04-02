import React, { Component } from 'react';

class ContactItem extends Component{

  handleClick = (cb, item) => {
    cb(item.name)
  }

  render(){  
    const {item, itemDelete} = this.props;

    return(
      <>
      <li>
        <p>{item.name}</p>
        <p>{item.popularity}</p>
      </li>
      <button onClick={this.handleClick(itemDelete, item)}>Delete</button>
      </>
    );
  }
}

export default ContactItem;