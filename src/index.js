import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import icons from './components/icons';

import './styles/index.css';
import './styles/App.css';

ReactDOM.render(<App icons={icons} />, document.querySelector('#root'));

