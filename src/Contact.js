import React, { Component } from 'react'

class Contact extends Component {
  render(props) {
    return (
      <tr>
        <th><img src={this.props.pictureUrl} alt={this.props.name} /></th>
        <th>{this.props.name}</th>
        <th>{this.props.popularity}</th>
      </tr>
    )
  }
}

export default Contact;