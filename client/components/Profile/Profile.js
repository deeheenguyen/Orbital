import React from 'react';
import { Link, Router } from 'react-router';
import firebase, { auth, database } from '../../actions/database.js';

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
			                    <h4><a href="#" style={{textDecoration:"none"}}><strong>{this.state.displayName}</strong></a> reviewed { caption } <small><small><a href="#" style={{textDecoration:"none", color:"grey"}}><i><i className="fa fa-clock-o" aria-hidden="true"></i> 42 minutes ago</i></a></small></small></h4>
			                    <hr/>
			                    <div className="post-content">
			                        <div className="panel panel-default">
			                            <div className="panel-body">
			                                <div className="post-content">
			                                    <strong>★</strong>
												{rating}		
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
					return (
						<div className="panel panel-default" key={i}>
			                <div className="panel-body">
			                    <div className="pull-left">
			                        <a href="#">
			                            <img className="media-object img-circle" src="https://lut.im/7JCpw12uUT/mY0Mb78SvSIcjvkf.png" width="50px" height="50px" style={mediaObjectStyle}/>
			                        </a>
			                    </div>
			                    <h4><a href="#" style={{textDecoration:"none"}}><strong>{this.state.displayName}</strong></a> added new event at { caption } <small><small><a href="#" style={{textDecoration:"none", color:"grey"}}><i><i className="fa fa-clock-o" aria-hidden="true"></i> 42 minutes ago</i></a></small></small></h4>
			                    <hr/>
			                    <div className="post-content">
			                        <div className="panel panel-default">
			                            <div className="panel-body">
			                                <div className="post-content">
			                                    <p>{name}</p>
			                                    <p>{category}</p>		
			                                    <p>{time}</p>
			                                    <p>{description}</p>
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
				        	{Object.values(userFeed).map(this.renderNews)}
				            <div className="panel panel-default">
				                <div className="panel-body">
				                    <div className="pull-left">
				                        <a href="#">
				                            <img className="media-object img-circle" src="https://lut.im/7JCpw12uUT/mY0Mb78SvSIcjvkf.png" width="50px" height="50px" style={mediaObjectStyle}/>
				                        </a>
				                    </div>
				                    <h4><a href="#" style={{textDecoration:"none"}}><strong>{displayName}</strong></a> – <small><small><a href="#" style={{textDecoration:"none"}}><i><i className="fa fa-clock-o" aria-hidden="true"></i> 42 minutes ago</i></a></small></small></h4>
				                    <span>
				                        <div className="navbar-right">
				                            <div className="dropdown">
				                                <button className="btn btn-link btn-xs dropdown-toggle" type="button" id="dd1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
				                                    <i className="fa fa-cog" aria-hidden="true"></i>
				                                    <span className="caret"></span>
				                                </button>
				                                <ul className="dropdown-menu" aria-labelledby="dd1" style={{float: "right"}}>
				                                    <li><a href="#"><i className="fa fa-fw fa-exclamation-triangle" aria-hidden="true"></i> Report</a></li>
				                                    <li><a href="#"><i className="fa fa-fw fa-ban" aria-hidden="true"></i> Ignore</a></li>
				                                    <li><a href="#"><i className="fa fa-fw fa-bell" aria-hidden="true"></i> Enable notifications for this post</a></li>
				                                    <li><a href="#"><i className="fa fa-fw fa-eye-slash" aria-hidden="true"></i> Hide</a></li>
				                                    <li role="separator" className="divider"></li>
				                                    <li><a href="#"><i className="fa fa-fw fa-trash" aria-hidden="true"></i> Delete</a></li>
				                                </ul>
				                            </div>
				                        </div>
				                    </span>
				                    <hr/>
				                    <div className="post-content">
				                        <p>Simple post content example.</p>
				                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel gravida metus, non ultrices sapien. Morbi odio metus, dapibus non nibh id amet.</p>
				                    </div>
				                </div>
				            </div>
				            <div className="panel panel-default">
				                <div className="panel-body">
				                    <div className="pull-left">
				                        <a href="#">
				                            <img className="media-object img-circle" src="https://lut.im/7JCpw12uUT/mY0Mb78SvSIcjvkf.png" width="50px" height="50px" style={mediaObjectStyle}/>
				                        </a>
				                    </div>
				                    <h4><a href="#" style={{textDecoration:"none"}}><strong>{displayName}</strong></a> – <small><small><a href="#" style={{textDecoration:"none", color:"grey"}}><i><i className="fa fa-clock-o" aria-hidden="true"></i> 42 minutes ago</i></a></small></small></h4>
				                    <hr/>
				                    <div className="post-content">
				                        <div className="panel panel-default">
				                            <div className="panel-body">
				                                <div className="post-content">
				                                    <strong>★</strong>
													5		
				                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel gravida metus, non ultrices sapien. Morbi odio metus, dapibus non nibh id amet.</p>
				                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel gravida metus, non ultrices sapien. Morbi odio metus, dapibus non nibh id amet.</p>
				                                </div>
				                            </div>
				                        </div>
				                    </div>
				                </div>
				            </div>
				            <div className="panel panel-default">
				                <div className="panel-body">
				                    <div className="pull-left">
				                        <a href="#">
				                            <img className="media-object img-circle" src="https://lut.im/7JCpw12uUT/mY0Mb78SvSIcjvkf.png" width="50px" height="50px" style={mediaObjectStyle}/>
				                        </a>
				                    </div>
				                    <h4><a href="#" style={{textDecoration:"none"}}><strong>{displayName}</strong></a> – <small><small><a href="#" style={{textDecoration:"none", color:"grey"}}><i><i className="fa fa-clock-o" aria-hidden="true"></i> 42 minutes ago</i></a></small></small></h4>
				                    <span>
				                        <div className="navbar-right">
				                            <div className="dropdown">
				                                <button className="btn btn-link btn-xs dropdown-toggle" type="button" id="dd1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
				                                    <i className="fa fa-cog" aria-hidden="true"></i>
				                                    <span className="caret"></span>
				                                </button>
				                                <ul className="dropdown-menu" aria-labelledby="dd1" style={{float: "right"}}>
				                                    <li><a href="#"><i className="fa fa-fw fa-exclamation-triangle" aria-hidden="true"></i> Report</a></li>
				                                    <li><a href="#"><i className="fa fa-fw fa-ban" aria-hidden="true"></i> Ignore</a></li>
				                                    <li><a href="#"><i className="fa fa-fw fa-bell" aria-hidden="true"></i> Enable notifications for this post</a></li>
				                                    <li><a href="#"><i className="fa fa-fw fa-eye-slash" aria-hidden="true"></i> Hide</a></li>
				                                    <li role="separator" className="divider"></li>
				                                    <li><a href="#"><i className="fa fa-fw fa-trash" aria-hidden="true"></i> Delete</a></li>
				                                </ul>
				                            </div>
				                        </div>
				                    </span>
				                    <hr/>
				                    <div className="post-content">
				                        <p>Sample post content with picture.</p>
				                        <img className="img-responsive" src="https://media.giphy.com/media/j1QQj6To9Pbxu/giphy.gif"/>
				                        <p><br/><a href="/tags/christmas" className="tag">#Christmas</a> <a href="/tags/caturday" className="tag">#Caturday</a></p>
				                    </div>
				                    <hr/>
				                    <div>
				                        <div className="pull-left">
				                            <p className="text-muted" style={{marginLeft:"5px"}}><i className="fa fa-globe" aria-hidden="true"></i> Public <strong>via mobile</strong></p>
				                        </div>
				                        <br/>
				                    </div>
				                    <hr/>
				                    <div className="media">
				                        <div className="pull-left">
				                            <a href="#">
				                                <img className="media-object img-circle" src="https://lut.im/7JCpw12uUT/mY0Mb78SvSIcjvkf.png" width="35px" height="35px" style={{marginLeft:"3px", marginRight:"-5px"}}/>
				                            </a>
				                        </div>
				                        <div className="media-body">
				                            <textarea className="form-control" rows="1" placeholder="Comment"></textarea>
				                        </div>
				                    </div>
				                </div>
				            </div>
				            <div className="panel panel-default">
				                <div className="panel-body">
				                    <div className="pull-left">
				                        <a href="#">
				                            <img className="media-object img-circle" src="https://lut.im/7JCpw12uUT/mY0Mb78SvSIcjvkf.png" width="50px" height="50px" style={mediaObjectStyle}/>
				                        </a>
				                    </div>
				                    <h4><a href="#" style={{textDecoration:"none"}}><strong>{displayName}</strong></a> – <small><small><a href="#" style={{textDecoration:"none", color: "grey"}}><i><i className="fa fa-clock-o" aria-hidden="true"></i> 42 minutes ago</i></a></small></small></h4>
				                    <span>
				                        <div className="navbar-right">
				                            <div className="dropdown">
				                                <button className="btn btn-link btn-xs dropdown-toggle" type="button" id="dd1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
				                                    <i className="fa fa-cog" aria-hidden="true"></i>
				                                    <span className="caret"></span>
				                                </button>
				                                <ul className="dropdown-menu" aria-labelledby="dd1" style={{float: "right"}}>
				                                    <li><a href="#"><i className="fa fa-fw fa-exclamation-triangle" aria-hidden="true"></i> Report</a></li>
				                                    <li><a href="#"><i className="fa fa-fw fa-ban" aria-hidden="true"></i> Ignore</a></li>
				                                    <li><a href="#"><i className="fa fa-fw fa-bell" aria-hidden="true"></i> Enable notifications for this post</a></li>
				                                    <li><a href="#"><i className="fa fa-fw fa-eye-slash" aria-hidden="true"></i> Hide</a></li>
				                                    <li role="separator" className="divider"></li>
				                                    <li><a href="#"><i className="fa fa-fw fa-trash" aria-hidden="true"></i> Delete</a></li>
				                                </ul>
				                            </div>
				                        </div>
				                    </span>
				                    <hr/>
				                    <div className="post-content">
				                        <p>Sample post content with comments.</p>
				                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel gravida metus, non ultrices sapien. Morbi odio metus, dapibus non nibh id amet.</p>
				                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel gravida metus, non ultrices sapien. Morbi odio metus, dapibus non nibh id amet.</p>
				                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel gravida metus, non ultrices sapien. Morbi odio metus, dapibus non nibh id amet.</p>
				                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel gravida metus, non ultrices sapien. Morbi odio metus, dapibus non nibh id amet.</p>
				                    </div>
				                    <hr/>
				                    <div>
				                        <div className="pull-left">
				                            <p className="text-muted" style={{marginLeft:"5px"}}><i className="fa fa-user-secret" aria-hidden="true"></i> Limited</p>
				                        </div>
				                        <br/>
				                    </div>
				                    <hr/>
				                    <div>
				                        <a className="btn btn-default btn-xs"><i className="fa fa-bars" aria-hidden="true"></i> Show 12 more comments</a>
				                        <hr/>
				                        <div className="post-content">
				                            <div className="panel-default">
				                                <div className="panel-body">
				                                    <div className="pull-left">
				                                        <a href="#">
				                                            <img className="media-object img-circle" src="https://diaspote.org/uploads/images/thumb_large_283df6397c4db3fe0344.png" width="35px" height="35px" style={mediaObjectStyle}/>
				                                        </a>
				                                    </div>
				                                    <h4><a href="#" style={{textDecoration:"none"}}><strong>✪ SтeғOғғιcιel ✪ ツ</strong></a></h4>
				                                    <hr/>
				                                    <div className="post-content">
				                                        Comment example.<br/><br/>
				                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at arcu sapien. Donec laoreet, nisl quis tempor hendrerit, libero augue blandit turpis, in dignissim odio mauris eu tortor. Ut hendrerit ipsum elit, a elementum nulla ultrices eu. In posuere mollis efficitur. Maecenas justo turpis, tristique sit amet ultricies quis, molestie eget ex. Nam vestibulum consequat tincidunt. Morbi vitae placerat sapien. Phasellus quis mi tincidunt sem scelerisque tincidunt. Ut viverra porttitor sagittis. Phasellus aliquam auctor purus, id sollicitudin mauris pulvinar ac. Vivamus vel erat nec orci ultricies iaculis quis sit amet augue. Vestibulum aliquam felis lorem, interdum porttitor sapien sodales ac. Maecenas id ullamcorper risus. Suspendisse id dui sed urna rutrum pharetra. Nam eu lectus et orci vestibulum bibendum. Mauris et pulvinar dui, ac facilisis leo.
				                                        <br/><small><small><a href="#" style={{textDecoration:"none", color:"grey"}}><i><i className="fa fa-clock-o" aria-hidden="true"></i> 12 minutes ago</i></a></small></small>
				                                    </div>
				                                </div>
				                            </div>
				                        </div>
				                        <hr/>
				                        <div className="post-content">
				                            <div className="panel-default">
				                                <div className="panel-body">
				                                    <div className="pull-left">
				                                        <a href="#">
				                                            <img className="media-object img-circle" src="https://lut.im/yR07xwobAA/bZpvdTZmBBTZDJDd.png" width="35px" height="35px" style={mediaObjectStyle}/>
				                                        </a>
				                                    </div>
				                                    <h4><a href="#" style={{textDecoration:"none"}}><strong>Mi Chleen</strong></a></h4>
				                                    <hr/>
				                                    <div className="post-content">
				                                        Another comment.<br/><br/>
				                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at arcu sapien. Donec laoreet, nisl quis tempor hendrerit, libero augue blandit turpis, in dignissim odio mauris eu tortor. Ut hendrerit ipsum elit, a elementum nulla ultrices eu. In posuere mollis efficitur. Maecenas justo turpis, tristique sit amet ultricies quis, molestie eget ex. Nam vestibulum consequat tincidunt. Morbi vitae placerat sapien. Phasellus quis mi tincidunt sem scelerisque tincidunt. Ut viverra porttitor sagittis. Phasellus aliquam auctor purus, id sollicitudin mauris pulvinar ac. Vivamus vel erat nec orci ultricies iaculis quis sit amet augue. Vestibulum aliquam felis lorem, interdum porttitor sapien sodales ac. Maecenas id ullamcorper risus. Suspendisse id dui sed urna rutrum pharetra. Nam eu lectus et orci vestibulum bibendum. Mauris et pulvinar dui, ac facilisis leo.
				                                        <br/><small><small><a href="#" style={{textDecoration:"none", color:"grey"}}><i><i className="fa fa-clock-o" aria-hidden="true"></i> 9 minutes ago</i></a></small></small>
				                                    </div>
				                                </div>
				                            </div>
				                        </div>
				                        <hr/>
				                        <div className="post-content">
				                            <div className="panel-default">
				                                <div className="panel-body">
				                                    <div className="pull-left">
				                                        <a href="#">
				                                            <img className="media-object img-circle" src="https://lut.im/7JCpw12uUT/mY0Mb78SvSIcjvkf.png" width="35px" height="35px" style={mediaObjectStyle}/>
				                                        </a>
				                                    </div>
				                                    <h4><a href="#" style={{textDecoration:"none"}}><strong>{displayName}</strong></a></h4>
				                                    <hr/>
				                                    <div className="post-content">
				                                        Yet another post.<br/><br/>
				                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at arcu sapien. Donec laoreet, nisl quis tempor hendrerit, libero augue blandit turpis, in dignissim odio mauris eu tortor. Ut hendrerit ipsum elit, a elementum nulla ultrices eu. In posuere mollis efficitur. Maecenas justo turpis, tristique sit amet ultricies quis, molestie eget ex. Nam vestibulum consequat tincidunt. Morbi vitae placerat sapien. Phasellus quis mi tincidunt sem scelerisque tincidunt. Ut viverra porttitor sagittis. Phasellus aliquam auctor purus, id sollicitudin mauris pulvinar ac. Vivamus vel erat nec orci ultricies iaculis quis sit amet augue. Vestibulum aliquam felis lorem, interdum porttitor sapien sodales ac. Maecenas id ullamcorper risus. Suspendisse id dui sed urna rutrum pharetra. Nam eu lectus et orci vestibulum bibendum. Mauris et pulvinar dui, ac facilisis leo.
				                                        <br/><small><small><a href="#" style={{textDecoration:"none", color:"grey"}}><i><i className="fa fa-clock-o" aria-hidden="true"></i> 2 minutes ago</i></a></small></small>
				                                    </div>
				                                </div>
				                            </div>
				                        </div>
				                    </div>
				                    <div className="media">
				                        <div className="pull-left">
				                            <a href="#">
				                                <img className="media-object img-circle" src="https://lut.im/7JCpw12uUT/mY0Mb78SvSIcjvkf.png" width="35px" height="35px" style={{marginLeft:"3px", marginRight:"-5px"}}/>
				                            </a>
				                        </div>
				                        <div className="media-body">
				                            <textarea className="form-control" rows="1" placeholder="Comment"></textarea>
				                        </div>
				                    </div>
				                </div>
				            </div>
				        </div>
				    </div>
				</div>
			</div>
		)
	}
}

export default Profile;