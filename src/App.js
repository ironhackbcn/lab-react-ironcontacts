import React, { Component } from 'react';
import contacts from './data/contacts.json'
import './App.css';
import Card from './components/Card';

class App extends Component {
  
  state = {
    listContacts: contacts.slice(0,5)
  }

addClick = () => {
  let total = contacts.length
  let random = Math.floor((Math.random() * total) + 1);
  let nuevo = contacts[random];
  this.setState({
    listContacts: [...this.state.listContacts, nuevo]
  })
}

sortName = () => {
    this.state.listContacts.sort(function(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
  
    return 0;
  });
  this.setState({
    listContacts: [...this.state.listContacts]
  })
}

sortPopularity = () => {
  this.state.listContacts.sort(function (a, b) {
    return b.popularity - a.popularity;
  });
  this.setState({
    listContacts: [...this.state.listContacts]
  })
}

onDelete = (index) => {
  const newList = [...this.state.listContacts];
  newList.splice(index, 1)
  this.setState({
    listContacts: newList
    })
}

renderlist = () => {
  return  this.state.listContacts.map((item, index) => {
    return <Card
    key={`id-${index}`}
    item={item}
    index={index}
    onDelete={this.onDelete}
     /> 
    })  
  }

  render() {
    return (
      <div className="App">
      <ul>
        <div className="lista">
            {this.renderlist()}
        </div>
      </ul>  
      <button onClick={this.addClick}>Add to list</button>
      <button onClick={this.sortName}>sort by name</button>
      <button onClick={this.sortPopularity}>sort by popularity</button>
      </div>
    );
  }
}

export default App;
