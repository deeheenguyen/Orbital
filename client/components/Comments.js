import React from 'react';
import Ratings from './Ratings.js';

class Comments extends React.Component {
	constructor(props) {
		super(props);
		this.renderComment = this.renderComment.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.setRatings = this.setRatings.bind(this);
	}
	renderComment(comment, i) {
		return (
			<div className="comment" key={i}>
				<p>
					<strong>★</strong>
					{comment.stars.toFixed(1)}
					<strong>{" " + comment.user}</strong>
					{comment.text}
					<button className="remove-comment" onClick={this.props.
						removeComment.bind(null, this.props.params.postId, i)}>&times;</button>
				</p>
			</div>
		)
	}
	handleSubmit(event) {
		event.preventDefault();
		console.log("submitting the form!");
		const { postId } = this.props.params;
		const author = this.refs.author.value;
		const comment = this.refs.comment.value;
		const { rating } = this.state;
		console.log(rating);
		if (rating && author && comment) {
			this.props.addComment(postId, author, comment, rating);
			this.props.rate(this.props.i, rating);
			this.refs.commentForm.reset();
			this.setState({
				rating: undefined
			})
		}
	}
	setRatings(event) {
		const rating = event.target.value / 2.0;
		console.log(rating)
		this.setState({
			rating
		});
	}
	render() {
		var rate_btn = {
			backgroundColor: '#fff',
			color: '#faa250',
			fontWeight: 'bold'
		}
		return (
			<div>
				<div className="comment">
					{this.props.postComments.map(this.renderComment)}
					<form ref="commentForm" className="comment-form" 
					onSubmit={this.handleSubmit}>
						<input type="text" ref="author" placeholder="author"/>
						<input type="text" ref="comment" placeholder="comment"/>
						<fieldset className="rate" onChange={this.setRatings}>
						    <input type="radio" id="rating10" name="rating" value="10" /><label htmlFor="rating10" title="5 stars"></label>
						    <input type="radio" id="rating9" name="rating" value="9" /><label className="half" htmlFor="rating9" title="4 1/2 stars"></label>
						    <input type="radio" id="rating8" name="rating" value="8" /><label htmlFor="rating8" title="4 stars"></label>
						    <input type="radio" id="rating7" name="rating" value="7" /><label className="half" htmlFor="rating7" title="3 1/2 stars"></label>
						    <input type="radio" id="rating6" name="rating" value="6" /><label htmlFor="rating6" title="3 stars"></label>
						    <input type="radio" id="rating5" name="rating" value="5" /><label className="half" htmlFor="rating5" title="2 1/2 stars"></label>
						    <input type="radio" id="rating4" name="rating" value="4" /><label htmlFor="rating4" title="2 stars"></label>
						    <input type="radio" id="rating3" name="rating" value="3" /><label className="half" htmlFor="rating3" title="1 1/2 stars"></label>
						    <input type="radio" id="rating2" name="rating" value="2" /><label htmlFor="rating2" title="1 star"></label>
						    <input type="radio" id="rating1" name="rating" value="1" /><label className="half" htmlFor="rating1" title="1/2 star"></label>
						    <input type="radio" id="rating0" name="rating" value="0" /><label htmlFor="rating0" title="No star"></label>
						</fieldset>
						<input style={rate_btn} type="submit" value="Rate!" />
					</form>
				</div>
			</div>
		)
	}
}

export default Comments;