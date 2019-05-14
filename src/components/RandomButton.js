import React from 'react';

 const RandomButton = (props) => {

    return(
      <div>
        <button className="RandomButton" onClick={props.clickToAddRandom}>Random actor!</button>
      </div>
      
    );
  }

export default RandomButton;