import React, { Component } from 'react';


const imageSize = {
  width: '100px',

}

export class Contact extends Component {

  handleDecimals(number) {
    return Math.round(number * 100) / 100;
  }

  render() {
    const { image, name, popularity } = this.props;
    return (
      <tr>
        <td><img style={imageSize} src={image} alt={name} /></td>
        <td>{name}</td>
        <td>{this.handleDecimals(popularity)}</td>
        <td><button onClick={() => this.props.onRemove(name)}>Remove Contact</button></td>
      </tr>
    );
  }
}