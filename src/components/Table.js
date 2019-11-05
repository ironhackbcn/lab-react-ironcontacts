import React, { Component } from 'react'
import contacts from '../data/contacts.json'
import ContactCard from './ContactCard'




class Table extends Component {
    state = {
        contactlist: contacts.slice(0, 5)
    };




    deleteContactHandler = (index) => {
        console.log(index)
        const contactsCopy = [...this.state.contactlist]
        const filtered = contactsCopy.filter(contact => contact.name !== index)
        //console.log(filtered)
        this.setState({
            contactlist: filtered
        })
    }
    addRandomContact = () => {
        const contactsCopy = [...this.state.contactlist]
        const randomContact = contacts[Math.floor(Math.random() * contacts.length)]
        contactsCopy.push(randomContact)
        this.setState({
            contactlist: contactsCopy
        })

    }

    sortByName = () => {
        const contactsCopy = [...this.state.contactlist]

        const sortByName = contactsCopy.sort( (a, b)=> {
            return a.name < b.name ? -1 :a.name > b.name? 1: 0;
        })
        this.setState({
            contactlist: sortByName
        })
        console.log(contactsCopy)
    }

    sortByPopularity = () => {
        const contactsCopy = [...this.state.contactlist]

        const sortByPopularity = contactsCopy.sort( (a, b)=> {
            return a.popularity < b.popularity ? -1 :a.popularity > b.popularity? 1: 0;
        })
        this.setState({
            contactlist: sortByPopularity
        })
        
    }
    render() {
        return (
            <div>

                <h2>Picture</h2>
                <h2>Name</h2>
                <h2>Popularity</h2>
                <button onClick={this.addRandomContact}>Add Contact</button>
                <button onClick={this.sortByName}>Sort by name</button>
                <button onClick={this.sortByPopularity}>Sort by Popularity</button>
                <ul>
                    {
                        this.state.contactlist.map(oneContact =>
                            <ContactCard key={oneContact.name} img={oneContact.pictureUrl} name={oneContact.name} popularity={oneContact.popularity} clickToDelete={() => this.deleteContactHandler(oneContact.name)} />)
                    }
                </ul>
            </div>
        )
    }
}

export default Table;