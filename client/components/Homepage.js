import { Link, Router } from 'react-router';
import PhotoGrid from './PhotoGrid.js';
import React from 'react';

var styleSearch = {
  textAlign: 'center',
  fontSize: '30px',
  color: 'black',
  width: '500px',
  height: '50px',
}

var styleBox = {
  textAlign: 'top',
}
class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
      <div>
        <h1>
            <Link to="/">NUSWhere</Link>
        </h1>
        <div className="homepage">
          <input type="text" value = {this.state.value} onChange ={this.handleChange} style = {styleSearch} /><br/>
          <form onSubmit={this.handleSubmit} style = {styleBox} >
              <input type="submit" className="button" value="SEARCH"/>
          </form>
        </div>
      </div>
    );
  }
}

export default Homepage;
