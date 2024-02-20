import React from 'react';

const Spotlight = ({ x, y }) => {
  const spotlightStyle = {
    left: `${x}px`,
    top: `${y}px`,
  };

  return <div className={'spotlight'} style={spotlightStyle}></div>;
};

export default Spotlight;
