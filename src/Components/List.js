import React, { Component } from 'react';

class List extends Component { 

    handleClick = () => {
        this.props.del(this.props.index);
        console.log(this.props.index)
    }
    
    render () {
        return (
            <div className="row">
                <li>
                    <img src={this.props.list.pictureUrl} alt="Famous" className="img" ></img>
                    <p >{this.props.list.name}</p>
                    <p >{this.props.list.popularity}</p>
                    <button onClick={this.handleClick}>Delete</button>
                </li>
            </div>
        );
    }
}

export default List;