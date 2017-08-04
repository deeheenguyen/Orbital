import { Link, Router } from 'react-router';
import React from 'react';
import Photo from './Photo.js'
/*
This photoGrid is the search algorithm for NUSWhere
*/
class PhotoGrid extends React.Component {
	// this constructor allows us to create the intitial state and take the props from supper
	constructor (props) {
		super(props);
		console.log("before" + this.props.posts);
		this.state=	{
			keyWords : this.props.location.query.searchKey,
			listObject: this.props.posts,
			myPost:this.filterPhoto(this.props.location.query.searchKey, this.props.posts),
			numResult: 0,
		}
		console.log("after:  where is my list");
	}
	shouldComponentUpdate(){
		this.setState({myPost:this.filterPhoto(this.props.location.query.searchKey, this.props.posts)});
		return true;
	}
	/*
	This part is for the basic search algorithm
	What is the key that allows us to give the better details
	what to make it will return the better results for us
	each post has the caption, futher each lecture will have it owns code,
	the basic search algorithm will need the whole caption, or abbreviation
	futher details will need later
	first of all:
	search by key words,
	*/
	/*
	search(photo, key){

		This function will use the search algo to filter the basic search with the abbreviation
		and the search by caption in the list of post
		which one will have the better ranking, so on and so forth

		var myCaption = photo.caption;
		if (myCaption === key) {
			return true;
		} else {
			console.log(myCaption +  "match" + key + " is wrong");
			return false;
		}
	}
  */

	abbreviationScore(s1, s2){
		/*
		s1: is the name of the object
		s2: is the search key
		we check if the result is the abbreviation of the search key
		and return the score of abbreviation
		*/
		var lowerS1 = s1. toLowerCase();
		var lowerS2 = s2.toLowerCase();
		var arrS2 = lowerS2.split(" ");
		var firstCharString = "";
		for (var i = 0; i < arrS2.length; i++) {
			var myChar = arrS2[i].charAt(0);
			firstCharString = firstCharString + myChar;
		}
		function helper() {
			var d = 0;
			var check = false;
			for (var i = 0; i < firstCharString.length; i++){
				if ( d  >= lowerS1.length && check === true) {
					return d;
				} else if ( d >= lowerS1.length && check === false) {
					return d;
				} else if (check === true) {
					 if (lowerS1.charAt(d) === firstCharString.charAt(i)) {
						 d = d + 1;
					 } else {
						 return d;
					 }
				} else {
					if (lowerS1.charAt(d) === firstCharString.charAt(i)) {
						d = d +1;
						check = true;
					}
				}
			}
			return d;
		}
		return helper();
	}

	subScore(s1, s2){
		/*
		s1, s2 is continous string without space
		will return the length of of s1 if s1 is a substring of s2
		else return 0
		*/
		var check = false;
		var d = 0;
		for (var i = 0; i < s2.length; i ++) {
			if (d >= s1.length) {
				return s1.length;
			} else {
				if (check === true) {
					if (s1.charAt(d) === s2.charAt(i)) {
						d = d + 1;
					} else {
					  return 0;
					}
				} else {
					if (s1.charAt(d) === s2.charAt(i)){
						d = d + 1;
						check =  true;
					}
				}
			}
		}
		if (check === true) {
			return s1.length;
		} else {
			return 0;
		}
	}


	rankingScore(s1, s2){
		/*
		s2 is the caption of list
		s1 is the search Key
		this function is to check if the string s1 is consequence of string s2
		and return a score to ranking
		*/
		var lowerS1 = s1. toLowerCase();
		var arrS1 = lowerS1.split(" ");
		var score = 0;
		/*
		this score variable is to count the score of relevant between s1 and s2
		*/
		for (var i = 0; i < arrS1.length; i++) {
					var myString = arrS1[i];
				//	console.log(myString +  " " + this.abbreviationScore(myString, s2) + " " +this.subScore(myString, s2))
					score = score + this.abbreviationScore(myString, s2);
					score = score + this.subScore(myString, s2);
		}
		console.log(s1 + " " + score);

		return score;
	}


	filterPhoto (string, list) {
		/*
		list in this function is just a list of object, we need to retrieve the list of name first
		consider to search by keywords
		*/
		if (string === ""){
			return list;
		}
		var temp = [];
		var scoreList = [];
		console.log("this is list: " + list);
		for (var i = 0; i < list.length; i++) {
			var myPhotoCaption = list[i].caption;
			var myScore = this.rankingScore(myPhotoCaption, string);
			scoreList[i] = [myScore, i];
		}
		console.log("this is my length" + temp.length);
		console.log(JSON.stringify(scoreList));
		// Because the temp will display our results, what we should do is about
		// arrange the list with proper ranking to display
		for(var i = 0; i < scoreList.length; i++){
			for (var j = 1; j <scoreList.length - i; j++) {
				if (scoreList[j-1][0] < scoreList[j][0]) {
					var temporary = scoreList[j -1][0];
					scoreList[j-1][0] = scoreList[j][0];
					scoreList[j][0] = temporary;
					var temporary2 = scoreList[j-1][1];
					scoreList[j-1][1] =scoreList[j][1];
					scoreList[j][1] = temporary2;

				}
			}
		}
		var count = 0;
		// this count variable is to count the number of results
		for (var i = 0; i < scoreList.length; i++) {
			if (scoreList[i][0] > 0) {
				count++;
				temp.push(list[scoreList[i][1]]);
			}
		}
		console.log("attention sssssssssssssssssssssssss");
		console.log(JSON.stringify(scoreList));
		//this.state.numResult = count;
		//this.setState(this.state);
		/// return the length of results
		console.log("after this will display the temp");
		console.log(JSON.stringify(temp));
		return temp;
	}
	render() {
		console.log("this is starting of the search algorithm");
		console.log("this is search key: " + this.state.keyWords);
		console.log(this.props.posts);
		var myPost = this.filterPhoto(this.props.location.query.searchKey, this.props.posts);
		if (this.state.myPost.length === 0) {
			return (
				<div>
					<h1>
						<Link to="/">NUSWhere</Link>
					</h1>
				 <p> There is no results</p>
				</div>
			);
		} else {
			return (
				<div>
					<h1>
						<Link to="/">NUSWhere</Link>
					</h1>
					<div className="photo-grid">
					{this.state.myPost.map((post, i) => <Photo {...this.props}
					key={i} i={i} post={post} />)}
					</div>
				</div>
			);
		}
	}
}

export default PhotoGrid;
