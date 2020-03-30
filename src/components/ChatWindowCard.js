import React, { Component } from 'react';
import AddMessageCard from './AddMessageCard';
import MessageHistoryCard from './MessageHistoryCard';
import PropTypes from 'prop-types';


class ChatWindowCard extends Component {
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
        <MessageHistoryCard messages={messages} user={user} />
        <AddMessageCard sendMessage={sendMessage} user={user} />
      </div>
    );
  }
}

export default ChatWindowCard;
