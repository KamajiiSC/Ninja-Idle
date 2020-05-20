import React from 'react';
import ReactDOM from 'react-dom';

export default class NinjaIdle extends React.Component{
  state = {
    trainPoints: 0
  }

  render(){
    return(
      <div>
        <StatBlock />
        <TrainButton trainPoints={trainPoints}/>
      </div>
    )
  }
};

const TrainButton = () => (
  <div>
    <button>Train</button>
  </div>
);

const StatBlock = (props) => (
  <div>
    <h1>Training Points: </h1>
  </div>
);
