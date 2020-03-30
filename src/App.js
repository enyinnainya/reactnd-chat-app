import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindowCard from './components/ChatWindowCard';


class App extends Component {

  users = [{ username: 'Amy' }, { username: 'Jon' }];

  state = {
    messages: []
  };
  sendMessage = (event,username, message) => {
    event.preventDefault();
    const newMessage = {
      username: username,
      text: message,
    };
    this.setState(currState => {
      return ({
        messages: [...currState.messages,newMessage]
      });
    });
  };
  render() {
    const { messages } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          {this.users.map(user => (
            <ChatWindowCard
              key={user.username}
              user={user}
              messages={messages}
              sendMessage={this.sendMessage}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
