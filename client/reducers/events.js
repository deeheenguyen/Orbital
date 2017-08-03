import ActionTypes from '../constants/action_types.js';

function events(state = [], action) {
	switch (action.type) {
		case ActionTypes.GetEventsRequested:
			console.log(ActionTypes.GetEventsRequested)
			return Object.assign({}, state, {
		        inProgress: true,
		        error: '',
		        success: ''
      		});
      	case ActionTypes.GetEventsRejected:
	        return Object.assign({}, state, {
	        	inProgress: false,
	        	error: 'Error in getting events.',
	      	});
	    case ActionTypes.GetEventsFulfilled:
	    	var newState = Object.assign({}, state, {
		        inProgress: false,
		        success: 'Got events.',
		        events: {}
      		});
      		if (action.events) {
        		Object.keys(action.events).forEach(function(post) {
        			newState.events[post] = [];
        			newState.events[post] = Object.keys(action.events[post]).map(k => action.events[post][k]);
        		})
      		}
      		console.log('Events fetched', newState);
      		return newState;
		case ActionTypes.AddToEventsRequested: {
			return Object.assign({}, state, {
				inProgress: true,
				error: '',
				success: ''
			});
	    }
	    case ActionTypes.AddToEventsRejected: {
			return Object.assign({}, state, {
				inProgress: false,
				error: 'Error in adding new event.',
			});
	    }
	    case ActionTypes.AddToEventsFulfilled: {
			const newState = Object.assign({}, state, {
				inProgress: false,
				success: 'New event added.'
				});
			return newState;
	    }
	    default:
			return state;
	}
	return state;
}

export default events;