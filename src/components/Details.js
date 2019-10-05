import React, { Component } from 'react';

class Details extends Component {
    render(){
        const {name, pictureUrl, popularity, deleteContact} = this.props
        return (
            <div className="unit">
                <div className="unit-img">
                    <img src={pictureUrl} alt="Actor"></img>
                </div>
                <div className="unit-name">
                    <h3>{name}</h3>
                </div>
                <div className="unit-popularity">
                    <p>{popularity}</p>
                </div>
                <button onClick={ deleteContact }>Delete</button>
            </div>
        )
    }
}

export default Details