import React from 'react';
import classnames from 'classnames';

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

      <div className = {classnames('alert', {
        'alert-sucess': type ==='success',
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
