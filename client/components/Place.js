import React from 'react';
import Photo from './Photo.js';
import Comments from './Comments.js';

class Place extends React.Component {
	render() {
		console.log('Props from place', this.props);
		const { postId } = this.props.params;
		const i = this.props.posts.findIndex((post) => 
			post.code === postId);
		const post = this.props.posts[i];
		const postComments = this.props.comments[postId] || [];

		return (
			<div className="single-photo">
				<Photo i={i} post={post} {...this.props} />
				<div>
					<Comments postComments={postComments} i={i} {...this.props}/>
				</div>
			</div>
			);
	}
}

export default Place;