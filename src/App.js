import './App.css';
import WaterInput from './WaterInput.js';
import Education from './Education.js';
import FishTank from './FishTank.js';
import BottomNav from './BottomNav.js';
import {useState} from 'react';




function App(props) {

  const [wateramount, setWaterAmount] = useState('');
 

  return (
    <div className = "App">

      {/* The fish-bowl div displays the amount of water the user has inputted that day as it fills up */}
      <div className = "fish-bowl" >
          <span>
            {/* was hoping this would display their value in the fishtank but it obviously does not ): */}
          {props.wateramount} 
          </span>
      </div>

      {/* The water-amount div allows for users to continuously input their water intake */}
      <div className = "water-amount">
        <WaterInput setWaterAmount = {setWaterAmount}/>
      </div>
      
      {/* <BottomNav> is a component from MUI, allowing for a constant bottom Nav for each page */}
      <div className = "bottom-nav">
        {/* Component that changes depending on what the user clicks on */}
          <BottomNav />
      </div>
    </div>
  )
}


// my own nav bar
        {/* <div className = "bar">
          <button>
              <MdOutlineWater />
            </button>
            <button>
              <MdWaterDrop />
            </button>
            <button>
              <MdSchool />
            </button> */}

export default App;
