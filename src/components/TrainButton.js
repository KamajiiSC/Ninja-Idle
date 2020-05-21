import React from 'react';

const TrainButton = (props) => (
  <div>
    <button onClick={props.handleAddTrainPoints}>Train</button>
  </div>
);

export default TrainButton;