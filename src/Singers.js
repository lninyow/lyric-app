import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

export default function Singers() {
  const singerData = [
    { name: "FIRST", color: "lightpink" },
    { name: "SECOND", color: "aquamarine" },
    { name: "THIRD", color: "purple" },
    { name: "FOURTH", color: "grey" }
  ];

  const [lyrics, setLyrics] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [SingerIndex, setSingerIndex] = useState(null);

  
  const changeSinger = (index) => {
    if (currentIndex === null) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }

    setSingerIndex(index);

    setLyrics(prevLyrics => {
      const updatedLyrics = [...prevLyrics];
      updatedLyrics.push({ index, text: "" });
      return updatedLyrics;
    });
  };


  const updateLyric = (index, text) => {
    setLyrics(prevLyrics => {
      const updatedLyrics = [...prevLyrics];
      updatedLyrics[index].text = text;
      return updatedLyrics;
    });
  };



  
  return (



    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
        gap: 20
      }}
    >
      <h1 style={{ textAlign: "center" }}>Complete the Lyrics</h1>




      <div style={{ display: "flex", gap: 1 }}>
        <div style={{ display: "flex", gap: 1 }}>
          {singerData.map((singer, index) => (
            <Link to={singer.name.toLowerCase()} style={{ textDecoration: "none" }} key={index}>
              <button
                style={{
                  width: 200,
                  height: 80,
                  backgroundColor: singer.color,
                  color: "white",
                  fontSize: 20,
                  margin:2
                }}
                onClick={() => changeSinger(index)}
              >
                {singer.name}
              </button>
            </Link>
          ))}
        </div>
      </div>



      {currentIndex !== null && (
        <Outlet
          context={[
            lyrics[lyrics.length - 1]?.text || "",
            (newLyric) => {
              updateLyric(lyrics.length - 1, newLyric); 
            }
          ]}
        />
      )}



<div style={{ alignItems: "center", display: "flex", flexDirection: "column", gap: 5, border: "4px solid black", width: 1000, height: 800, borderRadius: 20, marginTop: 10}}>
        {lyrics.map((lyricData, i) => (
          lyricData.text && (
            <div key={i} style={{ marginTop: 2, width: 900,padding:10,borderRadius:20,fontWeight:'bolder', backgroundColor: singerData[lyricData.index].color }}>
              {lyricData.text}
            </div>
          )
        ))}
      </div>



    </div>
  );
}
