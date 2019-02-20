import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./data/contacts.json";
import Contact from "./components/Contact";
import Button from "./components/Button";

class App extends Component {
  state = {
    contacts: contacts.slice(0,5)
  };

addRandom = () => {
  const newArr = this.state.contacts;
  const randomNumber = Math.floor(Math.random()*(contacts.length + 1))
        newArr.push(contacts[randomNumber]);
        this.setState({
          contacts: newArr
        });
}

sortPopularity = () => {
  const newArr = this.state.contacts;
  newArr.sort(function (a, b) {
    if (a.popularity < b.popularity) {
      return 1;
    }
    if (a.popularity > b.popularity) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  this.setState({
    contacts: newArr
  });
}

sortName = () => {
  const newArr = this.state.contacts;
  newArr.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  this.setState({
    contacts: newArr
  });
}

delete = (name) => {
  let newArr = this.state.contacts.filter((item) => {
    return name !== item.name;
  })
  this.setState({
    contacts: newArr
  });

}
  render() {
    return (
      <div className="App">
<h1>IronContacts</h1>


{/* renders new contact */}
<button onClick={
  this.addRandom
} >Add random contact</button>


{/* renders sorted contacts by POPULARITY */}
<button onClick={
  this.sortPopularity
}>Sort Popularity</button>

{/* renders sorted contacts BY NAME*/}
<button onClick={
  this.sortName
}>Sort Name</button>

<th>Pic</th>
<th>Name</th>
<th>Popularity</th>
        {this.state.contacts.map((item, index) => {
          return (
            <Contact
              key = {index}
              pictureUrl = {item.pictureUrl}
              name = {item.name}
              popularity = {item.popularity}
              delete = {this.delete}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
