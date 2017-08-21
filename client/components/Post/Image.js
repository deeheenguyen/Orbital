import React from 'react';
import {storage} from '../../actions/database.js';

//var fileDownload = require('react-file-download');
class Image extends React.Component {
  constructor(props) {
    super(props);
  //  this.handleDownload = this.handleDownload.bind(this);
  }
  /*
  handleDownload(e){
    e.preventDefault();
    storageRef.child('images/stars.jpg').getDownloadURL().then(function(url) {
      // `url` is the download URL for 'images/stars.jpg'
      // This can be downloaded directly:
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function(event) {
        var blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();

  }).catch(function(error) {
    // Handle any errors
});
    fileDownload(our_image, 'image.jpg');
  }
  */
//  <button className="Download" onClick={this.handleDownload} >Download Image </button>

  render(){
    console.log(this.props.image.imageUrl);
    console.log("coming here");
    return (
      <div className="Gallery">
        <img src= {this.props.image.imageUrl}/>
      </div>
    );
  }
}


export default Image;
