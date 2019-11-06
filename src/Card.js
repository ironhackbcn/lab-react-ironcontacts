import React from 'react';

const Card = ({ picture, name, popularity }) => {
    return (
        <tr>
        <td>
            <img width="80" src={picture} alt=""/>
        </td>
        <td>
            <h2>{name}</h2>
        </td>
        <td>
            <p>{popularity}</p>
        </td>
        </tr>
    )
}

export default Card;