import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      students: ["Mark", "Andy", "Niki", "Doug"]
    }
  }

  render() {
    const condition = this.state.students.length > 4;
    return (
      <div>
        <h1 style={{
          color: condition ? "blue" : undefined,
          textAlign: "center"
        }}>Students</h1>
        <ul>
          {this.state.students.filter(student => student.length > 4).map(student => <li key={student} >{student}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
