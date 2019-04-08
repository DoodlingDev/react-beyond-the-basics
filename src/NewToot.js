import React, { Component } from "react";
import NewTootInput from "./NewTootInput";

export default class NewToot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tootInputValue: "",
    };
  }

  updateTootValue = event => {
    const evt = {...event};
    this.setState(oldState => {
      const newState = { ...oldState };
      newState.tootInputValue = evt.target.value;

      return newState;
    });
  };

  clearNewToot = () => {
    this.setState(oldState => {
      const newState = {...oldState};
      newState.tootInputValue = "";
      return newState;
    });
  }

  onSubmit = event => {
    this.props.handleSubmit(this.state.tootInputValue);
    this.clearNewToot();
  };

  render() {
    return (
      <div className="new-toot__form">
        <NewTootInput
          inputValue={this.state.tootInputValue}
          handleChange={this.updateTootValue}
        />

        <button className="new-toot__button" onClick={this.onSubmit}>
          Toot
        </button>
      </div>
    );
  }
}
