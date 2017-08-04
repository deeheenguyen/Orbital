import React from 'react';
import {database} from '../../actions/database.js';
import Image from './Image.js';
import {Link, Router} from 'react-router';

function snapshotToArray(snapshot) {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        console.log("running in snapshot to array"  + item);
        returnArr.push(item);
    });
    console.log(returnArr);
    return returnArr;
};

class Gallery extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      postId: this.props.location.query.postID,
      myPost: [],
      arrayImage: [],
    };
  }
  componentWillMount(){
    var postId = this.props.location.query.postID;
      database.ref('posts/' + postId + "/images/").on('value', (snap) => {
           var data = snapshotToArray(snap);
            console.log("my data is " + data);
            this.setState({
              arrayImage: data,
            })
      });
    }
  render() {
    console.log("we been testing in the gallery");
    console.log("this is myPost" + JSON.stringify(this.state.myPost));
    console.log("this is my arrayImage" + JSON.stringify(this.state.arrayImage));
    return (
      <div>
        <h1>
          <Link to="/">NUSWhere</Link>
        </h1>
        <div className="photo-grid">
        {this.state.arrayImage.map((image, i) => <Image {...this.props}
          key={i} image={image} />)}
        </div>
      </div>
    );
  }
}

export default Gallery;
