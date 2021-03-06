import React from 'react';
import RegisterForm from "./RegisterForm.js";
import {connect} from 'react-redux';
import {addFlashMessage} from '../../actions/flashMessages.js';
import { Link, Router } from 'react-router';

class Register extends React.Component {
  render(){
    const { addFlashMessage } = this.props;
    console.log(addFlashMessage);
    return (
      <div>
        <h1>
          <Link to="/">NUSWhere</Link>
        </h1>
        <div className="row">
            <div className ="col-md-4 col-md-offset-4">
                  <RegisterForm  addFlashMessage={addFlashMessage} />
            </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  addFlashMessage: React.PropTypes.func.isRequired
}
export default connect((state) => {return {}} , addFlashMessage)(Register);
