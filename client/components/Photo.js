import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class Photo extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { post, i, comments } = this.props;
		return (
			<figure className="grid-figure">
				<div className="grid-photo-wrap">
					<Link to={`/view/${post.code}`}>
						<img src={post.display_src} alt={post.caption}
							className="grid-photo" />
					</Link>
				</div>

				<figcaption>
					<p>{post.caption}</p>
					<div className="control-buttons">
					 	<a className="button" href={post.location_link}>
					 		<span className="material-icons">
					 			&#xe52e;
					 		</span>
					 	</a>
					    <Link className="button" to={`/view/${post.code}`}>
					    	<span className="fa fa-star" style={{marginRight: '2em'}}>
					    		{" " + post.stars.toFixed(1)}
					    	</span>
					 		<span className="comment-count">
					 			<span className="speech-bubble"></span>
					 			{" " + post.num_comments}
					 		</span>
					 	</Link>
					</div>
				</figcaption>

			</figure>
		)
	}
}

export default Photo;
