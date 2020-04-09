import React from 'react';

const Contact = (props) => {
  const { name, popularity, pictureUrl } = props.contact;
  
  const handleDelete = (e) => {
    props.deleteContact(props.index);
  }

  return (
    <li className="flexbox">
      <img height="50px" src={pictureUrl} alt={name}></img>
      <h4>{name}</h4>
      <h5>{popularity}</h5>
      <button className="btn" onClick={handleDelete}>Delete</button>
    </li>
  )
}




export default Contact;
