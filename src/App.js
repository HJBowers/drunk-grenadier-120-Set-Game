import React, { Component } from 'react';
import logo from '../public/cards/cardback.png';
import './App.css';
import Board from './Board'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Set</h2>
        </div>
        <Board />
      </div>
    );
  }
}

export default App;
