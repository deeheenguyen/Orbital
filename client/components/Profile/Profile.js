import React from 'react';
import { Link, Router } from 'react-router';
import firebase, { auth, database } from '../../actions/database.js';
const _ = require('lodash');

var navbarBrandStyle = {
	marginRight: "-8px",
	marginTop: "-5px"
}

var userAvatarStyle = {
	marginRight: "8px",
	marginTop: "-5px"
}

var mediaObjectStyle = {
	marginRight: "8px",
	marginTop: "-5px"
}

function getElapsedTime(timeStamp) {
	// Set the unit values in milliseconds.  
	var msecPerMinute = 1000 * 60;  
	var msecPerHour = msecPerMinute * 60;  
	var msecPerDay = msecPerHour * 24;  

	// Set a date and get the milliseconds  
	var date = new Date(timeStamp);  
	var dateMsec = date.getTime();  

	// Get the difference in milliseconds.  
	var interval = Date.now() - dateMsec;  

	// Calculate how many days the interval contains. Subtract that  
	// many days from the interval to determine the remainder.  
	var days = Math.floor(interval / msecPerDay );  
	interval = interval - (days * msecPerDay );  

	// Calculate the hours, minutes, and seconds.  
	var hours = Math.floor(interval / msecPerHour );  
	interval = interval - (hours * msecPerHour );  

	var minutes = Math.floor(interval / msecPerMinute );  
	interval = interval - (minutes * msecPerMinute );  

	if (minutes < 1) {
		return "Just now."
	} else {
		// Display the result.  
		return days + " days, " + hours + " hours, " + minutes + " minutes.";
	}
}

