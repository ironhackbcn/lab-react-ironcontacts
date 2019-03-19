import React, { Component } from 'react';
import contacts from "./data/contacts.json"
import './App.css';
import Row from "./components/Row"

class App extends Component {

	state = {
		contactList: contacts.slice(0, 5)
	}

	listItems() {
		const { contactList } = this.state;
		return contactList.map((contact, i) => {
			return (<Row
				pictureUrl={contact.pictureUrl}
				name={contact.name}
				popularity={contact.popularity}
				key={`${contact.name}-${i}`}
				index={i}
				deleteHandler={this.deleteRow}
			/>);
		})
	}

	addRandom() {
		const newList = [...this.state.contactList, contacts[Math.floor(Math.random(contacts.length * 1) * contacts.length)]]
		this.setState({
			contactList: newList
		})
	}

	sortByName() {
		let orderedList = [...this.state.contactList];
		
		orderedList.sort((a, b) => {
			if (a.name > b.name) {
				return 1;
			} if (a.name < b.name) {
				return -1;
			}
			return 0;
		});

		this.setState({
			contactList: orderedList
		})
	}

	sortByPopularity() {
		let orderedList = [...this.state.contactList];

		orderedList.sort((a, b) => {
			if (a.popularity > b.popularity) {
				return -1;
			}
			if (a.popularity < b.popularity) {
				return 1;
			}
			return 0;
		})

		this.setState({
			contactList: orderedList
		})
	}

	deleteRow = (index) => {
		const { contactList } = this.state;
		contactList.splice(index, 1);
		this.setState({
			contactList
		})
	}

	render() {

		return (
			<div className="App">
				<h1>IronContacts</h1>
				<button onClick={this.addRandom.bind(this)}>Add random contact</button>
				<button onClick={this.sortByName.bind(this)}>Sort by name</button>
				<button onClick={this.sortByPopularity.bind(this)}>Sort by popularity</button>
				<table>
					<thead>
						<tr>
							<th>Picture</th>
							<th>Name</th>
							<th>Popularity</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{this.listItems()}
					</tbody>
				</table>
			</div>
		);
	}
}

export default App;
