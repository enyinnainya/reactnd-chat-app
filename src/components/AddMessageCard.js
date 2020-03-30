import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMessageCard extends Component {
  state = {
    message: '',
  };

  static propTypes = {
    sendMessage: PropTypes.func.isRequired,
  };

  handleInputChange = event => {
    const { value } = event.target;

    this.setState(() => ({
      message: value,
    }));
  };

  isDisabled = () => {
    const { message } = this.state;
    return message === '';
  };

  render() {
    const { message } = this.state;
    const {sendMessage,user}=this.props;

    return (
      
      <div>
        <form onSubmit={(event)=>sendMessage(event,user.username,message)} className="input-group">
          <input
            type="text"
            className="form-control"
            value={message}
            placeholder="Enter your message..."
            onChange={this.handleInputChange}
          />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddMessageCard;
