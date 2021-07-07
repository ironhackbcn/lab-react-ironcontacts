import contacts from '../data/contacts.json'

const randomContact = () => {
  const randomNumber = Math.random() * contacts.length
  return contacts[Math.floor(randomNumber)]
}

export default randomContact

