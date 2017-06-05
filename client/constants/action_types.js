const ActionTypes = {
	GetPostsRequested: 'GET_POSTS_REQUESTED',
	GetPostsRejected: 'GET_POSTS_REJECTED',
	GetPostsFulfilled: 'GET_POSTS_FULFILLED',

	GetCommentsRequested: 'GET_COMMENTS_REQUESTED',
	GetCommentsRejected: 'GET_COMMENTS_REJECTED',
	GetCommentsFulfilled: 'GET_COMMENTS_FULFILLED',

	Rate: 'RATE',
	Unrate: 'UNRATE',
	AddComment: 'ADD_COMMENT',
	RemoveComment: 'REMOVE_COMMENT'
}

export default ActionTypes;