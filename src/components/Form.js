import React, { Component } from 'react';

class Form extends Component {
  state = {
    image: "",
    name: "",
    popularity: ""
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  render(){
    const {
      submit
    } = this.props;
    return(
      <form onSubmit={(e) => {submit(e, this.state)}}>
        <input 
        type="text" 
        name="image" 
        value={this.state.image}
        onChange={this.handleChange}
        alt=""
        />
        <input 
        type="text" 
        name="name" 
        value={this.state.name} 
        onChange={this.handleChange}
        />
        <input 
        type="text" 
        name="popularity" 
        value={this.state.popularity}
        onChange={this.handleChange}
        />
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default Form;