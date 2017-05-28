export function addComment(postId, author, comment, rating) {
	console.log("Dispatching ADD_COMMENT")
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment,
		rating
	}
}

export function removeComment(postId, i) {
	return {
		type: 'REMOVE_COMMENT',
		postId,
		i
	}
}

export function rate(index, rating) {
	return {
		type: "RATE",
		index,
		rating
	}
}

export function unrate(index, rating) {
	return {
		type: "UNRATE",
		index,
		rating
	}
}