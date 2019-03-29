import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Router from './Router';
import Store from './Tienda/Store';

ReactDOM.render(
	<Provider store={Store}>
		<Router />
	</Provider>
, document.getElementById('root'));