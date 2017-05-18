import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: [
        {
          text: "test",
          time: "2 am",
          user: "Matt",
        },
        {
          text:"Hello",
          time: "3 pm",
          user: "Doug",
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <h1 >Messages</h1>
        <ul>
          {this.state.messages.map(message => <li key={message.text} >
            <h4>{message.text}</h4>
            <p>{message.user} at {message.time}</p>
          </li>)}
        </ul>
      </div>
    );
  }
}

export default App;
