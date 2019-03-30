import React, { Component } from 'react';

class AddNewContact extends Component {
  
  state = {
    name: '',
    popularity: '',
    pictureUrl: ''
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleClick = () => {
    const {name, popularity, pictureUrl} = this.state
    this.props.onClick(this.state); 
  }

  render() {
    const { name, popularity, pictureUrl } = this.state;
    return (
      <>
        <input 
          type="text"
          value={name}
          onChange={this.handleInput}
          name='name'
          placeholder='pon aqui algo que seguro se te olvida'
        />
        <input 
          type="text"
          value={popularity}
          onChange={this.handleInput}
          name='popularity'
          placeholder='pon aqui algo que seguro se te olvida'
        />
        <input 
          type="text"
          value={pictureUrl}
          onChange={this.handleInput}
          name='pictureUrl'
          placeholder='pon aqui algo que seguro se te olvida'
        />
        <button onClick={this.handleClick}>add Contact</button>
      </>
    );
  }
}

export default AddNewContact;