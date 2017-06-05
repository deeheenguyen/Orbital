import ActionTypes from '../constants/action_types.js';

function postComments(state = [], action) {
	switch (action.type) {
		case ActionTypes.AddComment:
			return [...state, {
				user: action.author,
				text: action.comment,
				stars: action.rating,
			}];
		case ActionTypes.RemoveComment:
			console.log(ActionTypes.RemoveComment);
			console.log(state);
			return [
				...state.slice(0, action.i),
				...state.slice(action.i + 1)
			]
		default:
			return state
	}
	return state;
}

function comments(state = [], action) {
	if (typeof action.postId !== 'undefined') {
		return {
			...state,
			[action.postId]: postComments(state[action.postId], action)
		}
	}
	switch (action.type) {
		case ActionTypes.GetCommentsRequested:
			console.log(ActionTypes.GetCommentsRequested)
			return Object.assign({}, state, {
		        inProgress: true,
		        error: '',
		        success: ''
      		});
      	case ActionTypes.GetCommentsRejected:
	        return Object.assign({}, state, {
	        	inProgress: false,
	        	error: 'Error in getting comments.',
	      	});
	    case ActionTypes.GetCommentsFulfilled:
	    	console.log("reached");
	    	var newState = Object.assign({}, state, {
		        inProgress: false,
		        success: 'Got comments.',
		        comments: {}
      		});
      		if (action.comments) {
      			console.log('raw comments', action.comments);
      			console.log('keys', Object.keys(action.comments))
      			/*
        		newState.posts = Object.keys(action.posts).map(k => action.posts[k]);
        		*/
        		Object.keys(action.comments).forEach(function(post) {
        			console.log("reached single", action.comments[post]);
        			newState.comments[post] = [];
        			newState.comments[post] = Object.keys(action.comments[post]).map(k => action.comments[post][k]);
        			console.log("single post", newState.comments[post])
        		})
      		}
      		console.log('Comments fetched', newState);
      		return newState;
    	default:
			return state;
	}  		
	return state;
}

export default comments;