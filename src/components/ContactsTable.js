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


  render() {
    return (
      <div>
        <button className='btn' onClick={this.addContact}>Add Random Contact</button>

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