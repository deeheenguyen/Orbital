import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup.js'
import validateInput from '../../../server/shared/validation/login.js';
import { login } from '../../actions/actionCreators';
import { connect } from 'react-redux';
import firebase, { auth, database } from '../../actions/database.js';


var style = {
  textAlign: 'left',
  color: 'black',
}

class LoginForm extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        username: '',
        password: '',
        errors: {},
      }
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.handleLogin = this.handleLogin.bind(this);
    }
    isValid() {
      const {errors, isValid}  = validateInput(this.state);
      if (!isValid) {
        this.setState({ errors });
      }
      return isValid;
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
            text: 'You have logged in successfully. Welcome ' + user.displayName + '!'
          });
        this.context.router.push('/');
      });
    }
    onChange(e) {
      this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
      e.preventDefault();
      console.log(JSON.stringify(this.state) + "this is state of login");
      console.log("we are running LoginForm");
      if (this.isValid()) {
        this.setState({ errors: {}});
        // will change the fucntion login first

        this.props.login(this.state).then(
          (res) => this.context.router.push('/'),
          (err) => this.setState({ errors: err.response.data.errors})
        );
      }
    }
    handleLogin(event) {
      event.preventDefault();
      console.log("Logging in");
      const email = this.refs.email.value;
      const pw = this.refs.password.value;
      firebase.auth().signInWithEmailAndPassword(email, pw).then((user) => {
        this.props.addFlashMessage({
              type: 'success',
              text: 'You have logged in successfully. Welcome ' + user.displayName + '!'
            });
          this.context.router.push('/');
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
    render(){
      const {errors} = this.state;
      return (
        <div>
          <form className="login-box" onSubmit={this.handleLogin}>
            <div className="left">
              <input ref="email" type="textForm" placeholder="E-mail" required/>
              <input ref="password" type="password" placeholder="Password" required/>
              <input type="submit" value="Log me in" />
            </div>
            
            <div className="right">
              <span className="loginwith">Log in with</span>
              
              <button className="social-signin google" onClick={this.handleAuthentication.bind(this, new firebase.auth.GoogleAuthProvider)}>Google</button>
              <button className="social-signin facebook" onClick={this.handleAuthentication.bind(this, new firebase.auth.FacebookAuthProvider)}>Facebook</button>
            </div>
            <div className="or">OR</div>
          </form>
        </div>
      );
    }
}

LoginForm.propTypes = {
  addFlashMessage: React.PropTypes.func.isRequired,
}

LoginForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(null, { login })(LoginForm);
