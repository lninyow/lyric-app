import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

export default function Singers() {
  const singerData = [
    { name: "First", color: "lightpink" },
    { name: "Second", color: "aquamarine" },
    { name: "Third", color: "purple" },
    { name: "Fourth", color: "red" }
  ];

  const [lyrics, setLyrics] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  
  const changeSinger = (index) => {
    if (currentIndex === null) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }


    setLyrics(prevLyrics => {
      const updatedLyrics = [...prevLyrics];
      updatedLyrics.push({ index, text: "" });
      return updatedLyrics;
    });
    console.log(lyrics.length)
  };


  const updateLyric = (index, text) => {
    setLyrics(prevLyrics => {
      const updatedLyrics = [...prevLyrics];
      updatedLyrics[index].text = text;
      return updatedLyrics;
    });
  };



  
  return (



    <div style={{display: "flex",flexDirection: "column",alignItems: "center",justifyContent: "center",height: "80vh",gap: 20}}>
     
      <h1>Complete the Lyrics</h1>

        <div style={{ display: "flex", gap: 1 }}>
          {singerData.map((singer, index) => (
            <Link to={singer.name} style={{ textDecoration: "none" }} key={index}>
              <button
                style={{
                  width: 200,
                  height: 80,
                  backgroundColor: singer.color,
                  color: "white",
                  fontSize: 24,
                  margin:2
                }}
                onClick={() => changeSinger(index)}
              >
                {singer.name}
              </button>
            </Link>
          ))}
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
            <div key={i} style={{fontSize:21,marginTop: 2, width: 900,padding:10,borderRadius:20,fontWeight:'bolder', backgroundColor: singerData[lyricData.index].color }}>
              {lyricData.text}
            </div>
          )
        ))}
      </div>



    </div>
  );
}
