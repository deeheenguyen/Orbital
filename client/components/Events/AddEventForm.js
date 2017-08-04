import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup.js';
import {storage} from '../../actions/database.js';
import firebase, { auth, database } from '../../actions/database.js';
const uidPackage = require('uid');

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
    this.handleUploadFile = this.handleUploadFile.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.state = {
      posts: this.props.posts,
      file: ' ',
      imagePreviewUrl: ' ',
    };
  }
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
          this.setState({ user });
      } else {
        this.setState({
          user: null
        });
      }
    });
    database.ref('/posts').on('value', (snap) => {
      const updatedPosts = snap.val();
      this.setState({
        posts: Object.values(updatedPosts)
      });
    });
  }
  createSelectItems() {
    let items = [];
    const { posts } = this.state
    if (posts !== undefined) {
      posts.forEach(function (post) {
        items.push(<option key={post.code} value={post.code}>{post.caption}</option>)
      })
    }
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
    if (name && location_code && category && time && this.state.userId !== null) {
      const eventId = uidPackage();
      const newsId = uidPackage(); 
      const timeStamp = Date.now();
      const { uid } = this.state.user;
      this.props.addToEvents(eventId, uid, name, location_code, category, time, description);
      this.props.addToNewsFeed(uid, newsId, "addEvent", timeStamp, {eventId, name, location_code, category, time, description})
      this.refs.eventForm.reset();
    }
      this.handleUploadFile();
    console.log("is this really go back");
    this.context.router.goBack();
    console.log("yes it is");
  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  handleUploadFile() {
    console.log("Uploading the file");
    var fileName = this.state.file.name;
    var storageRef =  storage.ref('image/' + fileName);
    var uploadTask = storageRef.put(this.state.file);
    // Register three observers:
    // 1. 'state_change' obsever, called any time the state changes
    // 2.'error obsever, called on failure'
    // 3. completion obsever called on sucessfull completion
    uploadTask.on('state_changed',
     function(snapshot) {
      // observer state change events such as progress, pause, and resumt
      // see below for more detail
    }, function(error) {
      //handle unsuccessful uploads
    }, function() {
      // handle successful uploads on complete
      // For instance, get the download URL:https://firebasestorage.googleapis/com/...
      var downloadURL = uploadTask.snapshot.downloadURL;
      console.log(downloadURL);
    });
  }

  handleImageChange(e){
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    console.log(file);

    reader.onloadend = () => {
      console.log("this is reader.results");
      console.log(reader.result);
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }


  render() {
    console.log(this.props);
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl}/>);
    }
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
                  <label>Upload image </label>
                   <input type="file" onChange = {this.handleImageChange}/>
                    {$imagePreview}
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
