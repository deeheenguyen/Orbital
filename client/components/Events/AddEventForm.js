import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup.js';

var headerStyle = {
  textAlign: 'centre',
  color: '#FF6A38',
}

var formStyle = {
  textAlign: 'left',
  color: '#52686A',
}

class AddEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createSelectItems = this.createSelectItems.bind(this);
  }
  createSelectItems() {
    let items = [];
    const { posts } = this.props
    posts.forEach(function (post) {
      items.push(<option key={post.code} value={post.code}>{post.caption}</option>)
    })
    return items;
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log("submitting the form!");
    const name = this.refs.name.value;
    const location_code = this.refs.location.value;
    const category = this.refs.category.value;
    const time = this.refs.time.value;
    const description = this.refs.description.value;
    if (name && location_code && category && time) {
      console.log("we are running this from add event form");
      this.props.addToEvents(name, location_code, category, time, description);
      this.refs.eventForm.reset();
    }
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1 style={headerStyle}>Upload Events</h1>
        <form style = {formStyle} ref="eventForm" onSubmit={this.handleSubmit}>
          <ul className="form-style-1">
              <li>
                  <label>Name <span className="required">*</span></label>
                  <input type="text" ref="name" className="field-long" />
              </li>
              <li>
                  <label>Location <span className="required">*</span></label>
                  <select ref="location" className="field-select">
                    {this.createSelectItems()}
                  </select>
              </li>
              <li>
                  <label>Category <span className="required">*</span></label>
                  <select ref="category" className="field-select">
                    <option value="food">Food</option>
                    <option value="sale">Sale</option>
                    <option value="talk-conference">Talk/Conference</option>
                    <option value="others">Others</option>
                  </select>
              </li>
              <li>
                  <label>Time<span className="required">*</span></label>
                  <input type="datetime-local" ref="time" />
              </li>
              <li>
                  <label>Description </label>
                  <textarea ref="description" className="field-long field-textarea"></textarea>
              </li>
              <li>
                  <input type="submit" value="Submit" />
              </li>
          </ul>
        </form>
     </div>
    );
  }
}
export default AddEventForm;
