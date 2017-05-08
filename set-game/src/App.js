import React, { Component } from 'react';
import set_logo from '../public/set_logo.jpg'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={set_logo} className="App-logo" alt="logo" />
          <h2>Welcome to Set</h2>
        </div>
        <p className="App-intro">
          This is where the GameBoard will go.
        </p>
      </div>
    );
  }
}

export default App;
