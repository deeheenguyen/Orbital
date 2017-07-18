import { Link, Router } from 'react-router';
import PhotoGrid from './PhotoGrid.js';
import React from 'react';

var styleSearch = {
  textAlign: 'center',
  font: '10px',
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
    this.handleFreeFood = this.handleFreeFood.bind(this);
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

  handleFreeFood(event) {
    console.log("yahaayaahaah");
    this.context.router.push('/freefood');
  }
  render() {
    return (
      <div className="homepage">
            <input type="text" value = {this.state.value} onChange ={this.handleChange} style = {styleSearch} /><br/>
            <form onSubmit={this.handleSubmit} style = {styleBox} >
            <input type="submit" className="button" value="SEARCH"/>
        </form>
          <form onSubmit={this.handleFreeFood}>
                  <button type="submit">Free Food events</button>
          </form>
      </div>

    );
  }
}

export default Homepage;
