import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const TrainButton = () => (
  <div>
    <button>Train</button>
  </div>
);

const NinjaIdle = () => (
  <div>
    <p>test</p>
  </div>
);

ReactDOM.render(<NinjaIdle />, document.getElementById('app'));