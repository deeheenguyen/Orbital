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
          <form onSubmit = {this.onSubmit} style = {style}>
               <TextFieldGroup
                  field="username"
                  label="Username"
                  value={this.state.username}
                  error={errors.username}
                  onChange={this.onChange}
                />
                <TextFieldGroup
                    field="password"
                    label="Password"
                    value={this.state.password}
                    error={errors.password}
                    onChange={this.onChange}
                  />
                  <button className = "btn btn-primary btn-lg" style = {{textAlign : 'center'}}>
                      Login
                  </button>
                  <br/>
          </form>
          <form >
              <button>Login with Facebook</button>
          </form>
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
