import React from 'react';
import TrainButton from './TrainButton';
import StatBlock from './StatBlock';
import MeditateButton from './MeditateButton';

export default class NinjaIdle extends React.Component{
  state = {
    trainPoints: 0,
    medPoints: 0,
    health: 100
  }

  handleAddTrainPoints = () => {
    let newPoints = this.state.trainPoints + 1;
    console.log(newPoints);
    this.setState(() => ({trainPoints: newPoints}));
  };

  handleAddMedPoints = () => {
    let newPoints = this.state.medPoints + 1;
    console.log(newPoints);
    this.setState(() => ({medPoints: newPoints}));
  };
  
  render(){
    return(
      <div>
        <StatBlock trainPoints={this.state.trainPoints} medPoints={this.state.medPoints}/>
        <TrainButton handleAddTrainPoints={this.handleAddTrainPoints} />
        <MeditateButton handleAddMedPoints={this.handleAddMedPoints}/>
      </div>
    )
  }

};