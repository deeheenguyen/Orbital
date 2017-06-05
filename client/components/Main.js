import React from 'react';
import { Link } from 'react-router';

class Main extends React.Component {
	componentDidMount() {
    	this.props.getPosts();
    	console.log('After getting posts', this.props);
    	this.props.getComments();
    	console.log('After getting comments', this.props);
  	}
	render() {
		return (
			<div>
				<h1>
					<Link to="/">NUSWhere</Link>
				</h1>
				{ React.cloneElement(this.props.children, this.props) }
			</div>
			);
	}
};

export default Main;
