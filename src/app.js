import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

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

ReactDOM.render(<NinjaIdle />, document.getElementById('app'));