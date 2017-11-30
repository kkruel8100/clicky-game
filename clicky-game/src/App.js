import React, { Component } from 'react';
import NavBar from './components/NavBar/index';
import HeroCard from './components/HeroCard/index';
import heroes from './heroes.json';
import './App.css';

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    heroes
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Clicky Game!</h1>
            <h2>
              Click on an image to earn points, but don't click on any more than
              once!
            </h2>
          </header>
          <div className="container">
            {this.state.heroes.map(hero => (
              <HeroCard id={hero.id} name={hero.name} image={hero.image} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
