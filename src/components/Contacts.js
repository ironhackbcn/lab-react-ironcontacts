import React, {Component} from 'react';
import '../contacts.css'

class contact extends Component {

  render() {
    return (
      <section className="contacts">
        
          <article className="image">
            <img src={process.env.PUBLIC_URL + `${this.props.image}`} alt="images" />
          </article>
          <p>{this.props.name}</p>
          <p>{this.props.pop}</p>
          <button onClick={() => this.props.onDelete(this.props.id)}>Delete</button>
      
      </section>
    )
  }
}

export default contact;