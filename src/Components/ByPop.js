import React, { Component } from 'react';

class ByPop extends Component { 

render(){
    return(
        <button onClick={this.props.button}>Sort By Popularity</button>
    )}
}

export default ByPop;