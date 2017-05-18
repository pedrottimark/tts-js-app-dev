import React, { Component } from 'react';
import classNames from "classnames"
import './App.css';

const students = ["Mark", "Andy", "Niki", "Doug", "AJ", "Jessica", ]

class App extends Component {
  constructor() {
    super();
    this.state = {
      students
    }
  }

  render() {
    const condition = this.state.students.length > 4;
    return (
      <div>
        <h1 className={classNames({
          "App": true,
          "BlueText": condition
        })}>Students</h1>
        <ul>
          {this.state.students.map(student => <li key={student} >{student}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
