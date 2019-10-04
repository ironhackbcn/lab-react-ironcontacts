import React, { Component } from 'react';

class Card extends Component {

  render () {
    console.log(this.props)
    const {pictureUrl, name, popularity} = this.props.contact;
    return (
     <div >
        <img src={pictureUrl}/>
        <h2>{name}</h2>
        <h3>{popularity}</h3>
        
      </div>

    )
  }
}
export default Card;