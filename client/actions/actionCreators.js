import ActionTypes from '../constants/action_types.js';
import firebase, { auth, database } from './database.js';

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
export function addToComments(commentId, postId, stars, text, user, userUid) {
	return dispatch => {
		dispatch(addToCommentsRequestedAction());
		const postCommentsRef = database.ref('/comments/' + postId + "/" + commentId);
		postCommentsRef.set({
		  stars,
		  text,
		  user,
		  userUid,
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
    comment
  };
}

export function addToNewsFeed(userUid, newsId, type, timeStamp, obj) {
	return dispatch => {
		dispatch(addToNewsFeedRequestedAction());
		const newsRef = database.ref('/feeds/' + userUid + "/" + newsId);
		newsRef.set({
			type,
			timeStamp,
			obj
		})
		.then(() => {
			dispatch(addToNewsFeedFulfilledAction({
				type,
				timeStamp,
				obj
			}));
		})
		.catch((error) => {
			dispatch(addToNewsFeedRejectedAction());
		});
	}
}

function addToNewsFeedRequestedAction() {
	return {
		type: ActionTypes.AddToNewsFeedRequested
	}
}

function addToNewsFeedRejectedAction() {
	return {
		type: ActionTypes.AddToNewsFeedRejected
	}
}

function addToNewsFeedFulfilledAction(news) {
	return {
		type: Actiontypes.AddToNewsFeedFulfilled,
		news
	}
}

// Add events action creators
export function addToEvents(eventId, userUid, name, location_code, category, time, description) {
	return dispatch => {
		dispatch(addToEventsRequestedAction());
		const eventRef = database.ref('/events/' + location_code + "/" + eventId);
		eventRef.set({
		  name,
		  category,
		  time,
		  description,
		  userUid,
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
    event
  };
}

export function updateUser(userUid, course, intro) {
	return dispatch => {
		dispatch(updateUserRequestedAction());
		const userRef = database.ref('users/' + userUid);
		userRef.set({
			course,
			intro
		})
		.then(() => {
			dispatch(updateUserFulfilledAction({
				course,
				intro
			}));
		})
		.catch((error) => {
			dispatch(updateUserRejectedAction());
		});
	}
}

function updateUserRequestedAction() {
	return {
		type: ActionTypes.UpdateUserRequested
	}
}

function updateUserRejectedAction() {
	return {
		type: ActionTypes.UpdateUserRejected
	}
}

function updateUserFulfilledAction(user) {
	return {
		type: ActionTypes.UpdateUserFulfilled,
		user
	}
}

export function getUserInfo(userUid) {
	return dispatch => {
		dispatch(getEventsRequestedAction());
		return database.ref('/users/' + userUid).once('value', snap => {
			const userInfo = snap.val();
			console.log('Snapped user info', userInfo);
			dispatch(getUserInfoFulfilledAction(userInfo))
		}).catch((error) => {
			console.log(error);
			dispatch(getUserInfoRejectedAction());
		});
	}
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

export function addFlashMessage(message){
	return {
		type: ActionTypes.AddFlashMessage,
		message
	}
}
export function deleteFlashMessage(id) {
	return {
		type: ActionTypes.DeleteFlashMessage,
		id
	}
}