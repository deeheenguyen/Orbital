import React from 'react';

class Ratings extends React.Component {
	render() {
		return (
			<div>
				<fieldset className="rating">
				    <input type="radio" id="star5" className="rating" value="5" /><label className = "full" htmlFor="star5" title="Awesome - 5 stars"></label>
				    <input type="radio" id="star4half" className="rating" value="4 and a half" /><label className="half" htmlFor="star4half" title="Pretty good - 4.5 stars"></label>
				    <input type="radio" id="star4" className="rating" value="4" /><label className = "full" htmlFor="star4" title="Pretty good - 4 stars"></label>
				    <input type="radio" id="star3half" className="rating" value="3 and a half" /><label className="half" htmlFor="star3half" title="Meh - 3.5 stars"></label>
				    <input type="radio" id="star3" className="rating" value="3" /><label className = "full" htmlFor="star3" title="Meh - 3 stars"></label>
				    <input type="radio" id="star2half" className="rating" value="2 and a half" /><label className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars"></label>
				    <input type="radio" id="star2" className="rating" value="2" /><label className = "full" htmlFor="star2" title="Kinda bad - 2 stars"></label>
				    <input type="radio" id="star1half" className="rating" value="1 and a half" /><label className="half" htmlFor="star1half" title="Meh - 1.5 stars"></label>
				    <input type="radio" id="star1" className="rating" value="1" /><label className = "full" htmlFor="star1" title="Sucks big time - 1 star"></label>
				    <input type="radio" id="starhalf" className="rating" value="half" /><label className="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars"></label>
				</fieldset>
			</div>
		)
	}
}

export default Ratings;