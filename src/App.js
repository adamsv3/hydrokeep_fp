import './App.css';
import WaterInput from './WaterInput.js';
import BottomNav from './BottomNav.js';
import {useState} from 'react';



function App() {

  const [wateramount, setWaterAmount] = useState('');

  return (
    <div className = "App">

      {/* The fish-bowl div displays the amount of water the user has inputted that day as it fills up */}
      <div className = "fish-bowl" />

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
