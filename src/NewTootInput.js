import React from "react";

export default function NewTootInput({ inputValue, handleChange }) {
  return (
    <input
      type="text"
      className="new-toot__input"
      maxLength="40"
      value={inputValue}
      onChange={handleChange}
    />
  );
}
