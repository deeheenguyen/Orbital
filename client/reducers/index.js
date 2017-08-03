import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { firebaseStateReducer as firebase } from 'react-redux-firebase';

import posts from './posts.js';
import comments from './comments.js';
import events from './events.js';
import flashMessages from './flashMessages.js';
import users from './users.js';
const rootReducer = combineReducers({posts, comments, events, flashMessages, users, routing: routerReducer});

export default rootReducer;
