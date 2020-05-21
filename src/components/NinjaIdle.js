import React from 'react';
import ReactDOM from 'react-dom';

export default class NinjaIdle extends React.Component{
  state = {
    trainPoints: 0
  }

  handleAddTrainPoints = () => {
    let newPoints = this.state.trainPoints + 1;
    console.log(newPoints);
    this.setState(() => ({trainPoints: newPoints}));
  };

  render(){
    return(
      <div>
        <StatBlock trainPoints={this.state.trainPoints}/>
        <TrainButton handleAddTrainPoints={this.handleAddTrainPoints} />
      </div>
    )
  }
};

const TrainButton = (props) => (
  <div>
    <button onClick={props.handleAddTrainPoints}>Train</button>
  </div>
);

const StatBlock = (props) => (
  <div>
    <h1>Training Points: {props.trainPoints}</h1>
  </div>
);
