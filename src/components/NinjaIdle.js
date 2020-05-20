import React from 'react';
import ReactDOM from 'react-dom';

const TrainButton = () => (
  <div>
    <button>Train</button>
  </div>
);

const StatBlock = () => (
  <div>
    <h1>Training Points: </h1>
  </div>
);

const NinjaIdle = () => (
  <div>
    <StatBlock />
    <TrainButton />
  </div>
);

export default NinjaIdle;