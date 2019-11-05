
import React from 'react'



const ContactCard = (props) => {
    const { img, name, popularity, clickToDelete } = props
    return (
        
            <div className='card'>
                <img className='img-card' src={img} alt="" />
                <p>{name}</p>
                <p>{popularity}</p>
                <button onClick={clickToDelete}>Delete</button>
            </div>
        
    )
}


export default ContactCard;