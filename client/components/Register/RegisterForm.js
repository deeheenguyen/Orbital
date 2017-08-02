import React from 'react';
import classnames from 'classnames';
import validateInput from '../../../server/shared/validation/register.js';
import TextFieldGroup from '../common/TextFieldGroup.js';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import firebase, { auth, database } from '../../actions/database.js';


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
    this.handleRegister = this.handleRegister.bind(this);
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
  handleRegister(event) {
    event.preventDefault();
    console.log("Register");
    const username = this.refs.username.value;
    const email = this.refs.email.value;
    const pw = this.refs.password.value;
    const pw2 = this.refs.password2.value;
    var result = {};
    if (pw != pw2) {
      this.props.addFlashMessage({
            type: 'error',
            text: 'Passwords do not match'
          });
    } else {
      firebase.auth().createUserWithEmailAndPassword(email, pw).then((user) => {
        user.updateProfile({
          displayName: username
        }).then(() => {
          this.props.addFlashMessage({
              type: 'success',
              text: 'You have signed up successfully. Welcome ' + username + '!'
            });
          this.context.router.push('/');
        }, (error) => {
          this.props.addFlashMessage({
            type: 'error',
            text: 'Something went wrong while updating your account username'
          });
        })
      }, (error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        this.props.addFlashMessage({
            type: 'error',
            text: errorMessage
          });
      });
    }
  }
  handleAuthentication(provider) {
    auth.signInWithPopup(provider) 
    .then((result) => {
      const user = result.user;
      this.setState({
        user
      });
      this.props.addFlashMessage({
            type: 'success',
            text: 'You have signed up successfully. Welcome ' + user.displayName + '!'
          });
      this.context.router.push('/');
    });
  }
  render(){
    const {errors} = this.state;
    return (
      <div>
        <form className="login-box" onSubmit={this.handleRegister}>
          <div className="left">  
            <input type="textForm" ref="username" placeholder="Username" required/>
            <input type="email" ref="email" placeholder="E-mail" required/>
            <input type="password" ref="password" placeholder="Password" required/>
            <input type="password" ref="password2" placeholder="Confirm password" required/>
            
            <input type="submit" name="signup_submit" value="Sign me up" />
          </div>
          
          <div className="right">
            <span className="loginwith">Register with</span>
            
            <button className="social-signin google" onClick={this.handleAuthentication.bind(this, new firebase.auth.GoogleAuthProvider)}>Google</button>
            <button className="social-signin facebook" onClick={this.handleAuthentication.bind(this, new firebase.auth.FacebookAuthProvider)}>Facebook</button>
          </div>
          <div className="or">OR</div>
        </form>
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
