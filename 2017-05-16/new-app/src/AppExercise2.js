import React, { Component } from 'react';
import classNames from "classnames"
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      students: ["Mark", "Andy", "Niki", "Doug", "AJ", "Jessica", "Rachel"]
    }
  }

  render() {
    const condition = this.state.students.length > 4;
    return (
      <div>
        <h1 className={classNames({
          "App": true,
          "BlueText": condition,
        })}>Students</h1>
        <ul>
          {this.state.students.filter(student => student.length > 4).map(student => <li key={student} >{student}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
