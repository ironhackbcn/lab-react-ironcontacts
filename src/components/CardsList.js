import React, { Component } from 'react';
import Card from './Card';



class CardsList extends Component {
  
  
    
  renderList () {
    return this.props.contacts.map((contact, index) => {
      return <div>
          <Card key={`id-${index}`} contact={contact}/>
            <button
             type="button"
             onClick={() => this.props.onDelete(index)}
             >
             Delete
           </button> 
      </div>
      
    })
  }


  
  render () {
    return (
      <div >
         {this.renderList()}
       </div>

    )
  }
}
export default CardsList;