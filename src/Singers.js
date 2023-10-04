import { Link, Outlet} from "react-router-dom";
import { useState } from "react";


export default function Singers() {
  const [lyrics, setLyrics] = useState([]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
        gap:20
      }}
    >
      <h1 style={{ textAlign: "center" }}>Complete the Lyrics</h1>

      <div style={{ display: "flex", gap: 1 }}>
        <Link to="first" style={{ textDecoration: "none" }}>
          <button
            style={{
              width: 200,
              height: 80,
              backgroundColor: "lightpink",
              color: "white",
              fontSize: 22
            }}
          >
            FIRST SINGER
          </button>
        </Link>

        <Link to="second" style={{ textDecoration: "none" }}>
          <button
            style={{
              width: 200,
              height: 80,
              backgroundColor: "aquamarine",
              color: "white",
              fontSize: 20
            }}
          >
            SECOND SINGER
          </button>
        </Link>

        <Link to="third" style={{ textDecoration: "none" }}>
          <button
            style={{
              width: 200,
              height: 80,
              backgroundColor: "purple",
              color: "white",
              fontSize: 20
            }}
          >
            THIRD SINGER
          </button>
        </Link>

        <Link to="fourth" style={{ textDecoration: "none" }}>
          <button
            style={{
              width: 200,
              height: 80,
              backgroundColor: "grey",
              color: "white",
              fontSize: 20
            }}
          >
            FOURTH SINGER
          </button>
        </Link>
      </div>

      <Outlet context={[lyrics, setLyrics]} />
      
      <div style={{alignItems:'center',display:'flex',flexDirection:'column',gap:5, border: '4px solid black', width: 1000, height: 500, borderRadius: 20, marginTop: 10 }}>
  {lyrics.map((lyric, i) => (
    <div key={i} style={{marginTop:10, width:900, border:'1px solid'}}>
      {lyric}
    </div>
  ))}
</div>

    </div>
  );
}
