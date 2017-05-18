import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Andy"
    }
  }

  render() {
    const { name } = this.state

    // let message;
    // if (name === "Andy") {
    //   message = `Hello ${name}`;
    // } else {
    //   message = "Go away"
    // }

    return (
      <div>
        <h1>{name === "Andy" ? `Hello ${name}` : "Go away"}</h1>
      </div>
    );
  }
}

export default App;
