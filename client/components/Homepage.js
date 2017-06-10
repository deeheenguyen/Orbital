import { Link, Router } from 'react-router';
import PhotoGrid from './PhotoGrid.js';
import React from 'react';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }
  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.value);
    this.context.router.push(
        {
          pathname: '/results',
          query: {searchKey: this.state.value},
         }
    );

  }

  handleChange(event){
    this.setState({value: event.target.value});
  }
  render() {
    return (
      <div className="homepage">
        <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" value = {this.state.value} onChange ={this.handleChange.bind(this)} /><br/>
            <input type="submit" className="button" value="SEARCH"/>
        </form>
      </div>
    );
  }
}

export default Homepage;
