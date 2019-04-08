import React from "react";
import NoToots from "./NoToots";

export default function TootFeed({ tootData }) {
  function reverse(array) {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
      newArray.push(array[i]);
    }
    return newArray;
  }

  return (
    <ul className="toot-feed">
      {tootData.length < 1 ? (
        <NoToots />
      ) : (
        reverse(tootData).map(toot => {
          return (
            <li
              key={`${toot.toot}-${toot.timestamp}`}
              className="toot-feed__toot"
            >
              {toot.toot}
            </li>
          );
        })
      )}
    </ul>
  );
}
