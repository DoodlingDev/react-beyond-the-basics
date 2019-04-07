import React, { Component } from "react";

export default class NewToot extends Component {
  render() {
    return (
      <form className="new-toot__form">
        <input type="text" className="new-toot__input" maxlength="40" />

        <button className="new-toot__button">Toot</button>
      </form>
    );
  }
}
