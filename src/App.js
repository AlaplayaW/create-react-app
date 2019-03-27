
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quotes from "./Quotes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWorking : false,
    
    };
  }
  handleClick = () => {
    this.setState({ isWorking: !this.state.isWorking,  });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.isWorking
          ? <img src={logo} className="App-logo" alt="logo" />
          : <img src={logo} className="App-logo-isWorking" alt="logo" />}
          <h1 className="App-title">Simpsons Quotes</h1>
          <button onClick={this.handleClick}>Homer is working</button>
        </header>
        <Quotes />
      </div>
    );
  }
}

export default App;
