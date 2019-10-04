import React from 'react';
import '../css/contact.css';

const Contact = ({ pictureUrl, name, popularity, handleDelete, index }) => {
  return (
    <div className="contact">
      <div>
        <img src={pictureUrl} alt={name}></img>
      </div>
      <div>{name}</div>
      <div>{popularity}</div>
      <div>
        <button onClick={() => handleDelete(index)}>delete</button>
      </div>
    </div>
  );
};

export default Contact;
