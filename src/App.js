import React, { Component } from 'react';
import logo from './logo3.png';
import './App.css';
import NewComposant from './NewCompo';
import Avatar from './Avatar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <NewComposant />
          <Avatar 
          image = 'https://www.supersoluce.com/sites/default/files/styles/exact_size/public/node/127828/kannahommeportrait.png?itok=xraZxxLv'
          firstName = "Perrine"
          lastName = "Martyris"
          />
          <Avatar 
          image = 'https://i.pinimg.com/originals/33/c5/2c/33c52c6a2a243bc785df4d2d6efbd9b3.png'
          firstName = "Toto"
          lastName = "Gogo"
          />
          <Avatar 
          image = 'https://vignette2.wikia.nocookie.net/dgraymansp/images/6/6f/Allen_Cuerpo_Casi_Completo_(FanArt).png/revision/latest?cb=20130507224558&path-prefix=es'
          firstName = "Super"
          lastName = "Man"
          />
        </header>
      </div>
    );
  }
}

export default App;


// en mode j'utilise map :

// const characters = {
//   {
//   image = 'https://www.supersoluce.com/sites/default/files/styles/exact_size/public/node/127828/kannahommeportrait.png?itok=xraZxxLv',
//   firstName = "Perrine",
//   lastName = "Martyris"
//   },
//   {
//     image = 'https://i.pinimg.com/originals/33/c5/2c/33c52c6a2a243bc785df4d2d6efbd9b3.png',
//     firstName = "Toto",
//     lastName = "Gogo"
//   }
//   {
//     image = 'https://vignette2.wikia.nocookie.net/dgraymansp/images/6/6f/Allen_Cuerpo_Casi_Completo_(FanArt).png/revision/latest?cb=20130507224558&path-prefix=es',
//     firstName = "Super",
//     lastName = "Man"
//   }
// }


//{characters.map((char, i) => {
// return <Avatar {...char} />;
// })}
