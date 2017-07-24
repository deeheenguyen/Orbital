import React from 'react';
import RegisterForm from "./RegisterForm.js";
import {connect} from 'react-redux';
import {userRegisterRequest} from '../../actions/registerAction.js';
import {addFlashMessage} from '../../actions/flashMessages.js';
import { Link, Router } from 'react-router';

class Register extends React.Component {
  render(){
    const {userRegisterRequest, addFlashMessage} = this.props;
    console.log(addFlashMessage);
    return (
      <div>
        <h1>
          <Link to="/">NUSWhere</Link>
        </h1>
        <div className="row">
            <div className ="col-md-4 col-md-offset-4">
                  <RegisterForm  userRegisterRequest={userRegisterRequest} addFlashMessage={addFlashMessage}/>
            </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  userRegisterRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
}
export default connect((state) => {return {}} , {userRegisterRequest, addFlashMessage})(Register);
