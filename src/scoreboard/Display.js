import React from 'react';

const Display = (props) => {
  return (
    <div>
      <p>Balls: {props.balls} Strikes:{props.strikes} Hits: {props.hits}</p>
    </div>
  );
};
export default Display;
