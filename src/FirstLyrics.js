// FirstLyrics.js

import React from "react";

export default function FirstLyrics({ message }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: 900, height: 600, border: '4px solid lightgrey', marginTop: 30, borderRadius: 30 }}>
      <p>{message}</p>
    </div>
  );
}
