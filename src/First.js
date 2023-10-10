import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function First() {
  const [inputValue, setInputValue] = useState(""); 
  const [lyrics, setLyrics] = useOutletContext();

  const updateInput = (e) => {
    const newLyric = e.target.value;
    setInputValue(newLyric); 
    setLyrics(newLyric); 
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
