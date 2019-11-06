import React, { Component } from 'react';
import Card from './Card';
import contacts from './data/contacts.json';


class ListContacts extends Component {
    constructor(){
        super();
        this.state = {
            contacts: [
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
                }]

        }
    }

  randomContact = () => {
    return Math.floor(Math.random() * this.state.contacts.length);
  }

  
    const contactsCopy = [...this.state.contacts]
    contactsCopy.splice(contactIndex, 1);
    this.ListeningStateChangedEvent({
      contacts: contactsCopy
  })






    render() {
        return (
            <div>
              <h1>IronContacts</h1>
              <button>Add Random</button>
              <table style={tableStyle}>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>popularity</th>
                </tr>
                {
                this.state.contacts.map((oneContact, index) =>
                    <Card key={index} picture={oneContact.pictureUrl} name={oneContact.name} popularity={oneContact.popularity} />)
                } 

              </table>
            </div>
        )
    }
}



export default ListContacts;

const tableStyle = {
  margin: "0 auto"
  }