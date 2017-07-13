import ActionTypes from '../constants/action_types.js';

export function posts(state = [], action) {
	switch (action.type) {
		case ActionTypes.GetPostsRequested:
			console.log(ActionTypes.GetPostsRequested);
			return Object.assign({}, state, {
		        inProgress: true,
		        error: '',
		        success: ''
      		});
      	case ActionTypes.GetPostsRejected:
      		console.log(ActionTypes.GetPostsRejected);
	        return Object.assign({}, state, {
	        	inProgress: false,
	        	error: 'Error in getting posts.',
	      	});
	    case ActionTypes.GetPostsFulfilled:
	    	console.log(ActionTypes.GetPostsFulfilled);
	    	const newState = Object.assign({}, state, {
		        inProgress: false,
		        success: 'Got posts.'
      		});
      		console.log('raw posts', action.posts);
      		newState.posts = [];
      		if (action.posts) {
        		newState.posts = Object.keys(action.posts).map(k => action.posts[k]);
      		}
      		console.log("Posts fetched", newState);
      		return newState;
		default:
			return state;
	}
}

export default posts;