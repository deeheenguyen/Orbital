import React from 'react';


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
	render() {
		return (
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
			                            <h3><strong>Bio</strong></h3>
			                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel gravida metus, non ultrices sapien. Morbi odio metus, dapibus non nibh id amet.</p>
			                            <hr/>
			                            <h3><strong>Location</strong></h3>
			                            <p>Earth</p>
			                            <hr/>
			                            <h3><strong>Gender</strong></h3>
			                            <p>Unknown</p>
			                            <hr/>
			                            <h3><strong>Birthday</strong></h3>
			                            <p>January 01 1901</p>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
			            <div className="panel panel-default">
			                <div className="panel-body">
			                    <span>
			                        <h1 className="panel-title pull-left" style={{fontSize:"30px"}}>John Doe <small>example@pods.tld</small> <i className="fa fa-check text-success" aria-hidden="true" data-toggle="tooltip" data-placement="bottom" title="John Doe is sharing with you"></i></h1>
			                        <div className="dropdown pull-right">
			                            <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
			                                Friends
			                                <span className="caret"></span>
			                            </button>
			                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
			                                <li><a href="#">Familly</a></li>
			                                <li><a href="#"><i className="fa fa-fw fa-check" aria-hidden="true"></i> Friends</a></li>
			                                <li><a href="#">Work</a></li>
			                                <li role="separator" className="divider"></li>
			                                <li><a href="#"><i className="fa fa-fw fa-plus" aria-hidden="true"></i> Add a new aspect</a></li>
			                            </ul>
			                        </div>
			                    </span>
			                    <br/><br/>
			                    <i className="fa fa-tags" aria-hidden="true"></i> <a href="/tags/diaspora" className="tag">#diaspora</a> <a href="/tags/hashtag" className="tag">#hashtag</a> <a href="/tags/caturday" className="tag">#caturday</a>
			                    <br/><br/><hr/>
			                    <span className="pull-left">
			                        <a href="#" className="btn btn-link" style={{textDecoration:"none"}}><i className="fa fa-fw fa-files-o" aria-hidden="true"></i> Posts</a>
			                        <a href="#" className="btn btn-link" style={{textDecoration:"none"}}><i className="fa fa-fw fa-picture-o" aria-hidden="true"></i> Photos <span className="badge">42</span></a>
			                        <a href="#" className="btn btn-link" style={{textDecoration:"none"}}><i className="fa fa-fw fa-users" aria-hidden="true"></i> Contacts <span className="badge">42</span></a>
			                    </span>
			                    <span className="pull-right">
			                        <a href="#" className="btn btn-link" style={{textDecoration:"none"}}><i className="fa fa-lg fa-at" aria-hidden="true" data-toggle="tooltip" data-placement="bottom" title="Mention"></i></a>
			                        <a href="#" className="btn btn-link" style={{textDecoration:"none"}}><i className="fa fa-lg fa-envelope-o" aria-hidden="true" data-toggle="tooltip" data-placement="bottom" title="Message"></i></a>
			                        <a href="#" className="btn btn-link" style={{textDecoration:"none"}}><i className="fa fa-lg fa-ban" aria-hidden="true" data-toggle="tooltip" data-placement="bottom" title="Ignore"></i></a>
			                    </span>
			                </div>
			            </div>
			            <hr/>
			            <div className="panel panel-default">
			                <div className="panel-body">
			                    <div className="pull-left">
			                        <a href="#">
			                            <img className="media-object img-circle" src="https://lut.im/7JCpw12uUT/mY0Mb78SvSIcjvkf.png" width="50px" height="50px" style={mediaObjectStyle}/>
			                        </a>
			                    </div>
			                    <h4><a href="#" style={{textDecoration:"none"}}><strong>John Doe</strong></a> – <small><small><a href="#" style={{textDecoration:"none"}}><i><i className="fa fa-clock-o" aria-hidden="true"></i> 42 minutes ago</i></a></small></small></h4>
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
			                    <hr/>
			                    <div>
			                        <div className="pull-right btn-group-xs">
			                            <a className="btn btn-default btn-xs"><i className="fa fa-heart" aria-hidden="true"></i> Like</a>
			                            <a className="btn btn-default btn-xs"><i className="fa fa-retweet" aria-hidden="true"></i> Reshare</a>
			                            <a className="btn btn-default btn-xs"><i className="fa fa-comment" aria-hidden="true"></i> Comment</a>
			                        </div>
			                        <div className="pull-left">
			                            <p className="text-muted" style={{marginLeft:"5px"}}><i className="fa fa-globe" aria-hidden="true"></i> Public</p>
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
			                    <h4><a href="#" style={{textDecoration:"none"}}><strong>John Doe</strong></a> – <small><small><a href="#" style={{textDecoration:"none", color:"grey"}}><i><i className="fa fa-clock-o" aria-hidden="true"></i> 42 minutes ago</i></a></small></small></h4>
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
			                        <div className="panel panel-default">
			                            <div className="panel-body">
			                                <div className="pull-left">
			                                    <a href="#">
			                                        <img className="media-object img-circle" src="https://diaspote.org/uploads/images/thumb_large_283df6397c4db3fe0344.png" width="50px" height="50px" style={mediaObjectStyle}/>
			                                    </a>
			                                </div>
			                                <h4><a href="#" style={{textDecoration:"none"}}><strong>✪ SтeғOғғιcιel ✪ ツ</strong></a> – <small><small><a href="#" style={{textDecoration:"none", color:"grey"}}><i><i className="fa fa-clock-o" aria-hidden="true"></i> about 15 hours ago</i></a></small></small></h4>
			                                <hr/>
			                                <div className="post-content">
			                                    Reshare post example.
			                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel gravida metus, non ultrices sapien. Morbi odio metus, dapibus non nibh id amet.</p>
			                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel gravida metus, non ultrices sapien. Morbi odio metus, dapibus non nibh id amet.</p>
			                                </div>
			                            </div>
			                        </div>
			                    </div>
			                    <hr/>
			                    <div>
			                        <div className="pull-right btn-group-xs">
			                            <a className="btn btn-default btn-xs"><i className="fa fa-heart" aria-hidden="true"></i> Like</a>
			                            <a className="btn btn-default btn-xs"><i className="fa fa-retweet" aria-hidden="true"></i> Reshare</a>
			                            <a className="btn btn-default btn-xs"><i className="fa fa-comment" aria-hidden="true"></i> Comment</a>
			                        </div>
			                        <div className="pull-left">
			                            <p className="text-muted" style={{marginLeft:"5px"}}><i className="fa fa-globe" aria-hidden="true"></i> Public</p>
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
			                    <h4><a href="#" style={{textDecoration:"none"}}><strong>John Doe</strong></a> – <small><small><a href="#" style={{textDecoration:"none", color:"grey"}}><i><i className="fa fa-clock-o" aria-hidden="true"></i> 42 minutes ago</i></a></small></small></h4>
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
			                        <div className="pull-right btn-group-xs">
			                            <a className="btn btn-default btn-xs"><i className="fa fa-heart" aria-hidden="true"></i> Like</a>
			                            <a className="btn btn-default btn-xs"><i className="fa fa-retweet" aria-hidden="true"></i> Reshare</a>
			                            <a className="btn btn-default btn-xs"><i className="fa fa-comment" aria-hidden="true"></i> Comment</a>
			                        </div>
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
			                    <h4><a href="#" style={{textDecoration:"none"}}><strong>John Doe</strong></a> – <small><small><a href="#" style={{textDecoration:"none", color: "grey"}}><i><i className="fa fa-clock-o" aria-hidden="true"></i> 42 minutes ago</i></a></small></small></h4>
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
			                        <div className="pull-right btn-group-xs">
			                            <a className="btn btn-default btn-xs"><i className="fa fa-heart" aria-hidden="true"></i> Like</a>
			                            <a className="btn btn-default btn-xs"><i className="fa fa-comment" aria-hidden="true"></i> Comment</a>
			                        </div>
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
			                                    <h4><a href="#" style={{textDecoration:"none"}}><strong>John Doe</strong></a></h4>
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
		)
	}
}

export default Profile;