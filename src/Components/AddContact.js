import React, { Component } from 'react';

class AddContact extends Component {
  
  state = {
    newContact: '',
  }

  handleInput = (e) => {
    this.setState({
      newContact: e.target.value,
    })
  }

  handleClick = () => {
    const { newContact } = this.state
    this.props.onClick(newContact);
    this.setState({
      newContact: '',
    })
  }

  render() {
    const { newContact } = this.state;
    return (
      <>
        <input 
          type="text"
          value={newContact}
          onChange={this.handleInput}
          name='newContact'
          placeholder='Name'
        />
        <button onClick={this.handleClick}>Add Contact</button>
      </>
    );
  }
}

export default AddContact;