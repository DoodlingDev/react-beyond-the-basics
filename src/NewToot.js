import React, { Component } from "react";
import NewTootInput from "./NewTootInput";

export default class NewToot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  updateInput = event => {
    this.setState({
      inputValue: event.target.value
    });
  }

  render() {
    return (
      <div className="new-toot__form">
        <NewTootInput
          handleChange={this.updateInput}
        />

        <button className="new-toot__button">Toot</button>
      </div>
    );
  }
}
