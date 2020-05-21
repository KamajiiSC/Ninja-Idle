import React from 'react';
import TrainButton from './TrainButton';
import StatBlock from './StatBlock';
import MeditateButton from './MeditateButton';

export default class NinjaIdle extends React.Component{
  state = {
    trainPoints: 0,
    medPoints: 0
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
        <StatBlock trainPoints={this.state.trainPoints}/>
        <TrainButton handleAddTrainPoints={this.handleAddTrainPoints} />
        <MeditateButton />
      </div>
    )
  }

};