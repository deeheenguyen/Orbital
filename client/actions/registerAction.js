import database from './database';
import axios from 'axios';
const uid = require('uid');

export function userRegisterRequest(userData) {
  return dispatch => {
    console.log("this is data ");
    console.log(JSON.stringify(userData));
    console.log("the error is from register Action");
    console.log("we running without axios");
    return axios.post('/api/users', userData);
  }
}

// for user login part
export function login(data) {
  return dispatch => {
    dispatch(loginAction());
  }
}
function loginAction(user){
	return {
		type: ActionTypes.LoginAction,
		user
	}
}
/// for user registration part
export function addToUsers(user) {
  console.log("we are running addToUsers in registerAction");
  const {username, password, email} = user;
	return dispatch => {
      console.log("add to users ??????");
			dispatch(addToUsersRequestedAction());
      console.log("dasodhasiodjasidasdioio");
			const userID = uid();
			const userRef = database.ref('users/' + userID);
			userRef.set({
			  username: user.username,
			  password: user.password,
			  email: user.email,
				userID
			})
			.then(() => {
				dispatch(addToUsersFulfilledAction({
					username,
					password,
					email,
					userID
				}));
			})
			.catch((error) => {
				dispatch(addToUsersRejectedAction());
			});
	}
}

function addToUsersRequestedAction() {
  return {
    type: ActionTypes.AddToEventsRequested
  };
}

function addToUsersRejectedAction() {
  return {
    type: ActionTypes.AddToEventsRejected
  }
}

function addToUsersFulfilledAction(user) {
  return {
    type: ActionTypes.AddToUsersFulfilled,
    user
  }
}
