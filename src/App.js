import React, { Component } from 'react';
import './App.css';
import contacts from './data/contacts.json';
import CelebrityCard from './Components/CelebrityCard';

class App extends Component {
  state = {
    celebrities: contacts.slice(0, 5),
  }
  addContact = () => {
    let newArray = this.state.celebrities;
    const newCelebrity = contacts[Math.floor(Math.random() * contacts.length)];
    newArray.push(newCelebrity)
    this.setState({
      celebrities: newArray,
    })
  }

  sortByName = () => {
    let sortedArray = this.state.celebrities.sort(function (a, b) {
      if (a.name < b.name) return -1;
      else if (a.name > b.name) return 1;
      return 0;
    });
    console.log(sortedArray);
    this.setState({
      celebrities: sortedArray
    })
  }

  sortByPopularity = () => {
    let sortedArray = this.state.celebrities.sort(function (a, b) {
      if (a.popularity > b.popularity) return -1;
      else if (a.popularity < b.popularity) return 1;
      return 0;
    });
    console.log(sortedArray);
    this.setState({
      celebrities: sortedArray
    })
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          {this.state.celebrities.map((celebrity, index) => {
            return <CelebrityCard key={index} picture={celebrity.pictureUrl} name={celebrity.name} popularity={celebrity.popularity} />
          })}

        </table>
      </div>
    );
  }
}

export default App;
