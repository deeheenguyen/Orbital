import React from 'react';
import { Link } from 'react-router';
import FlashMessagesList from './flash/FlashMessagesList.js';
var bgColors = { "Default": "#81b71a",
                    "Blue": "#00B1E1",
                    "Cyan": "#37BC9B",
                    "Green": "#8CC152",
                    "Red": "#E9573F",
                    "Yellow": "#F6BB42",
};
var myCSS = {
	  color: "red",
		textAlign: "center",
    marginTop: '5px',
};

var loginStyle = {
	textAlign: "right",
}

class Main extends React.Component {
	componentDidMount() {
    	this.props.getPosts();
    	this.props.getComments();
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
	render() {
    const hasUser = true;
		return (
			<div style= {myCSS}>
        <p style= {loginStyle}>

          {hasUser && <button type="submit" className="button" onClick={this.handleLogin.bind(this)}> Login </button>}
            <button type="submit" className="button" onClick={this.handleRegister.bind(this)}> Register </button>

        </p>

        <h1>
					<Link to="/">NUSWhere</Link>
				</h1>
        <FlashMessagesList />
				{ React.cloneElement(this.props.children, this.props) }
			</div>
			);
	}
};

export default Main;
