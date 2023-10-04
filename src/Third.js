import { useOutletContext } from "react-router-dom";
export default function Third() {
    const [lyrics, setLyrics] = useOutletContext();

    const handleChange = (e) => {
      const newLyric = e.target.value;
      setLyrics(prevLyrics => [...prevLyrics, newLyric]);
    };
    return (
        <input
        style={{ width: 900, height: 40, borderRadius: 20 }}
        type="text"
        onClick={handleChange}
      />
    )
  }
  