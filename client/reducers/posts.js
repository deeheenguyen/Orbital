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
		case ActionTypes.Rate:
			console.log(ActionTypes.Rate);
			var i = action.index;
			var rating = action.rating;
			var { num_comments } = state.posts[i];
			return Object.assign({}, state, {
				posts: [
				...state.posts.slice(0, i), // before updating
				{...state.posts[i], stars: (state.posts[i].stars * num_comments  + rating) / (num_comments + 1),
				 num_comments: num_comments + 1},
				...state.posts.slice(i + 1), // after updating
				]
			});
		case ActionTypes.Unrate:
			console.log(ActionTypes.Unrate);
			var rating = action.rating;
			var i = action.index;
			var { num_comments } = state[i];
			return [
				...state.slice(0, i), // before updating
				{...state[i], stars: ((state[i].stars * num_comments  - rating) / (num_comments - 1)) || 0,
				 num_comments: num_comments - 1},
				...state.slice(i + 1), // after updating
			]
		default:
			return state;
	}
}

export default posts;