import React, { Component } from 'react';

import Lifecycle from "./Lifecycle"

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "test",
      displayValue: "test2",
      showDisplay: true,
    }
    this.onSet = this.onSet.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onToggle = this.onToggle.bind(this)
  }

  onSet() {
    this.setState(prev => Object.assign({}, prev, {
      displayValue: prev.inputValue
    }))
  }

  onToggle() {
    this.setState(prev => Object.assign({}, prev, {
      showDisplay: !prev.showDisplay
    }))
  }

  onChange(event) {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Lifecycle demo</h1>
        <input type="text" value={this.state.inputValue} onChange={this.onChange} />
        <button onClick={this.onSet}>Set Display</button>
        <button onClick={this.onToggle}>Toggle Display</button>
        <h4>{this.state.showDisplay ? "Component Mounted" : "Component Not Mounted"}</h4>
        {this.state.showDisplay && <Lifecycle message={this.state.displayValue} />}
      </div>
    );
  }
}

export default App;
