import ActionTypes from '../constants/action_types.js';

function events(state = [], action) {
	switch (action.type) {
		case ActionTypes.GetUserInfoRequested: {
			return Object.assign({}, state, {
				inProgress: true,
				error: '',
				success: ''
			});
		}
		case ActionTypes.GetUserInfoRejected: {
			return Object.assign({}, state, {
				inProgress: false,
				error: 'Error in getting user info.',
			});
		}
		case ActionTypes.GetUserInfoFulfilled: {
			var newState = Object.assign({}, state, {
		        inProgress: false,
		        success: 'Got events.',
		        userInfo: {}
      		});
      		if (action.userInfo) {
        		newState.userInfo = action.userInfo;
      		}
      		console.log('User info fetched', newState);
      		return newState;
		}
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

export default events;