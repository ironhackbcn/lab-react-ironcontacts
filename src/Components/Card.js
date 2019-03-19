import React, { Component } from 'react';


class Card extends Component {
  render() {
    const { pictureUrl, name, popularity } = this.props;
    return (
      <div className="card">
        <article>
          <img src={pictureUrl} alt="" />
          <p>{name}</p>
          <p>{popularity}</p>
          
        </article>
      </div>
    );
  }
}

export default Card;