import ActionTypes from '../constants/action_types.js';
import database from './database';
const uid = require('uid');

export function getPosts() {
	return dispatch => {
		dispatch(getPostsRequestedAction());
		return database.ref('/posts/').once('value', snap => {
			const posts = snap.val();
			console.log('Snapped posts', posts);
			dispatch(getPostsFulfilledAction(posts))
		}).catch((error) => {
			console.log(error);
			dispatch(getPostsRejectedAction());
		});
	}
}

function getPostsRequestedAction() {
	console.log("Dispatching ", ActionTypes.GetPostsRequested)
	return {
		type: ActionTypes.GetPostsRequested
	};
}

function getPostsRejectedAction() {
	console.log("Dispatching", ActionTypes.GetPostsRejected)
	return {
		type: ActionTypes.GetPostsRejected
	};
}

function getPostsFulfilledAction(posts) {
	console.log("Dispatching", ActionTypes.GetPostsFulfilled)
	return {
		type: ActionTypes.GetPostsFulfilled,
		posts
	};
}

export function getComments() {
	return dispatch => {
		dispatch(getCommentsRequestedAction());
		return database.ref('/comments/').once('value', snap => {
			const comments = snap.val();
			console.log('Snapped comments', comments);
			dispatch(getCommentsFulfilledAction(comments))
		}).catch((error) => {
			console.log(error);
			dispatch(getCommentsRejectedAction());
		});
	}
}

function getCommentsRequestedAction() {
	console.log("Dispatching ", ActionTypes.GetCommentsRequested)
	return {
		type: ActionTypes.GetCommentsRequested
	};
}

function getCommentsRejectedAction() {
	console.log("Dispatching", ActionTypes.GetCommentsRejected)
	return {
		type: ActionTypes.GetCommentsRejected
	};
}

function getCommentsFulfilledAction(comments) {
	console.log("Dispatching", ActionTypes.GetCommentsFulfilled)
	return {
		type: ActionTypes.GetCommentsFulfilled,
		comments
	};
}

export function getEvents() {
	return dispatch => {
		dispatch(getEventsRequestedAction());
		return database.ref('/events/').once('value', snap => {
			const events = snap.val();
			console.log('Snapped events', events);
			dispatch(getEventsFulfilledAction(events))
		}).catch((error) => {
			console.log(error);
			dispatch(getEventsRejectedAction());
		});
	}
}

function getEventsRequestedAction() {
	console.log("Dispatching ", ActionTypes.GetEventsRequested)
	return {
		type: ActionTypes.GetEventsRequested
	};
}

function getEventsRejectedAction() {
	console.log("Dispatching", ActionTypes.GetEventsRejected)
	return {
		type: ActionTypes.GetEventsRejected
	};
}

function getEventsFulfilledAction(events) {
	console.log("Dispatching", ActionTypes.GetEventsFulfilled)
	return {
		type: ActionTypes.GetEventsFulfilled,
		events
	};
}

// Add comments action creators
export function addToComments(postId, stars, text, user) {
	return dispatch => {
		dispatch(addToCommentsRequestedAction());
		const commentId = uid()
		const postCommentsRef = database.ref('/comments/' + postId + "/" + commentId);
		postCommentsRef.set({
		  stars,
		  text,
		  user,
		  commentId
		})
		.then(() => {
			dispatch(addToCommentsFulfilledAction({
				stars,
				text,
				user
			}));
		})
		.catch((error) => {
			dispatch(addToCommentsRejectedAction());
		});
	}
}

function addToCommentsRequestedAction() {
  return {
    type: ActionTypes.AddToCommentsRequested
  };
}

function addToCommentsRejectedAction() {
  return {
    type: ActionTypes.AddToCommentsRejected
  }
}

function addToCommentsFulfilledAction(comment) {
  return {
    type: ActionTypes.AddToCommentsFulfilled,
    commentId
  };
}

// Add events action creators
export function addToEvents(name, location_code, category, time, description) {
	return dispatch => {
		console.log("this is addToEvents dasdasdbsajbsj");
		dispatch(addToEventsRequestedAction());
		const eventId = uid()
		const eventRef = database.ref('/events/' + location_code + "/" + eventId);
		eventRef.set({
		  name,
		  category,
		  time,
		  description,
		  eventId
		})
		.then(() => {
			dispatch(addToEventsFulfilledAction({
				name,
				category,
				time,
				description
			}));
		})
		.catch((error) => {
			dispatch(addToEventsRejectedAction());
		});
	}
}

function addToEventsRequestedAction() {
  return {
    type: ActionTypes.AddToEventsRequested
  };
}

function addToEventsRejectedAction() {
  return {
    type: ActionTypes.AddToEventsRejected
  }
}

function addToEventsFulfilledAction(event) {
  return {
    type: ActionTypes.AddToEventsFulfilled,
    commentId
  };
}



// Remove comments action creators
export function removeComment(postId, commentId) {
	return dispatch => {
		dispatch(removeCommentRequestedAction());
		const postCommentsRef = database.ref('/comments/' + postId + "/" + commentId);
		postCommentsRef.remove()
		.then(() => {
			dispatch(removeCommentFulfilledAction({
				postId,
				commentId
			}));
		})
		.catch((error) => {
			dispatch(removeCommentRejectedAction());
		});
	}
}

function removeCommentRequestedAction() {
  return {
    type: ActionTypes.RemoveCommentRequested
  };
}

function removeCommentRejectedAction() {
  return {
    type: ActionTypes.RemoveCommentRejected
  }
}

function removeCommentFulfilledAction(commentInfo) {
  return {
    type: ActionTypes.RemoveCommentFulfilled,
    commentInfo
  };
}



//// register part;

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
  console.log("we are running addToUsers in actionCreators");
	console.log(JSON.stringify(user));
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
			})
			.then(() => {
				dispatch(addToUsersFulfilledAction({
					username,
					password,
					email,
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

//// login part

export function getUsers() {
	return dispatch => {
		dispatch(getUsersRequestedAction());
		return database.ref('/users/').once('value', snap => {
			const users = snap.val();
			console.log(JSON.stringify(users));
			console.log('Snapped users right here', users);
			dispatch(getUsersFulfilledAction(users))
		}).catch((error) => {
			console.log(error);
			dispatch(getUsersRejectedAction());
		});
	}
}

function getUsersRequestedAction() {
	console.log("Dispatching ", ActionTypes.GetUsersRequested)
	return {
		type: ActionTypes.GetUsersRequested
	};
}

function getUsersRejectedAction() {
	console.log("Dispatching", ActionTypes.GetUsersRejected)
	return {
		type: ActionTypes.GetUsersRejected
	};
}

function getUsersFulfilledAction(events) {
	console.log("Dispatching", ActionTypes.GetUsersFulfilled)
	return {
		type: ActionTypes.GetUsersFulfilled,
		events
	};
}
