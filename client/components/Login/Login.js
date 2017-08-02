import React from 'react';
import LoginForm from './LoginForm.js';
import {connect} from 'react-redux';
import { Link, Router } from 'react-router';
import { addFlashMessage } from '../../actions/flashMessages.js';

class Login extends React.Component{
  render() {
  	const { addFlashMessage } = this.props;
    return (
 		<div>
 			<h1>
				<Link to="/">NUSWhere</Link>
			</h1>
			<div className="row">
			   <div className ="col-md-4 col-md-offset-4">
			         <LoginForm addFlashMessage = { addFlashMessage }/>
			   </div>
			</div>
		</div>
     )
   }


}

Login.propTypes = {
  addFlashMessage: React.PropTypes.func.isRequired
}
export default connect((state) => {return {}} , { addFlashMessage })(Login);
