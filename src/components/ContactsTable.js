import React from 'react';
import shortid from 'shortid';
import TableRow from './TableRow';


class ContactsTable extends React.Component {
  //  we use `constructor` as we are setting initial `state` value from the `props`
  constructor(props) {
    super();
    this.state = {
      contacts: props.contactsArray.slice(0, 5)
    }
  }


  addContact = () => {
    const randomNumber = Math.floor((Math.random() * this.props.contactsArray.length - 1) + 5);
    this.state.contacts.push(this.props.contactsArray[randomNumber])
    this.setState({ contacts: this.state.contacts });
  }

  sortContactsByName = () => {


    // sort by name
    const sortedArray = this.state.contacts.sort(function (a, b) {
      let nameA = a.name.toUpperCase(); // ignore upper and lowercase
      let nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });

    this.setState({ contacts: sortedArray });
  }


  sortContactsByPopularity = () => {

    // sort by popularity
    const sortedArray = this.state.contacts.sort(function (a, b) {
      return a.popularity - b.popularity;
    });

    this.setState({ contacts: sortedArray.reverse() });
  }


  render() {
    return (
      <div>
        <button className='btn' onClick={this.addContact}>Add Random Contact</button>
        <button className='btn' onClick={this.sortContactsByName}>Sort by name</button>
        <button className='btn' onClick={this.sortContactsByPopularity}>Sort by popularity</button>

        <table>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>

            {
              this.state.contacts.map((oneContact) => <TableRow key={shortid.generate()} contact={oneContact} />)
            }
          </tbody>
        </table>
      </div>
    )

  }

};

export default ContactsTable; 