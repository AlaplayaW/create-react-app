import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Characters from "./Character";

const files = [
  {
    name: "Gandalf",
    film: "Seigneur des anneaux",
    real: "Peter Jackson"
  },
  {
    name: "Dark Vador",
    film: "Star Wars",
    real: "Disney"
  }  
]
console.table([files]);

class App extends Component {
  render () {
    return (
      <div >
        {/* <Characters name="Gandalf" film="Seigneur des anneaux" real="Peter Jackson" />
        <Characters name="Dark Vador" film="Coucou c'est moi" /> */}
        {files.map((f) => {
          return <Characters {...f} />
        })}
      </div>
    )
  }
}

export default App;
