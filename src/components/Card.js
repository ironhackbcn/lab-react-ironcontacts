import React from 'react'
import './Card.css';

const Card = (props) => {
  return (
    <li>
      <div className="card">
        <img src={props.pic} alt="" />
        <div className="score">
          <h1>{props.name}</h1>
          <h3>{props.popular}</h3>
        </div>
      </div>
    </li>
  )
}

export default Card;
