import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup.js';

var style = {
  textAlign: 'left',
  color: 'black',
}

class FreeFood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: '',
      location: '',
      time: '',
      errors: {},
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
  }

  onChange(e) {
    console.log("we will need something here");
      this.setState({[e.target.name]: e.target.value});
  }
  render() {
    const {errors} = this.state;
    return (
      <div>
            <h1>Upload FreeFood events</h1>
          <form onSubmit = {this.onSubmit}>
            <TextFieldGroup
               field="events"
               label="Events"
               value={this.state.events}
               error={errors.events}
               onChange={this.onChange}
             />
             <TextFieldGroup
                field="location"
                label="Location"
                value={this.state.location}
                error={errors.location}
                onChange={this.onChange}
              />
              <TextFieldGroup
                 field="time"
                 label="Time"
                 value={this.state.time}
                 error={errors.time}
                 onChange={this.onChange}
               />
            </form>
            <button className = "btn btn-primary btn-lg" style = {{textAlign : 'center'}}>
                Submit
            </button>
     </div>
    );
  }
}
export default FreeFood;
