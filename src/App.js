import './App.css';
import BottomNav from './BottomNav.js';
import WaterInput from "./WaterInput";
import {useState} from 'react';

export default function App(props) {
  const [donation, setDonation] = useState(0);
  const [goal, setGoal] = useState('');
  const [water, setWater] = useState(0);

 

  return (
    <div className = "App">
      <header className = "header">
        Hydrokeep
      </header>
      <div>
        {props.water}
      </div>
      <div className = "appnavigation"> 
        <WaterInput />
        {/* <BottomNav /> */}
      </div>
    </div>
  )
}