import React from 'react';
import Photo from './Photo.js';
import Comments from './Comments.js';
import Ratings from './Ratings.js';

class Place extends React.Component {
	render() {
		const { postId } = this.props.params;
		const i = this.props.posts.findIndex((post) => 
			post.code === postId);
		const post = this.props.posts[i];
		const postComments = this.props.comments[postId] || [];

		return (
			<div className="single-photo">
				<Photo i={i} post={post} {...this.props} />
				<div>
					<Comments postComments={postComments} {...this.props}/>
					<Ratings />
				</div>
			</div>
			);
	}
}

export default Place;