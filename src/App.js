
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quotes from "./Quotes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWorking : false,
      on: props.on,
    };
  }
  handleClick = () => {
    this.setState({ 
      isWorking: !this.state.isWorking,
      on: !this.state.on});
  };


  render() {
    const light = this.state.on ? 'Homer is working' : 'Homer is not working !';
    const color = this.state.on ? '#3fc380' : '#f03434';
    return (
      <div className="App">
        <header className="App-header">
          {this.state.isWorking
          ? <img src={logo} className="App-logo-isWorking" alt="logo" />
          : <img src={logo} className="App-logo" alt="logo" />}
          <h1 className="App-title">Simpsons Quotes</h1>
          <button 
            onClick={this.handleClick} style={{backgroundColor : color}}>{light.toUpperCase()}
          </button>
        </header>
        <Quotes />
      </div>
    );
  }
}

export default App;
