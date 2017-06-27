import React from 'react';
import axios from 'axios';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ' ',
      email: ' ',
      password: ' ',
      passwordConfirmation: ' ',
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }

  onSubmit(e){
    e.preventDefault();
    console.log(this.state);
    axios.post('/api/users', {user: this.state});
    console.log("we are running this");
  }
  render(){
    return (
      <form onSubmit = {this.onSubmit}>
              <div className="form-group">
                <label className="control-label" >Username</label>
                  <input
                    type="text"
                    value = {this.state.username}
                    onChange= {this.onChange.bind(this)}
                    name="username"
                    className="form-control"
                  />
              </div>
              <div className="form-group">
                <label className="control-label">Password</label>
                  <input
                    type="text"
                    value = {this.state.password}
                    onChange= {this.onChange.bind(this)}
                    name="password"
                    className="form-control"
                  />
              </div>
              <div className="form-group">
                  <label className="control-label">Confirmation Password</label>
                  <input
                    type="text"
                    value = {this.state.passwordConfirmation}
                    onChange= {this.onChange.bind(this)}
                    name="passwordConfirmation"
                    className="form-control"
                  />
              </div>
              <div className="form-group">
                <label className="control-label" >Email</label>
                  <input
                    type="text"
                    value = {this.state.email}
                    onChange= {this.onChange.bind(this)}
                    name="email"
                    className="form-control"
                  />
              </div>
              <div className = "form-group">
                  <button className = "btn btn-primary btn-lg">
                      Sign Up
                  </button>
              </div>
      </form>
    );
  }
}

export default Register;
