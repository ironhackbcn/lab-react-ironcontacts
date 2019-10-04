import React, { Component } from "react";
import { contacts } from "../data/contacts.json";
import Button from "./Button";
import { randomContact } from "../helpers/randomcontacts";
import Contact from "./Contact";

class Ironcontacts extends Component {
  state = {
    ironcontacts: contacts.slice(0, 5)
  };

  addRandomContact = () => {
    const { ironcontacts } = this.state;
    this.setState(
      {
        ironcontacts: [randomContact(), ...ironcontacts]
      },
      () => {
        console.log(randomContact());
      }
    );
  };

  sortContactsByName = () => {
    const { ironcontacts } = this.state;

    ironcontacts.sort((a, b) => {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    this.setState(
      {
        ironcontacts: ironcontacts
      },
      () => {
        console.log(ironcontacts);
      }
    );
  };

  sortContactsByPopularity = () => {
    const { ironcontacts } = this.state;

    ironcontacts.sort((a, b) => {
      return b.popularity - a.popularity;
    });

    this.setState(
      {
        ironcontacts: ironcontacts
      },
      () => {
        console.log(ironcontacts);
      }
    );
  };

  deleteContact = contactIndex => {
    const { ironcontacts } = this.state;
    const contactsCopy = [...ironcontacts];
    console.log(ironcontacts);
    contactsCopy.splice(contactIndex, 1);
    this.setState({
      ironcontacts: contactsCopy
    });
  };

  render() {
    const { ironcontacts } = this.state;
    const iContacts = ironcontacts.map((contact, index) => {
      return (
        <Contact
          key={index}
          {...contact}
          clickToDelete={() => this.deleteContact(index)}
        />
      );
    });
    return (
      <div className="wrapper">
        <div className="sort-btns">
          <Button className="btn-primary" action={this.addRandomContact}>
            Add random contact
          </Button>
          <Button className="btn-primary" action={this.sortContactsByName}>
            Sort by Name
          </Button>
          <Button
            className="btn-primary"
            action={this.sortContactsByPopularity}
          >
            Sort by Popularity
          </Button>
        </div>
        <table>
          <tbody>
            <tr className="table-header">
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
            {iContacts}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Ironcontacts;
