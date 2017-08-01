import React from 'react';
import classnames from 'classnames';
import validateInput from '../../../server/shared/validation/register.js';
import TextFieldGroup from '../common/TextFieldGroup.js';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';

var style = {
  textAlign: 'left',
  color: 'black',
}
class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {},
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }
  isValid(){
    const {errors, isValid} = validateInput(this.state);
    if (!isValid){
      this.setState({errors});
    }
    return isValid;
  }
  onSubmit(e){
    e.preventDefault();
    if (this.isValid()) {
      this.setState({errors : {}});
      this.props.userRegisterRequest(this.state).then(
        () => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'You signed up successfully. Welcome!'
          });
          console.log("add to users in register form");
          console.log(JSON.stringify(this.state));
          this.props.addToUsers(this.state);
          this.context.router.push('/');
        },
        ({ data }) => {this.setState({errors: data})}
      );
      console.log("we are running this");
    }
  }
  render(){
    const {errors} = this.state;
    return (
      <div>
        <div id="login-box">
          <div className="left">  
            <input type="text" name="username" placeholder="Username" />
            <input type="text" name="email" placeholder="E-mail" />
            <input type="password" name="password" placeholder="Password" />
            <input type="password" name="password2" placeholder="Retype password" />
            
            <input type="submit" name="signup_submit" value="Sign me up" />
          </div>
          
          <div className="right">
            <span className="loginwith">Register with<br />social network</span>
            
            <button className="social-signin facebook">Facebook</button>
            <button className="social-signin twitter">Twitter</button>
            <button className="social-signin google">Google</button>
          </div>
          <div className="or">OR</div>
        </div>
      </div>
    );
  }
}

RegisterForm.propTypes = {
  userRegisterRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  addToUsers: React.PropTypes.func.isRequired,
}
RegisterForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}


export default RegisterForm;
