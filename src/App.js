import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import  GenerateSimpson  from  './GenerateSimpson';
import  DisplaySimpson  from  './DisplaySimpson';

const  sampleSimpson = {
   quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
   character: "Nelson Muntz",
   image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
   characterDirection: "Left"
  }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // loading: false,
      // on peut mettre notre sampleEmployee par défaut
      // afin d'avoir toujours un employé d'affiché
      simpson:  sampleSimpson
    };
  }

  getSimpson() {
    // this.setState({loading: true})
    // Récupération de l'employé via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=5")
      .then(response  =>  response.json())
      .then(data  => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          // loading: false,
          simpson:  data[0],
        });
    });
}

  render() {
    // const text = this.state.loading ? "loading..." :
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <GenerateSimpson  selectSimpson={() =>  this.getSimpson()} />
          <DisplaySimpson  simpson={this.state.simpson}  />
        </header>
      </div>
    );
  }
}

export default App;
