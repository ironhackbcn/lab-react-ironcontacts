import React, { Component } from 'react';

class ByName extends Component { 

render(){
    return(
        <button onClick={this.props.button}>Sort By Name</button>
    )}

}
export default ByName;