import React from 'react';
import RegisterForm from "./RegisterForm.js";
import {connect} from 'react-redux';
import {userRegisterRequest} from '../../actions/registerAction.js';

class Register extends React.Component {
  render(){
    const {userRegisterRequest} = this.props;
    return (
      <div className="row">
          <div className ="col-md-4 col-md-offset-4">
                <RegisterForm  userRegisterRequest = {userRegisterRequest}/>
          </div>
      </div>
    );
  }
}

Register.propTypes = {
  userRegisterRequest: React.PropTypes.func.isRequired
}
export default connect((state) => {return {}} , {userRegisterRequest})(Register);
