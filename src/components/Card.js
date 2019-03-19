import React, { Component } from 'react';

class Card extends Component {
  render(){
    return(
      <article className="card">
        <img className="card-img" src={this.props.imgUrl} alt={this.props.imgAlt} />
        <h3 className="card-title">{this.props.name}</h3>
        <p className="card-popularity">{this.props.popularity}</p>
      </article>
    )
  }
}

export default Card;