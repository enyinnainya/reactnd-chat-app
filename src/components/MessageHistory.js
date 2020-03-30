import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MessageHistory extends Component {
  
  static propTypes = {
    messages: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
  };

  render(){
    const { messages, user } = this.props;

    return (
      <ul className="message-list">
        {messages.map((message, index) => (
          <li
            key={index}
            className={message.username === user.username ? 'message sender' : 'message recipient'}
          >
            <p>{`${message.username}: ${message.text}`}</p>
          </li>
        ))}
      </ul>
    );
  }
 
}


export default MessageHistory;
