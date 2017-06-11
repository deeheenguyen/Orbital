import React from 'react';
import Photo from './Photo.js'

class PhotoGrid extends React.Component {
  // this constructor allows us to create the intitial state and take the props from supper
	constructor (props) {
			super(props);
				console.log("before" + this.props.posts);
			this.state=	{
   			keyWords : this.props.location.query.searchKey,
				listObject: this.props.posts,
				myPost: this.filterPhoto(this.props.location.query.searchKey, this.props.posts),
			}
			console.log("after:  where is my list");
	}

	// This part is for the basic search algorithm
	// What is the key that allows us to give the better details
	// what to make it will return the better results for us
	// each post has the caption, futher each lecture will have it owns code,
	// the basic search algorithm will need the whole caption, or abbreviation
	// futher details will need later
	// first of all:
	// search by key words,
	search(photo, key){
				// this function will use the search algo to filter the basic search with the abbreviation
				// and the search by caption in the list of post
				// furthermore our seach function will need simple AI to recognize which
				// caption will send back the better results for us to display the results
				// which one will have the better ranking, so on and so forth
				var myCaption = photo.caption;
				if (myCaption === key) {
					return true;
				} else {
					console.log(myCaption +  "match" + key + " is wrong");
					return false;
				}
	}

  filterPhoto (string, list) {
			//list in this function is just a list of object, we need to retrieve the list of name first
			var temp = [];
			console.log("this is list: " + list);
			for (var i = 0; i < list.length; i++) {
				var myPhoto = list[i];
				if (this.search(myPhoto, string)) {
					temp.push(myPhoto);
				}
			}
			console.log("this is my length" + temp.length);
			return temp;
	}
	render() {
	  console.log("this is starting of the search algorithm");
		console.log("this is search key: " + this.state.keyWords);
	  console.log(this.props.posts);
		return (
			<div className="photo-grid">
					{this.state.myPost.map((post, i) => <Photo {...this.props}
					key={i} i={i} post={post} />)}
			</div>
			);
	}
}

export default PhotoGrid;
