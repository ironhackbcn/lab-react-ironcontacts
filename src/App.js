import React, { Component } from 'react';
import './App.css';
import contacts from './data/contacts.json';
import Contact from './Contact';

class App extends Component {
  state = {
    firstContacts: [
      {
        "name": "Idris Elba",
        "pictureUrl": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
        "popularity": 11.622713
      },
      {
        "name": "Jessica Chastain",
        "pictureUrl": "https://image.tmdb.org/t/p/w500/nkFrkn5NZVGWb4b2X0yIcXezhyt.jpg",
        "popularity": 8.324357
      },
      {
        "name": "Johnny Depp",
        "pictureUrl": "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
        "popularity": 15.656534
      },
      {
        "name": "Emilia Clarke",
        "pictureUrl": "https://image.tmdb.org/t/p/w500/j7d083zIMhwnKro3tQqDz2Fq1UD.jpg",
        "popularity": 16.211837
      },
      {
        "name": "Leonardo DiCaprio",
        "pictureUrl": "https://image.tmdb.org/t/p/w500/A85WIRIKVsD2DeUSc8wQ4fOKc4e.jpg",
        "popularity": 11.245333
      },
    ]
  }

  randomContact = () => {
    const random = contacts[Math.floor(Math.random() * contacts.length)];
    return random;
  }

  addContact = () => {
    const { firstContacts } = this.state;
    this.setState({
      firstContacts: [this.randomContact(), ...firstContacts],
    })
  }

  sortByName = () => {
    const { firstContacts } = this.state;
    const sortedContacts = firstContacts.sort((ContactA, ContactB) => {
      if (ContactA.name > ContactB.name) {
        return 1;
      } else if (ContactA.name < ContactB.name) {
        return -1;
      }
      return 0;
    });
    this.setState({
      firstContacts: sortedContacts,
    })
  }

  sortByPopularity = () => {
    const { firstContacts } = this.state;
    const sortedContactsByPopularity = firstContacts.sort((ContactA, ContactB) => {
      if (ContactA.popularity > ContactB.popularity) {
        return 1;
      } else if (ContactA.popularity < ContactB.popularity) {
        return -1;
      }
      return 0;
    });
    this.setState({
      firstContacts: sortedContactsByPopularity,
    })
  }

  deleteContact = index => {
    const { firstContacts } = this.state;
    const newContacts = [...firstContacts].splice(index, 1);
    // const newContacts = [...firstContacts].filter(() => {return }); lo estaba intentando con filter y no está acabado
    this.setState({
      firstContacts: newContacts,
    })
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addContact} className="btn">Add Random Contact</button>
        <button onClick={this.sortByName} className="btn">Sort by name</button>
        <button onClick={this.sortByPopularity} className="btn">Sort by popularity</button>
        <table className="contact-table">
          <thead className="table-heading">
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.firstContacts.map((person, index) => {
              return (
                <Contact key={index} pictureUrl={person.pictureUrl} name={person.name} popularity={person.popularity} clickFunction={() => this.deleteContact({ index })} />
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
