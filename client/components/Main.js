import React from 'react';
import { Link } from 'react-router';
import FlashMessagesList from './flash/FlashMessagesList.js';
import firebase, { auth, database } from '../actions/database.js';

var bgColors = { "Default": "#81b71a",
                    "Blue": "#00B1E1",
                    "Cyan": "#37BC9B",
                    "Green": "#8CC152",
                    "Red": "#E9573F",
                    "Yellow": "#F6BB42",
};

var loginStyle = {
	textAlign: "right"
}

var eventStyle = {
  textAlign: "left"
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
    this.handleEvents = this.handleEvents.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
	componentDidMount() {
    auth.onAuthStateChanged((user) => {
        if (user) {
          this.setState({ user });
          console.log("User has signed in or up"); 
          console.log(user);
          console.log(this.state);
        }
      });
  	this.props.getPosts();
  	this.props.getComments();
    this.props.getEvents();
    console.log("Main state", this.state);
  }
  static get contextTypes(){
    return {
      router: React.PropTypes.object.isRequired,
    };
  }
  handleLogin(event){
    event.preventDefault();
    console.log("this is login");
    this.context.router.push('/login');
  }
  handleRegister(event){
    event.preventDefault();
    console.log("this is register");
    this.context.router.push('/register');
  }
  handleLogout(event){
    event.preventDefault();
    auth.signOut()
    .then(() => {
      this.setState({
        user: null
      });
    });
  }
  handleEvents(event) {
    event.preventDefault();
    console.log("Route to /events");
    this.context.router.push('/events');
  }
	render() {
    console.log("User:", this.state.user);
		return (
			<div>
        <div className="col-xs-6 text-left">
          <div style={eventStyle}>
            <button type="submit" className="button" onClick={this.handleEvents}> Campus Events </button>
          </div>
        </div>
        <div className="col-xs-6 text-right">
          <div style={loginStyle}>
            {this.state.user?
              <button type="submit" className="button" onClick={this.handleLogout}> Logout </button>
            :
              <div>
                <button type="submit" className="button" onClick={this.handleLogin}> Login </button>
                <button type="submit" className="button" onClick={this.handleRegister}> Register </button>
              </div>
            }
          </div>
        </div>
        <FlashMessagesList />
				{ React.cloneElement(this.props.children, this.props) }
			</div>
			);
	}
};

export default Main;
