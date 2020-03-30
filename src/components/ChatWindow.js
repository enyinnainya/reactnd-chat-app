import React, { Component } from 'react';
import AddMessage from './AddMessage';
import MessageHistory from './MessageHistory';
import PropTypes from 'prop-types';


class ChatWindow extends Component {
  static propTypes = {
    sendMessage: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired,
  };

  render() {
    const { messages, user,sendMessage } = this.props;

    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{user.username}</div>
        <MessageHistory messages={messages} user={user} />
        <AddMessage sendMessage={sendMessage} user={user} />
      </div>
    );
  }
}

export default ChatWindow;
