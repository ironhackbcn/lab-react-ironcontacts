import React, { Component } from 'react';
import './IronContactsTable.css';

export default class IronContactsTable extends Component {
  render() {
    const { name, pictureUrl, popularity } = this.props;
    return (
      <div className="table">
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          <tr className="contact-description">
            <td className="contact-picture">
              <img src={pictureUrl}></img>
            </td>
            <td className="contact-name">{name}</td>
            <td className="contact-popularity">{popularity}</td>
          </tr>
        </table>
      </div>
    );
  }
}
