import React from 'react';

class FreeFood extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      abc: "",
    }
    this.handleUpload = this.handleUpload.bind(this);
  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  handleUpload(e) {
    e.preventDefault();
    console.log("something will be added");
    this.context.router.push('/upload');
  }
  render() {
    return (
      <div>
          <h1> Current FreeFood events</h1>
            <p>
            below is the list of current food event will be arranged in the order
            and arrange theo thoi gian, se som duoc add vao
            </p>
            <form onSubmit={this.handleUpload}>
              <button className ="submit"> Upload Events </button>
            </form>
      </div>
    );
  }
}


export default FreeFood;
