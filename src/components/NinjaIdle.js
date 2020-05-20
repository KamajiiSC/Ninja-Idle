import React from 'react';
import ReactDOM from 'react-dom';

export default class NinjaIdle extends React.Component{
  state = {
    trainPoints: 0
  }

  handleAddTrainPoints = () => {
    let newPoints = this.state.trainPoints++
    this.setState(() => ({trainPoints: newPoints}));
  };

  render(){
    return(
      <div>
        <StatBlock trainPoints={this.state.trainPoints}/>
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

const StatBlock = (props) => (
  <div>
    <h1>Training Points: {props.trainPoints}</h1>
  </div>
);
