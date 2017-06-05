import React from 'react';
import Photo from './Photo.js'

class PhotoGrid extends React.Component {
	render() {
		console.log('Props from PhotoGrid', this.props);
		return (
			<div className="photo-grid">
				{this.props.posts.map((post, i) => <Photo {...this.props} 
					key={i} i={i} post={post} />)}
			</div>
			);
	}
}

export default PhotoGrid;