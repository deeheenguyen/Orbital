import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { firebaseStateReducer as firebase } from 'react-redux-firebase';

import posts from './posts.js';
import comments from './comments.js';
import flashMessages from './flashMessages.js';
const rootReducer = combineReducers({posts, comments, flashMessages,
	routing: routerReducer});

export default rootReducer;
