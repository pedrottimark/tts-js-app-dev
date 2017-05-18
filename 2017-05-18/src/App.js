import React, {Component} from 'react';

import './App.css';

import TodoList from './TodoList';

import state from './state-data';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = state;
  }

  render() {
    const {
      todos,
    } = this.state;

    return (
      <section className="TodoApp">
        <TodoList todos={todos} />
      </section>
    );
  }
}

export default App;