class Profile extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			user: null,
			edit: false,
			userInfo: null,
			userFeed: null,
			displayName: "",
			posts: {}
		}
		this.handleEdit = this.handleEdit.bind(this);
		this.handleDiscard = this.handleDiscard.bind(this);
		this.handleSave = this.handleSave.bind(this);
		this.renderNews = this.renderNews.bind(this);
	}
	componentDidMount() {
		auth.onAuthStateChanged((user) => {
	        if (user) {
				this.setState({ user, displayName: user.displayName });
				database.ref('/users/' + user.uid).on('value', (snap) => {
					const updatedProfile = snap.val();
					this.setState({
						userInfo: {
							course: updatedProfile.course,
							intro: updatedProfile.intro
						}
					})
				});
				database.ref('/feeds/' + user.uid).on('value', (snap) => {
					const updatedFeed = snap.val();
					this.setState({
						userFeed: updatedFeed
					})
				});
				database.ref('/posts').on('value', (snap) => {
					const updatedPosts = snap.val();
					this.setState({
						posts: updatedPosts
					})
				});
	        }
	    });
	}
	handleEdit(event) {
		event.preventDefault();
		this.setState({ edit: true })
	}
	handleDiscard(event) {
		event.preventDefault();
		this.setState({ edit: false })
	}
	handleSave(event) {
		event.preventDefault();
		const intro = this.refs.intro.value;
		const course = this.refs.course.value;
		const displayName = this.refs.username.value;
		if (this.state.user !== null) {
			this.props.updateUser(this.state.user.uid, course, intro);
			this.state.user.updateProfile({
	          displayName
	        }).then(() => {
	        	this.setState({ displayName })
	        	this.props.addFlashMessage({
		            type: 'success',
		            text: 'You have updated your profile sucessfully.'
		          });
	        }, (error) => {
	        	this.props.addFlashMessage({
		            type: 'error',
		            text: 'Something went wrong while updating your account username'
		        });
	        })
			this.setState({ edit: false })
	    }
	}
	renderNews(news, i) {
		if (this.state.posts !== null) {
			console.log("posts", this.state.posts)
			const { timeStamp } = news;
			const timeElapsed = getElapsedTime(timeStamp);
			switch (news.type) {
				case "comment": {
					const { comment, postId, rating } = news.obj;
					console.log("postId", postId);
					console.log("post", this.state.posts[postId]);
					const caption = this.state.posts[postId].caption;
					return (
						<div className="panel panel-default" key={i}>
			                <div className="panel-body">
			                    <div className="pull-left">
			                        <a href="#">
			                            <img className="media-object img-circle" src="https://lut.im/7JCpw12uUT/mY0Mb78SvSIcjvkf.png" width="50px" height="50px" style={mediaObjectStyle}/>
			                        </a>
			                    </div>
			                    <h4><a href="#" className="header-bio"><strong>{this.state.displayName}</strong></a> reviewed <Link className="header-bio" to={"/view/" + postId}>{ caption }</Link> <small><small><a href="#" style={{textDecoration:"none", color:"grey"}}><i><i className="fa fa-clock-o" aria-hidden="true"></i> {timeElapsed}</i></a></small></small></h4>
			                    <hr/>
			                    <div className="post-content">
			                        <div className="panel panel-default">
			                            <div className="panel-body">
			                                <div className="post-content">	
			                                    <strong className="header-bio">★ </strong>
			                                    {rating.toFixed(1)}	
			                                    <p>{comment}</p>
			                            	</div>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			            </div>
					)
				}
				case "addEvent": {
					const { category, description, location_code, name, time } = news.obj;
					const caption = this.state.posts[location_code].caption;
					const displayTime = new Date(time);
					return (
						<div className="panel panel-default" key={i}>
			                <div className="panel-body">
			                    <div className="pull-left">
			                        <a href="#">
			                            <img className="media-object img-circle" src="https://lut.im/7JCpw12uUT/mY0Mb78SvSIcjvkf.png" width="50px" height="50px" style={mediaObjectStyle}/>
			                        </a>
			                    </div>
			                    <h4><a href="#" className="header-bio"><strong>{this.state.displayName}</strong></a> added new event at <Link className="header-bio" to={"/view/" + location_code}>{ caption }</Link> <small><small><a href="#" style={{textDecoration:"none", color:"grey"}}><i><i className="fa fa-clock-o" aria-hidden="true"></i> {timeElapsed}</i></a></small></small></h4>
			                    <hr/>
			                    <div className="post-content">
			                        <div className="panel panel-default">
			                            <div className="panel-body">
			                                <div className="post-content">
			                                    <p><strong>Name: </strong>{name}</p>
			                                    <p><strong>Category: </strong>{category}</p>		
			                                    <p><strong>Time: </strong>{displayTime.toString()}</p>
			                                    <p><strong>Description: </strong>{description}</p>
			                            	</div>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			            </div>
					)
				}
				default:
					return (
						<div></div>
					);
			}
		}
		return (
			<div></div>
		);
	}
	render() {
		var displayName = "";
		var intro = "";
		var email = "";
		var course = "";
		var userFeed = {};
		console.log("User feed", this.state.userFeed);
		console.log("Posts", this.state.posts);
		if (this.state.user !== null && this.state.userInfo !== null) {
			displayName = this.state.displayName;
			intro = this.state.userInfo.intro;
			email = this.state.user.email;
			course = this.state.userInfo.course;
		} else if (this.state.user !==  null) {
			email = this.state.user.email;
			displayName = this.state.user.displayName;
		}
		if (this.state.userFeed !== null) {
			userFeed = this.state.userFeed;
		} 
		return (
			<div>
				<h1>
		            <Link to="/">NUSWhere</Link>
		        </h1>
				<div className="mainbody container-fluid">
				    <div className="row">
				        <div style={{paddingTop:"50px"}}> </div>
				        <div className="col-lg-3 col-md-3 hidden-sm hidden-xs">
				            <div className="panel panel-default">
				                <div className="panel-body">
				                    <div className="media">
				                        <div align="center">
				                            <img className="thumbnail img-responsive" src="https://lut.im/7JCpw12uUT/mY0Mb78SvSIcjvkf.png" width="300px" height="300px" />
				                        </div>
				                        <div className="media-body">
				                        	<hr/>
				                        	<h3 className="header-bio"><strong>Username</strong></h3>
				                        	{ this.state.edit?
				                        		<input ref="username" type="username-bio" maxLength="30" defaultValue={displayName} />
				                        	:
				                        		<p>{displayName}</p>
				                        	}
				                            <hr/>
				                            <h3 className="header-bio"><strong>Introduction</strong></h3>
				                            { this.state.edit?
				                            	<textarea ref="intro" type="text-area-bio" maxLength="120" defaultValue={intro}/>
				                            :
				                            	<p>{intro}</p>
				                            }
				                            <hr/>
				                            <h3 className="header-bio"><strong>Course</strong></h3>
				                            { this.state.edit?
				                            	<input ref="course" type="course-bio" maxLength="30" defaultValue={course}/>
				                            :
				                            	<p>{course}</p>	
				                            }
				                            <hr/>
				                            <h3 className="header-bio"><strong>Email</strong></h3>
				                            <p>{email}</p>
				                            <hr/>
				                            { this.state.edit?
				                            	<div>
					                        		<button type="submit" className="button" onClick={this.handleSave}>Save</button>
					                        		<button type="submit" className="button" onClick={this.handleDiscard}>Discard</button>
					                        	</div>
				                        	:
												<button type="submit" className="button" onClick={this.handleEdit}>Edit</button>
					                        }
				                        </div>
				                    </div>
				                </div>
				            </div>
				        </div>
				        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
				        	{(_.sortBy(Object.values(userFeed), 'timeStamp')).reverse().map(this.renderNews)}
				        </div>
				    </div>
				</div>
			</div>
		)
	}
}

export default Profile;