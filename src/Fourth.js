import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function Fourth() {
  const [lyrics, setLyrics] = useOutletContext();

  const updateInput = (e) => {
    const newLyric = e.target.value;
    setLyrics(newLyric);
  };

  return (
    <input
    style={{ width: 900, borderRadius: 20,height:75}}
    type="text"
      onInput={updateInput}
    />
  );
}
