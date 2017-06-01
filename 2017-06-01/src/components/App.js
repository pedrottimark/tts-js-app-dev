import React, {Component} from 'react';

import './App.css';

import Adder from './Adder';
import Filter from './Filter';
import Heading from './Heading';
import Symbols from './Symbols';
import TodoList from './TodoList';

import state from '../state';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = state;
  }

  _changeFilter = (filter) => {
  }

  _addTodo = (text) => {
  }

  _toggleTodo = (id) => {
  }

  render() {
    const {
      filter,
      todos,
    } = this.state;

    return (
      <section className="TodoApp">
        <Symbols />
        <Heading todos={todos} />
        <Filter filter={filter} onChange={this._changeFilter} />
        <TodoList filter={filter} onClick={this._toggleTodo} todos={todos} />
        <Adder onSubmit={this._addTodo} />
      </section>
    );
  }
}

export default App;
