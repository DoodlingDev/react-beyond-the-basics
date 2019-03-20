import React, { Component } from 'react';
import TooterIcon from './TooterIcon';
import NewStatus from './NewStatus';
import TootFeed from './TootFeed';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TooterIcon />
        <h1>Tooter!</h1>

        <NewStatus />
        <TootFeed />
      </div>
    );
  }
}

export default App;
