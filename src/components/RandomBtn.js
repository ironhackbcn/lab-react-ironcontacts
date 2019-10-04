import React from 'react';

const RandomBtn = ({ children, randomContact }) => {
  return (
    <button className="RandomBtn" onClick={randomContact}>
      {children}
    </button>
  );
};

export default RandomBtn;
