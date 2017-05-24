import React, { Component } from 'react';

import Albums from "./Album"
import Posts from "./Posts"

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "2",
      displayValue: 1,
      showDisplay: true,
    }
    this.onSet = this.onSet.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onToggle = this.onToggle.bind(this)
  }

  onSet() {
    this.setState(prevState => ({
      displayValue: prevState.inputValue
    }))
  }

  onToggle() {
    this.setState(prev => Object.assign({}, prev, {
      showDisplay: !prev.showDisplay
    }))
  }

  onChange(event) {
    const value = event.target.value

    if (Number(value) < 11) {
      this.setState({
        inputValue: value
      })
    }

  }

  render() {
    return (
      <div>
        <h1>Lifecycle demo</h1>
        <input type="text" value={this.state.inputValue} onChange={this.onChange} />
        <button onClick={this.onSet}>Set Display</button>
        <button onClick={this.onToggle}>Toggle Display</button>
        <h4>{this.state.showDisplay ? "Component Mounted" : "Component Not Mounted"}</h4>
        {this.state.showDisplay && <Albums id={this.state.displayValue} />}
        {this.state.showDisplay && <Posts id={this.state.displayValue} />}
      </div>
    );
  }
}

export default App;
