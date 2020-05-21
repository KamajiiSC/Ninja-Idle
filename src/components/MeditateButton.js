import React from 'react';

const MeditateButton = (props) => (
  <div>
    <button onClick={props.handleAddMedPoints}>Meditate</button>
  </div>
);

export default MeditateButton;