import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import firebase, { auth, database } from '../actions/database.js';

var photoCaptionStyle = {
	color: "#FB5660",
	textAlign: "center"
};


class Photo extends React.Component {
	constructor(props) {
		super(props);
		this.handleUpload = this.handleUpload.bind(this);
		this.viewGallery = this.viewGallery.bind(this);
		const { post, i, comments } = this.props;
		const postComments = comments[post.code];
		if (postComments !== undefined) {
			var num_comments = Object.keys(postComments).length;
			var stars = 0
			Object.values(postComments).forEach(function(comment) {
				stars += comment.stars;
			});
			stars = stars / num_comments;
			stars = stars.toFixed(1)
		} else {
			var num_comments = 0;
			var stars = " ";
		}
		this.state = {
			num_comments,
			stars
		}
	}
	componentDidMount() {
		const { post, i, comments } = this.props;
		const postId = post.code;
		database.ref('/comments/' + postId).on('value', (snap) => {
			const currentComments = snap.val()
			// get array comments' contents to easily render comment
			console.log(currentComments)
			if (currentComments !== null) {
				var num_comments = Object.keys(currentComments).length;
				var stars = 0
				Object.values(currentComments).forEach(function(comment) {
					stars += comment.stars;
				});
				stars = stars / num_comments;
				stars = stars.toFixed(1)
			} else {
				var num_comments = 0;
				var stars = " ";
			}
			this.setState({
				num_comments,
				stars
			})
  		});
	}

	handleUpload(event) {
		event.preventDefault();
		const { post} = this.props;
		this.context.router.push(
			{
				pathname: '/uploadPhoto',
				query: {postID: post.code},
			}
		);
	}

	viewGallery(event) {
		event.preventDefault();
	}
	static get contextTypes() {
		return {
			router: React.PropTypes.object.isRequired,
		};
	}
	render() {
		const { post, i, comments } = this.props;
		const postComments = comments[post.code];
		return (
			<figure className="grid-figure">
				<div className="grid-photo-wrap">
					<Link to={`/view/${post.code}`}>
						<img src={post.display_src} alt={post.caption}
							className="grid-photo" />
					</Link>
				</div>
				<figcaption>
					<p style={photoCaptionStyle} className='photo-caption'>{post.caption}</p>
					<div className="control-buttons">
					 	<a className="button" href={post.location_link}>
					 		<span className="material-icons">
					 			&#xe52e;
					 		</span>
					 	</a>
					 	<Link className="button" to={`/view/${post.code}`}>
							<span className="fa fa-star" style={{marginRight: '2em'}}>
								{" " + this.state.stars}
							</span>
							<span className="comment-count">
								<span className="speech-bubble"></span>
								{" " + this.state.num_comments}
							</span>
						</Link>
						<button className="button" onClick = {this.handleUpload}> Upload Some Photo</button>
						<button className="button" onClick = {this.viewGallery}> View Gallery</button>
					</div>
				</figcaption>
			</figure>
		)
	}
}

export default Photo;
