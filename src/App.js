import logo from './logo.svg';
import './App.css';
import { Link, Route, Router, Routes,Navigate,Outlet } from 'react-router-dom';
import Singers from './Singers';
import First from './First';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';  


function App() {
  return (
    <div style={{display: 'flex', flexDirection:'column', justifyContent:'center',alignItems:'center',marginTop:60}}>
      <Routes>
        <Route path="/singer" element={<Singers/>}>
          <Route path="first" element={<First/>}/>
          <Route path="second" element={<Second/>}/>
          <Route path="third" element={<Third/>}/>
          <Route path="fourth" element={<Fourth/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
