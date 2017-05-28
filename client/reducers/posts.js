export function posts(state = [], action) {
	switch (action.type) {
		case "RATE":
			console.log("RATE!")
			var i = action.index;
			var rating = action.rating;
			var { num_comments } = state[i];
			return [
				...state.slice(0, i), // before updating
				{...state[i], stars: (state[i].stars * num_comments  + rating) / (num_comments + 1),
				 num_comments: num_comments + 1},
				...state.slice(i + 1), // after updating
			]
		case "UNRATE":
			console.log("UNRATE!");
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