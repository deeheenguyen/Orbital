import ActionTypes from '../constants/action_types.js';

function postComments(state = [], action) {
	switch (action.type) {
		case ActionTypes.AddComment:
			console.log(ActionTypes.AddComment);
			console.log('State of comments', state);
			const newState = [...state, {
				user: action.author,
				text: action.comment,
				stars: action.rating,
			}];
			console.log('newState', newState);
			return newState;
		case ActionTypes.RemoveComment:
			console.log(ActionTypes.RemoveComment);
			console.log(state);
			return [
				...state.slice(0, action.i),
				...state.slice(action.i + 1)
			]
		default:
			return state;
	}
	return state;
}

function comments(state = [], action) {
	/*
	if (typeof action.postId !== 'undefined') {
		console.log('State of comments', state);
		return {
			...state,
			[action.postId]: postComments(state.comments[action.postId], action)
		}
	}
	*/
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
      			console.log('keys', Object.keys(action.comments));
        		Object.keys(action.comments).forEach(function(post) {
        			console.log("reached single", action.comments[post]);
        			newState.comments[post] = [];
        			newState.comments[post] = Object.keys(action.comments[post]).map(k => action.comments[post][k]);
        			console.log("single post", newState.comments[post])
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
	        error: 'Error in adding guest.',
	      });
	    }
	    case ActionTypes.AddToCommentsFulfilled: {
	      const newState = Object.assign({}, state, {
	        inProgress: false,
	        success: 'Added guest.'
	      });
	      return newState;
	    }
	    case ActionTypes.CommentAdded: {
	      console.log('----> Reach comment added');
	      const newState = Object.assign({}, state);
	      const { postId, comment } = action;
	      console.log('Comments', comment); 
	      newState.comments[postId] = Object.values(comment);
	      console.log('New state', newState);
	      return newState;
	    }
    	default:
			return state;
	}  		
	return state;
}

export default comments;