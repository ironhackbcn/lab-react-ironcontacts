import React, { Component } from 'react';

class List extends Component { 

    handleClick = () => {
        this.props.del(this.props.index);
    }
    
    render () {
            return (
                <div className="row">
                    {this.props.list.map((item,index) => {
                        return (
                            <li key={index}>
                                <img src={item.pictureUrl} alt="Famous" className="img" ></img>
                                <p >{item.name}</p>
                                <p >{item.popularity}</p>
                                <button onClick={this.handleClick}>Delete</button>
                            </li>
                    )})};
                </div>
            );
        }
    }



export default List;