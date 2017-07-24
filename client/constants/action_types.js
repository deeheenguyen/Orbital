const ActionTypes = {
	GetPostsRequested: 'GET_POSTS_REQUESTED',
	GetPostsRejected: 'GET_POSTS_REJECTED',
	GetPostsFulfilled: 'GET_POSTS_FULFILLED',

	GetCommentsRequested: 'GET_COMMENTS_REQUESTED',
	GetCommentsRejected: 'GET_COMMENTS_REJECTED',
	GetCommentsFulfilled: 'GET_COMMENTS_FULFILLED',

	GetEventsRequested: 'GET_EVENTS_REQUESTED',
	GetEventsRejected: 'GET_EVENTS_REJECTED',
	GetEventsFulfilled: 'GET_EVENTS_FULFILLED',

	AddToCommentsRequested: 'ADD_TO_COMMENTS_REQUESTED',
	AddToCommentsRejected: 'ADD_TO_COMMENTS_REJECTED',
	AddToCommentsFulfilled: 'ADD_TO_COMMENTS_FULFILLED',

	AddToEventsRequested: 'ADD_TO_EVENTS_REQUESTED',
	AddToEventsRejected: 'ADD_TO_EVENTS_REJECTED',
	AddToEventsFulfilled: 'ADD_TO_EVENTS_FULFILLED',

	RemoveCommentRequested: 'REMOVE_COMMENT_REQUESTED',
	RemoveCommentRejected: 'REMOVE_COMMENT_REJECTED',
	RemoveCommentFulfilled: 'REMOVE_COMMENT_FULFILLED',

	AddFlashMessage: 'ADD_FLASH_MESSAGE',
	DeleteFlashMessage: 'DELETE_FLASH_MESSAGE',
}

export default ActionTypes;
