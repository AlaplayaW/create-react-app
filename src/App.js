import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (color, isWorking) {
    super (color, isWorking)
      this.state = {
        color: "#FF66FF", 
        isWorking: true
      }
  }

  render() {
    return (
      <div style={{backgroundColor: this.state.color}}>la couleur est {this.state.color}</div>
    )
  }
}

export default App;
