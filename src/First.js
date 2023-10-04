import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function First() {
  const [lyrics, setLyrics] = useOutletContext();
  const [newLyric, setNewLyric] = useState("");

  const handleChange = (e) => {
    setNewLyric(e.target.value);
    setLyrics((prevLyrics) => {
      const updatedLyrics = [...prevLyrics];
      updatedLyrics[updatedLyrics.length - 1] = e.target.value;
      return updatedLyrics;
    });
  };

  return (
    <input
      style={{ width: 900, height: 40, borderRadius: 20 }}
      type="text"
      value={newLyric}
      onChange={handleChange}
    />
  );
}
