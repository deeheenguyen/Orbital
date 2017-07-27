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

	LoginAction: 'LOGIN_ACTION',
	GetUsersRejected: 'GET_USERS_REJECTED',
	GetUsersRequested: 'GET_USERS_REQUESTED',
	GetUsersFulfilled:  'GET_USERS_FULFILLED',

	AddToUsersRequestedAction: 'ADD_TO_USERS_REQUESTED_ACTION',
  AddToEventsRejected: 'ADD_TO_EVENTS_REJECTED_ACTION',
	addToUsersFulfilledAction: 'ADD_TO_USERS_FULFILLED_ACTION',
}

export default ActionTypes;
