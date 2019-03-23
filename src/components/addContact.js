import React, { Component } from 'react'

export default class addContact extends Component {

  state = {
    name: '',
    pictureUrl: '',
    popularity: '',
  };

  handleAdd = () => {
    this.props.new(this.state);
    this.setState({
      name: '',
      pictureUrl: '',
      popularity: '',
    })
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <h2>New contact</h2>
        <label>Name: </label>
        <input name="name" onChange={this.handleInput}></input>
        <label>PictureUrl: </label>
        <input name="pictureUrl" onChange={this.handleInput}></input>
        <label>Popularity: </label>
        <input name="popularity" onChange={this.handleInput}></input>
        <button onClick={this.handleAdd}>Add</button>
      </div>
    )
  }
}
