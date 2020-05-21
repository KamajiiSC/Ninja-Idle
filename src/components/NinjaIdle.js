import React from 'react';
import TrainButton from './TrainButton';
import StatBlock from './StatBlock';

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