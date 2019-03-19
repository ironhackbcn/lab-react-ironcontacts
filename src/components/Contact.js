import React, { Component } from 'react';


const imageSize = {
  width: '100px',

}

export class Contact extends Component {

  handleDecimals(number) {
    return Math.round(number * 100) / 100;
  }

  render() {
    return (
      <tr>
        <td><img style={imageSize} src={this.props.image} alt={this.props.name} /></td>
        <td>{this.props.name}</td>
        <td>{this.handleDecimals(this.props.popularity)}</td>
        <td><button onClick={() => this.props.onRemove(this.props.name)}>Remove Contact</button></td>
      </tr>
    );
  }
}