import React, { Component } from 'react';

class AddContact extends Component {
  
  state = {
    name: '',
    pictureURL: '',
    popularity: '',
  }


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
        <label>Name: </label>
        <input name="name" onChange={this.handleInput}></input>
        <label>pictureURL: </label>
        <input name="pictureURL" onChange={this.handleInput}></input>
        <label>popularity: </label>
        <input name="popularity" onChange={this.handleInput}></input>
    
        <button onClick={this.handleAdd}>Add Contact</button>
      </div>
    );
  }
}

export default AddContact;