import React, { Component } from 'react';
import './App.css';
import contacts from './data/contacts.json';
import CardsList from './components/CardsList';


  
class App extends Component {
  state = {
    list: contacts.slice(0,5)
  };
  onAddItem = () => {
    this.setState(state => {
    const randomValue = Math.floor(contacts.length * Math.random())
    const list = state.list.concat(contacts[randomValue]);
    return {
      list,
      value: '',
      };
    });
  }; 
  sortByName = () => {
    const list=this.state.list.sort((a,b) => (a.name > b.name) ? 1 : ((b.name> a.name) ? -1 : 0)); 
    this.setState({list: list})
  }; 
  sortByPopularity = () => {
    const list=this.state.list.sort((a,b) => (a.popularity < b.popularity) ? 1 : ((b.popularity< a.popularity) ? -1 : 0)); 
    this.setState({list: list})
  }; 
  onDeleteItem = (index) => {
    let {list} = this.state
    list.splice(index,1)
    this.setState({
      list
    })
      
  };
  render () {
    return (
      <div>
        { <button
          type="button"
          onClick={this.onAddItem}
        >
          Add Random Contact
        </button> }
        { <button
          type="button"
          onClick={this.sortByName}
        >
          Sort By Name
        </button> }
        { <button
          type="button"
          onClick={this.sortByPopularity}
        >
          Sort By Popularity
        </button> }
       
        <CardsList  contacts={this.state.list} onDelete={this.onDeleteItem}/>
        
        
      </div>

    )
  }
}

export default App;
