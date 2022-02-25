import './App.css';
import WaterInput from './WaterInput.js';
import Education from './Education.js';
import FishTank from './FishTank.js';
import BottomNav from './BottomNav.js';
import {useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}



function App(props) {

  return (
    <div className = "App">
      <header className = "header">
        Hydrokeep
      </header>
      <div className = "content"> 
        {/* <Education />
        <WaterInput/>
        <FishTank /> */}
        <BottomNav />
      </div>
    </div>
  )
}