const ActionTypes = {
	GetPostsRequested: 'GET_POSTS_REQUESTED',
	GetPostsRejected: 'GET_POSTS_REJECTED',
	GetPostsFulfilled: 'GET_POSTS_FULFILLED',

	GetCommentsRequested: 'GET_COMMENTS_REQUESTED',
	GetCommentsRejected: 'GET_COMMENTS_REJECTED',
	GetCommentsFulfilled: 'GET_COMMENTS_FULFILLED',

	AddToCommentsRequested: 'ADD_TO_COMMENTS_REQUESTED',
	AddToCommentsRejected: 'ADD_TO_COMMENTS_REJECTED',
	AddToCommentsFulfilled: 'ADD_TO_COMMENT_FULFILLED',

	CommentAdded: 'COMMENT_ADDED',

	Rate: 'RATE',
	Unrate: 'UNRATE',
	AddComment: 'ADD_COMMENT',
	RemoveComment: 'REMOVE_COMMENT'
}

export default ActionTypes;