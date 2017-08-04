import React from 'react';
import {database} from '../../actions/database.js';


class Gallery extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      postId: this.props.location.query.postID,
      myPost: [],
    };
  }
  componentDidMount(){
    var postId = this.props.location.query.postID;
    database.ref('posts/' + postId).on('value', (snap) => {
			const currentPosts = snap.val()
			// get array comments' contents to easily render comment
			console.log("this is in componentDidMount in the gallery" + JSON.stringify(currentPosts));
			if (currentPosts!== null) {
				var postContents = Object.values(currentPosts)
			} else {
				var postContents = []
			}
			this.setState({
				myPost: postContents,
			})
  		});
	}
  render() {
    return (
        <div className='photo-grid'>
            <p>something here in the componentDidMount</p>
        </div>
    );
  }
}

export default Gallery;
