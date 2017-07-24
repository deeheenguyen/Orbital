import React from 'react';
import LoginForm from './LoginForm.js';
import { Link, Router } from 'react-router';

class Login extends React.Component{
  render() {
     return (
 		<div>
 			<h1>
				<Link to="/">NUSWhere</Link>
			</h1>
			<div className="row">
			   <div className ="col-md-4 col-md-offset-4">
			         <LoginForm />
			   </div>
			</div>
		</div>
     )
   }


}

export default Login;
