import React, { Component } from "react";
import TootHeader from "./TootHeader";
import NewToot from "./NewToot";
import TootFeed from "./TootFeed";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toots: []
    };
  }

  handleSubmit = newToot => {
    this.setState(oldState => {
      const newState = {...oldState};
      newState.toots.push({
        toot: newToot,
        timestamp: Date.now(),
      });

      return newState;
    });
  }

  render() {
    return (
      <div className="App">
        <TootHeader />

        <NewToot
          handleSubmit={this.handleSubmit}
        />
        <TootFeed
          tootData={this.state.toots}
        />
      </div>
    );
  }
}

export default App;
