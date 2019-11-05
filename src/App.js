import React, { Component } from 'react';
import contacts from './data/contacts.json';
import Card from "./components/Card";
import TitleCard from "./components/TitleCard"
import './App.css';

class App extends Component {

  state = {
    celebrities: contacts.splice(0, 5),
    toggleNumberPopularity: 1,
    toggleNumberName: 1
  }

  addCelebrity = () => {
    let randomNumber = Math.floor(Math.random() * contacts.length)
    let newCelebrities = [...this.state.celebrities, contacts[randomNumber]]
    contacts.splice(randomNumber, 1)
    console.log(contacts)
    this.setState({
      celebrities: newCelebrities
    })
  }

  sortByPopularity = () => {
    let newCelebrities = [...this.state.celebrities]
    newCelebrities.sort((a, b) => {
      return - this.state.toggleNumberPopularity * a.popularity + this.state.toggleNumberPopularity * b.popularity
    })
    this.setState({
      celebrities: newCelebrities,
      toggleNumberPopularity: this.state.toggleNumberPopularity * (-1)
    })
  }

  sortByName = () => {

    let newCelebrities = [...this.state.celebrities]
    newCelebrities.sort((a, b) => {
      if (a.name > b.name) {
        return 1 * this.state.toggleNumberName;
      }
      if (a.name < b.name) {
        return -1 * this.state.toggleNumberName;
      }
      return 0;
    })
    this.setState({
      celebrities: newCelebrities,
      toggleNumberName: this.state.toggleNumberName * (-1)
    })
  }

  deleteCelebrity = celebName => {
    let newCelebrities = [...this.state.celebrities].filter((celebrity) => {
      if (celebrity.name !== celebName) {
        return celebrity
      }
    })

    this.setState({
      celebrities: newCelebrities
    })
  }

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <button className="button" onClick={() => this.addCelebrity()}>Add Random Contact</button>
        <button className="button" onClick={() => this.sortByPopularity()}>Sort By Popularity</button>
        <button className="button" onClick={() => this.sortByName()}>Sort By Name</button>

        <TitleCard />
        {
          this.state.celebrities.map((celebrity, index) => {
            return <Card key={index} {...celebrity} toDelete={() => this.deleteCelebrity(celebrity.name)} />
          })
        }
      </div>
    )
  }
}

export default App;
