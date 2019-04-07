import React, { Component } from "react";
import TootHeader from "./TootHeader";
import NewToot from "./NewToot";
import TootFeed from "./TootFeed";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <TootHeader />

        <NewToot />
        <TootFeed />
      </div>
    );
  }
}

export default App;
