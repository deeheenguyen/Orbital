import { Link, Router } from 'react-router';
import PhotoGrid from './PhotoGrid.js';
import React from 'react';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log("change route")
    this.context.router.push('/results');
  }
  render() {
    return (
      <div className="homepage">
        <form onSubmit={this.handleSubmit}>
            <input type="text" ref="search-key" /><br/>
            <input type="submit" className="button" value="SEARCH"/>
        </form>
      </div>
    );
  }
}

export default Homepage;
