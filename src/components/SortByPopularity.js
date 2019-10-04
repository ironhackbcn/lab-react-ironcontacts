import React from 'react';

const SortByPopularity = ({ children, sortPopularity }) => {
  return (
    <button className="SortByPopularity" onClick={sortPopularity}>
      {children}
    </button>
  );
};

export default SortByPopularity;
