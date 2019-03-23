import React, { Component } from 'react';

class Add extends Component { 

render(){
    return(
        <button onClick={this.props.button}>Add Random Contact</button>
    )}

}
export default Add;