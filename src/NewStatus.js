import React, { Component } from "react";

export default class NewStatus extends Component {
  render() {
    return (
      <form className="new-status__form">
        {/*
          Textbox input where we can type in our toots
        */}
        <input type="text" className="new-status__input" maxlength="40" />

        {/*
          Button that submits the newest toot and adds it to the feed
        */}
        <button className="new-status__button" type="submit">
          Toot
        </button>
      </form>
    );
  }
}
