import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';

import App from './components/App.js';
import PhotoGrid from './components/PhotoGrid.js';
import Place from './components/Place.js';
import Homepage from './components/Homepage.js';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Events from './components/Events/Events.js';
import AddEventForm from './components/Events/AddEventForm.js';
import Profile from './components/Profile/Profile.js';

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
				<Route path="/upload" component={AddEventForm}></Route>
				<Route path="/events" component={Events}></Route>
				<Route path="/profile" component={Profile}></Route>
			</Route>

		</Router>
	</Provider>
)

render(router, document.getElementById('root'));
