import React, { Component } from 'react';
import contacts from '../contacts';
import { Contact } from './Contact';
import { sortArray } from '../helpers/sort'
import { randomNumber } from '../helpers/randomContact'

const dataOfFive = contacts.slice(0, 5);


export class ContactList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contacts: dataOfFive
    }
  }

  handleAdd = () => {
    if (contacts.length === this.state.contacts.length) {
      return;
    }
    let newContact = contacts[randomNumber(contacts)];
    while (this.state.contacts.filter(contact => contact.name === newContact.name).length > 0) {
      newContact = contacts[randomNumber(contacts)];
    }
    this.setState({
      contacts: [newContact, ...this.state.contacts]
    })
  }

  handleRemove = (removedName) => {
    const filteredArray = this.state.contacts.filter(contact => contact.name !== removedName);
    this.setState({
      contacts: filteredArray,
    })
  }

  handleSortByName = () => {
    const sortedList = sortArray([...this.state.contacts], 'name')
    this.setState({
      contacts: sortedList,
    })
  }

  handleSortByPopularity = () => {
    const sortedList = sortArray([...this.state.contacts], 'popularity')
    this.setState({
      contacts: sortedList,
    })
  }

  render() {
    return (
      <table>
        <tr>
          <td></td>
          <td>
            <button onClick={this.handleAdd}>Add Contact</button>
            <button onClick={this.handleSortByName}>Sort by Name</button>
            <button onClick={this.handleSortByPopularity}>Sort by Popularity</button>
          </td>
          <td className='space-buttons'></td>
        </tr>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        {this.state.contacts.map(contact => {
          return <Contact image={contact.pictureUrl} name={contact.name} popularity={contact.popularity} onRemove={this.handleRemove} />
        })}
      </table>
    );
  }
}
