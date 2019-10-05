import React, { Component } from "react";
import contacts from "./data/contacts.json";
import UserList from "./components/UserList";
import Button from "./components/Button";

class App extends Component {
  state = {
    fiveContacts: contacts.slice(0, 5),
  };
  handleAddUser = () => {
    const { fiveContacts } = this.state;
    const newUser =
      contacts[Math.floor(Math.random() * (contacts.length - 5)) + 5];
    this.setState(
      {
        fiveContacts: [newUser, ...fiveContacts],
      },
      () => {
        console.log("TCL: App -> handleAddUser -> newUser", newUser);
        console.log("he terminado de add");
      }
    );
  };

  HandleSortUserByName = () => {
    const { fiveContacts } = this.state;
    const newOrderUsers = fiveContacts.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    this.setState(
      {
        fiveContacts: newOrderUsers,
      },
      () => {
        console.log("TCL: App -> handleAddUser -> newUser", newOrderUsers);
        console.log("he terminado de ordenar");
      }
    );
  };
  HandleSortUserByPopularity = () => {
    const { fiveContacts } = this.state;
    const newOrderUsers = fiveContacts.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return -1;
      }
      if (a.popularity > b.popularity) {
        return 1;
      }
      return 0;
    });
    this.setState(
      {
        fiveContacts: newOrderUsers,
      },
      () => {
        console.log("TCL: App -> handleAddUser -> newUser", newOrderUsers);
        console.log("he terminado de ordenar");
      }
    );
  };
  HandleDelete = index => {
    const { fiveContacts } = this.state;
    fiveContacts.splice(index, 1);
    this.setState(
      {
        fiveContacts: fiveContacts,
      },
      () => {}
    );
  };

  render() {
    const { fiveContacts } = this.state;
    return (
      <div>
        <h1>Iron Contact</h1>
        <div>
          <Button onClick={this.handleAddUser}>Add Random Contacts</Button>
          <Button onClick={this.HandleSortUserByName}>Sort by name</Button>
          <Button onClick={this.HandleSortUserByPopularity}>
            Sort by popularity
          </Button>
        </div>
        <div>
          {fiveContacts.map((user, index) => {
            return (
              <div>
                <UserList
                  key={index}
                  name={user.name}
                  pictureUrl={user.pictureUrl}
                  popularity={user.popularity}
                  id={index}
                  onClick={this.HandleDelete}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
