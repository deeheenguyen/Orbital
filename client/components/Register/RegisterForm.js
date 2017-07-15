import React from 'react';
import classnames from 'classnames';
import validateInput from '../../../server/shared/validation/register.js';
import TextFieldGroup from '../common/TextFieldGroup.js';
import {browserHistory} from 'react-router';
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

      <form onSubmit = {this.onSubmit} style = {style} >
                 <TextFieldGroup
                    error={errors.username}
                    label="Username"
                    onChange={this.onChange}
                    value={this.state.username}
                    field="username"
                  />

                  <TextFieldGroup
                    error={errors.email}
                    label="Email"
                    onChange={this.onChange}
                    value={this.state.email}
                    field="email"
                  />

                  <TextFieldGroup
                    error={errors.password}
                    label="Password"
                    onChange={this.onChange}
                    value={this.state.password}
                    field="password"
                    type="password"
                  />

                  <TextFieldGroup
                    error={errors.passwordConfirmation}
                    label="Password Confirmation"
                    onChange={this.onChange}
                    value={this.state.passwordConfirmation}
                    field="passwordConfirmation"
                    type="password"
                  />
              <div className = "form-group">
                  <button className = "btn btn-primary btn-lg" style = {{textAlign : 'center'}}>
                      Sign Up
                  </button>
              </div>
      </form>
    );
  }
}

RegisterForm.propTypes = {
  userRegisterRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
}
RegisterForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default RegisterForm;
