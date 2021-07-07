import React, { Component } from 'react';


class Form extends Component {
  state = {
    name: '',
    popularity: '',
    pictureUrl: '',
    contact: {}
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const contact = {
      name: this.state.name,
      popularity: this.state.popularity,
      image: this.state.image
    }
    this.props.insertContact(contact)
    
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    
  }
  render() {
    
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" onChange={this.handleInput}/>
          <input type="text" name="popularity" onChange={this.handleInput}/>
          <input type="text" name="pictureUrl" onChange={this.handleInput}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;