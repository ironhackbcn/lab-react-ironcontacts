import React from 'react';

const SortByNameBtn = ({ children, sortName }) => {
  return (
    <button className="SortByNameBtn" onClick={sortName}>
      {children}
    </button>
  );
};

export default SortByNameBtn;
