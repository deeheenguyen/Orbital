import ActionTypes from '../constants/action_types.js';
import database from './database';

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

export function addComment(postId, author, comment, rating) {
	console.log("Dispatching ADD_COMMENT")
	return {
		type: ActionTypes.AddComment,
		postId,
		author,
		comment,
		rating
	}
}

export function removeComment(postId, i) {
	return {
		type: ActionTypes.RemoveComment,
		postId,
		i
	}
}

export function rate(index, rating) {
	return {
		type: ActionTypes.Rate,
		index,
		rating
	}
}

export function unrate(index, rating) {
	return {
		type: ActionTypes.Unrate,
		index,
		rating
	}
}