import ActionTypes from '../constants/action_types.js';

function users(state = [], action) {
	switch (action.type) {
		case ActionTypes.UpdateUserRequested: {
			return Object.assign({}, state, {
				inProgress: true,
				error: '',
				success: ''
			});
	    }
	    case ActionTypes.UpdateUserRejected: {
			return Object.assign({}, state, {
				inProgress: false,
				error: 'Error in updating user.',
			});
	    }
	    case ActionTypes.UpdateUserFulfilled: {
			const newState = Object.assign({}, state, {
				inProgress: false,
				success: 'User update successfully'
				});
			return newState;
	    }
	    default:
			return state;
	}
	return state;
}

export default users;