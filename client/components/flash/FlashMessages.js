import React from 'react';
import classnames from 'classnames';


var flashStyle = {
  position : "absolute",
  bottom : "0",
  height : "40px",
  marginTop : "40px"
}

class FlashMessages extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    this.props.deleteFlashMessage(this.props.message.id);
  }
  render() {
    const {id, type, text} = this.props.message;
    return (

      <div style={flashStyle} className = {classnames('alert', {
        'alert-success': type ==='success',
        'alert-danger': type ==='error',
      })}>
          <button className="close" onClick = {this.onClick}>
              <span>
                &times;
              </span>
          </button>
          {text}
      </div>
    );
  }
}


FlashMessages.propTypes = {
  message: React.PropTypes.object.isRequired,
  deleteFlashMessage: React.PropTypes.func.isRequired,
}
export default FlashMessages;
