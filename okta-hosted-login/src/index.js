import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

/* global document */
/* eslint-disable react/jsx-filename-extension */
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
