import React from 'react';
import Photo from './Photo.js'

/// this part is for the basic search algorithm

function filter (string, list) {
		//list in this function is just a list of object, we need to retrieve the list of name first
		
}






class PhotoGrid extends React.Component {
		constructor (props) {
			super(props);
			this.state=	{
   			keyWords : this.props.location.query.searchKey,
				listObject: this.props.posts,
			}
		}

	render() {
	  console.log(this.props.posts);
		return (
			<div className="photo-grid">
					{this.props.posts.map((post, i) => <Photo {...this.props}
					key={i} i={i} post={post} />)}
			</div>
			);
	}
}

export default PhotoGrid;
