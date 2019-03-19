import React, { Component } from 'react';

class AddRandomButon extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.addContact} >Add Random Contact</button>
      </div>
    );
  }
}

export default AddRandomButon;