import React, { Component } from 'react';
import Dashboard from './scoreboard/Dashboard';


export class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Challenge II</h1>
        <Dashboard />
      </div>
    );
  }
}

export default App;
