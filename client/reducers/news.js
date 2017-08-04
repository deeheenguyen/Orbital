import ActionTypes from '../constants/action_types.js';

function news(state = [], action) {
	switch (action.type) {
      	case ActionTypes.AddToNewsFeedRequested: {
			return Object.assign({}, state, {
				inProgress: true,
				error: '',
				success: ''
			});
	    }
	    case ActionTypes.AddToNewsFeedRejected: {
			return Object.assign({}, state, {
				inProgress: false,
				error: 'Error in adding new news.',
			});
	    }
	    case ActionTypes.AddToNewsFeedFulfilled: {
			const newState = Object.assign({}, state, {
				inProgress: false,
				success: 'New news added.'
				});
			return newState;
	    }
    	default:
			return state;
	}
	return state;
}

export default news;
