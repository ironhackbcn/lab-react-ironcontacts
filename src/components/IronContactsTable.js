import React, { Component } from 'react';
import './IronContactsTable.css';

export default class IronContactsTable extends Component {
  render() {
    const { name, pictureUrl, popularity,deleteContact } = this.props;
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
              <img src={pictureUrl} alt=""></img>
            </td>
            <td className="contact-name">{name}</td>
            <td className="contact-popularity">
              {Math.round(popularity * 100) / 100}
            </td>
            <td className="contact-delete">
              <button className="RandomBtn" onClick={deleteContact}>Delete</button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
