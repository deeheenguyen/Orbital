import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';

import App from './components/App.js';
import PhotoGrid from './components/PhotoGrid.js';
import Place from './components/Place.js';
import Homepage from './components/Homepage.js';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Homepage}></IndexRoute>
				<Route path="/view/:postId" component={Place}></Route>
				<Route path="/results" component={PhotoGrid}></Route>
				<Route path="/login" component={Login}></Route>
				<Route path="/register" component={Register}></Route>
			</Route>

		</Router>
	</Provider>
)

render(router, document.getElementById('root'));
