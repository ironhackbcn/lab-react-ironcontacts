import React, { Component } from 'react';

class Form extends Component {

  state = {
    name: 'name',
    popularity: 'popularity',
    pictureUrl: 'https://loremflickr.com/640/360'
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addNewContact(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleInput}
          type="text"
          name="name"
          value={this.state.name}
        />
        <input
          onChange={this.handleInput}
          type="text"
          name="popularity"
          value={this.state.popularity}
        />
        <button type="submit">Add new contact</button>
      </form>
    )
  }
}

export default Form