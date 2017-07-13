import ActionTypes from '../constants/action_types.js';

function comments(state = [], action) {
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
        		Object.keys(action.comments).forEach(function(post) {
        			newState.comments[post] = [];
        			newState.comments[post] = Object.keys(action.comments[post]).map(k => action.comments[post][k]);
        		})
      		}
      		console.log('Comments fetched', newState);
      		return newState;
      	case ActionTypes.AddToCommentsRequested: {
			return Object.assign({}, state, {
				inProgress: true,
				error: '',
				success: ''
			});
	    }
	    case ActionTypes.AddToCommentsRejected: {
			return Object.assign({}, state, {
				inProgress: false,
				error: 'Error in adding new comment.',
			});
	    }
	    case ActionTypes.AddToCommentsFulfilled: {
			const newState = Object.assign({}, state, {
				inProgress: false,
				success: 'New comment added.'
				});
			return newState;
	    }
	    case ActionTypes.RemoveCommentRequested: {
			return Object.assign({}, state, {
				inProgress: true,
				error: '',
				success: ''
			});
	    }
	    case ActionTypes.RemoveCommentRejected: {
			return Object.assign({}, state, {
				inProgress: false,
				error: 'Error in removing comment.',
			});
	    }
	    case ActionTypes.RemoveCommentFulfilled: {
			return Object.assign({}, state, {
				inProgress: false,
				success: 'Comment removed.'
			});
	    }
    	default:
			return state;
	}  		
	return state;
}

export default comments;