export function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index
	}
}

export function addComment(postId, author, comment) {
	console.log("Dispatching ADD_COMMENT")
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment
	}
}

export function removeComment(postId, i) {
	return {
		type: 'REMOVE_COMMENT',
		postId,
		i
	}
}