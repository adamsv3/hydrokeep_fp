import './App.css';
import WaterInput from './WaterInput.js';
import {useState} from 'react';



function App() {

let [wateramount, setWaterAmount] = useState('');
  
  return (
    <div className = "App">
      <div className = "fish-bowl">
      </div>

      <div className = "water-amount">
        <WaterInput setWaterAmount = {setWaterAmount} />
      </div>
    </div>
  )
}

export default App;
