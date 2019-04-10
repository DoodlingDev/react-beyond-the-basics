import React from "react";

export default function NewTootInput(props) {
  return (
    <input
      type="text"
      className="new-toot__input"
      maxLength="40"
      onChange={props.handleChange}
      value={props.tootValue}
    />
  );
}
