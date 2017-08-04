import React from 'react';
import {storage, database} from '../../actions/database.js';
const uidPackage = require('uid');


class UploadPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: '',
      postID:  this.props.location.query.postID,
    };
  }

  _handleSubmit(e) {
    e.preventDefault();
    console.log("Uploading the file");
    const imageId = uidPackage();
    var fileName = this.state.file.name;
    var storageRef =  storage.ref('Gallery/' + this.state.postID+ "/" + imageId);
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
      var downloadUrl = uploadTask.snapshot.downloadURL;
      console.log(downloadUrl);
      this.handlePushToDb(downloadUrl, imageId);
      alert("upload successfully");
    }.bind(this));
    /// this part will store the image URL into database
    this.context.router.goBack();
  }
  handlePushToDb(url, imageId) {
    var databaseRef = database.ref('/posts/' + this.state.postID + "/images/"+imageId);
    databaseRef.set({
      imageUrl: url,
    })
  }
  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }
  static get contextTypes() {
		return {
			router: React.PropTypes.object.isRequired,
		};
	}
  render() {
    console.log("this is postID" + this.state.postID);
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="previewComponent">
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput"
            type="file"
            onChange={(e)=>this._handleImageChange(e)} />
          <button className="submitButton"
            type="submit"
            onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
        </form>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    )
  }
}

export default UploadPhoto;
