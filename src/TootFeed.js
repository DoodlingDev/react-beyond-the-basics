import React from "react";

export default function TootFeed({ ...props }) {
  return (
    <ul className="toot-feed">
      <li className="toot-feed__toot">Toot one!</li>
      <li className="toot-feed__toot">Toot two!</li>
      <li className="toot-feed__toot">Toot three!</li>
    </ul>
  );
}
