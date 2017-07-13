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