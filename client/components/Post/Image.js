import React from 'react';

class Image extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    console.log(this.props.image.imageUrl);
    console.log("coming here");
    return (
      <div className="grid-photo-wrap">
        <img src= {this.props.image.imageUrl} className = "grid-photo"/>
      </div>
    );
  }
}


export default Image;
