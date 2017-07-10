import React from 'react';
import axios from 'axios';
import classnames from 'classnames';

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

  onSubmit(e){
    this.setState({errors : {}});
    e.preventDefault();
    console.log(this.state);

    this.props.userRegisterRequest(this.state).then(
      () => {},
      ({ data }) => {this.setState({errors: data})}
    );
    console.log("we are running this");
  }
  render(){
    const {errors} = this.state;
    return (

      <form onSubmit = {this.onSubmit} style = {style} >
              <div className={classnames("form-group", {'has-error' : errors.username})} >
                <label className="control-label">Username</label>
                  <input
                    type="text"
                    value = {this.state.username}
                    onChange= {this.onChange.bind(this)}
                    name="username"
                    className="form-control"
                  />
                  {errors.username && <span className="help-block">{errors.username}</span>}
              </div>
              <div className={classnames("form-group", {'has-error' : errors.password})}>
                <label className="control-label">Password</label>
                  <input
                    type="text"
                    value = {this.state.password}
                    onChange= {this.onChange.bind(this)}
                    name="password"
                    className="form-control"
                  />
                  {errors.username && <span className="help-block">{errors.password}</span>}
              </div>
              <div className={classnames("form-group", {'has-error' : errors.passwordConfirmation})}>
                  <label className="control-label">Confirmation Password</label>
                  <input
                    type="text"
                    value = {this.state.passwordConfirmation}
                    onChange= {this.onChange.bind(this)}
                    name="passwordConfirmation"
                    className="form-control"
                  />
                    {errors.username && <span className="help-block">{errors.passwordConfirmation}</span>}
              </div>
              <div className={classnames("form-group", {'has-error' : errors.email})}>
                <label className="control-label" >Email</label>
                  <input
                    type="text"
                    value = {this.state.email}
                    onChange= {this.onChange.bind(this)}
                    name="email"
                    className="form-control"
                  />
                  {errors.username && <span className="help-block">{errors.email}</span>}
              </div>
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
  userRegisterRequest: React.PropTypes.func.isRequired
}
export default RegisterForm;
