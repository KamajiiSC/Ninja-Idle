import React from 'react';
import ReactDOM from 'react-dom';

export default class NinjaIdle extends React.Component{

  render(){
    return(
      <div>
        <StatBlock />
        <TrainButton />
      </div>
    )
  }
};

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
