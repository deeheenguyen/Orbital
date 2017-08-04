import React from 'react';
import Photo from './Photo.js';
import Comments from './Comments.js';
import { Link, Router } from 'react-router';
import Reactable from 'reactable';
import firebase, { auth, database } from '../actions/database.js';

var Table = Reactable.Table,
    Thead = Reactable.Thead,
    Th = Reactable.Th;

var tableStyle = {
  color: '#10828C'
}

class Place extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
	      user: null
	    }
	}
	componentDidMount() {
		auth.onAuthStateChanged((user) => {
			if (user) {
			  	this.setState({ user });
			} else {
				this.setState({
					user: null
				});
			}
		});
	}
	render() {
		console.log('Props from place', this.props);
		const { postId } = this.props.params;
		if (this.props.posts == null || this.props.comments == null || this.props.events == null) {
			return <div></div>
		}
		const i = this.props.posts.findIndex((post) => 
			post.code === postId);
		const post = this.props.posts[i];
		const postComments = this.props.comments[postId] || [];
		const events = this.props.events[postId];
		let eventList = []
		if (events !== undefined) {
			events.forEach(function(e) {
				eventList.push({
					name: e.name,
					location: post.caption,
					category: e.category,
					time: new Date(e.time),
					description: e.description,
				})
			})
		}

		return (
			<div>
				<h1>
		            <Link to="/">NUSWhere</Link>
		        </h1>
				<div className="single-photo">
					<Photo i={i} post={post} {...this.props} />
					<div>
						<Comments postComments={postComments} i={i} {...this.props}/>
					</div>
				</div>
				<div>
					<h2 className='event-header'>
						Events
		        	</h2>
					<Table className="table" style={tableStyle}
				        filterable={['name', 'location', 'category', 'time', 'description']}
				        noDataText="No matching records found"
				        itemsPerPage={5}
				        currentPage={0}
				        sortable={true}
				        data={eventList}>
				        <Thead>
				          <Th column="name">Name</Th>
				          <Th column="location">Location</Th>
				          <Th column="category">Category</Th>
				          <Th column="time">Time</Th>
				          <Th column="description">Description</Th>
				        </Thead>
	      			</Table>
	      		</div>
			</div>
			);
	}
}

export default Place;