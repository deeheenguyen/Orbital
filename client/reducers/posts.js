export function posts(state = [], action) {
	switch(action.type) {
		case 'INCREMENT_LIKES':
			console.log('INCREMENTING_LIKES');
			const i = action.index;
			return [
				...state.slice(0, i), // before updating
				{...state[i], likes: state[i].likes + 1},
				...state.slice(i + 1), // after updating
			]
		default:
			return state;
	}
}

export default posts;