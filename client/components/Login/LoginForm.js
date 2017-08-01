import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup.js'
import validateInput from '../../../server/shared/validation/login.js';
import { login } from '../../actions/actionCreators';
import { connect } from 'react-redux';


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
    }
    isValid() {
      const {errors, isValid}  = validateInput(this.state);
      if (!isValid) {
        this.setState({ errors });
      }
      return isValid;
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
    render(){
      const {errors} = this.state;
      return (
        <div>
          <div id="login-box">
            <div className="left">
              <input type="text" placeholder="E-mail" />
              <input type="password" placeholder="Password" />
              <input type="submit" value="Log me in" />
            </div>
            
            <div className="right">
              <span className="loginwith">Log in with<br />social network</span>
              
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

LoginForm.propTypes = {
  login: React.PropTypes.func.isRequired
}

LoginForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(null, { login })(LoginForm);
