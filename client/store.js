/*
import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import root reducer
import rootReducer from './reducers/index.js';
import comments from './data/comments.js';
import posts from './data/posts.js';

// create an object for the default data
const defaultState = {
	posts,
	comments,
};

const enhancers = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(rootReducer, defaultState, enhancers);
export const history = syncHistoryWithStore(browserHistory, store);
export default store;
*/
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from "redux-logger";
import rootReducer from './reducers/index.js';

const logger = createLogger();

const store = createStore(rootReducer,
  {},
  applyMiddleware(thunk, logger)
);

export default store;