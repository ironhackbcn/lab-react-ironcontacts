import React from 'react'

export default function Card(props) {
    return (
        <div className="card-wrapper" style={cardStyle}>
            <div>
                <img width="80" src={props.pictureUrl} />
            </div>
            <p>{props.name}</p>
            <p>{props.popularity.toFixed(2)}</p>
            <button className="button delete-button" onClick={props.toDelete}>Delete</button>
        </div>
    )
}

const cardStyle = {
    display: "flex",
}