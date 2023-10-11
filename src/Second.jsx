import { useOutletContext } from "react-router-dom";

export default function Second() {
  const [lyrics, setLyrics] = useOutletContext();

  const updateInput = (e) => {
    const newLyric = e.target.value;
    setLyrics(newLyric);
  };

  return (
    <input
    style={{ width: 900, borderRadius: 20,height:75,fontSize:21}}
    type="text"
      onInput={updateInput}
    />
  );
}
