import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function Fourth() {
  const [inputValue, setInputValue] = useState(""); // New state to hold input value
  const [lyrics, setLyrics] = useOutletContext();

  const updateInput = (e) => {
    const newLyric = e.target.value;
    setInputValue(newLyric); // Update the input value
    setLyrics(newLyric); // Pass the new lyric as context
  };

  return (
    <input
      style={{ width: 900, height: 40, borderRadius: 20 }}
      type="text"
      value={inputValue}
      onInput={updateInput}
    />
  );
}
