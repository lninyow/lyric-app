import './App.css';
import { Route, Routes } from 'react-router-dom';
import Singers from './Singers';
import First from './First';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';  
import Main from './Main';


function App() {
  return (
    <div style={{display: 'flex', flexDirection:'column', justifyContent:'center',alignItems:'center',marginTop:60}}>
      <Routes>
        <Route path ="/" element={<Main/>}/>
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
