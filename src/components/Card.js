import React from 'react'
 function Card(props) {
     const {contact} = props
    return (

        <div>
            <img src={contact.pictureUrl} width='200' alt=""/>
            <p> {contact.name} </p>
            <p> {contact.popularity} </p>
            <button onClick={props.clickToDelete}>Delete</button>
        </div>
    )

}

export default Card;
