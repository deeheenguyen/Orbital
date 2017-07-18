import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup.js'
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

    onChange(e) {
      this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
      e.preventDefault();
      console.log(JSON.stringify(this.state) + "this is state of login");
      console.log("we are running LoginForm");
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
                  <button>Login with Facebook</button>
                  <button>Login with IVLE</button>
          </form>
        </div>
      );
    }
}

export default LoginForm;
