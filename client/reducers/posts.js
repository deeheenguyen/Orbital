export function posts(state = [], action) {
	switch (action.type) {
		case "RATE":
			console.log("RATE!")
			const i = action.index;
			const rating = action.rating;
			const { num_comments } = state[i];
			return [
				...state.slice(0, i), // before updating
				{...state[i], stars: (state[i].stars * num_comments  + rating) / (num_comments + 1),
				 num_comments: num_comments + 1},
				...state.slice(i + 1), // after updating
			]
		default:
			return state;
	}
}

export default posts;