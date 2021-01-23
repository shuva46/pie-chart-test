import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import store from './store';
import App from './App';

const configStore = store();

ReactDOM.render(
  	<Provider store={configStore}>
		<App />
	</Provider>,
  document.getElementById('root')
);

