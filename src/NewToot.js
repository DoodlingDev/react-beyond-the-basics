import React, { Component } from "react";
import NewTootInput from "./NewTootInput";

export default class NewToot extends Component {
  render() {
    return (
      <form className="new-toot__form">
        <NewTootInput />

        <button className="new-toot__button">Toot</button>
      </form>
    );
  }
}
