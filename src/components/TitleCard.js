import React from 'react'

export default function TitleCard(props) {
    return (
        <div className="card-wrapper" style={cardStyle}>
            <h2>Picture</h2>
            <h2>Name</h2>
            <h2>Popularity</h2>
            <h2>Action</h2>
        </div>
    )
}

const cardStyle = {
    display: "flex",
}