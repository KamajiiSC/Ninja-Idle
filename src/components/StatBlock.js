import React from 'react';

const StatBlock = (props) => (
  <div>
    <h1>Training Points: {props.trainPoints}</h1>
    <h1>Mentality Points: {props.medPoints}</h1>
    <h1>Health: </h1>
  </div>
);

export default StatBlock;
