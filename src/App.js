import './App.css';
import {MdOutlineClose} from "react-icons/md";
import Education from './Education.js';
import WaterInput from "./WaterInput";
import IconButton from '@mui/material/IconButton';
import {useState} from 'react';

export default function App() {

//showEdu is triggered to show the educational piece to the applicaiton
const [showEdu, setShowEdu] = useState(false) 

//shows edu info when "learn more" button is clicked 
function edu(){
  setShowEdu(true)
}

//closes edu info when "x" button is clicked
function eduoff(){
  setShowEdu(false)
}

// if the button is clicked, education info is return
if (showEdu) {
  return (
    <div className = "App">
      <header className = "header">
      <div className = "title">
        Hydrokeep
      </div> 
       <IconButton onClick = {eduoff} className = "learnmore-button"> <MdOutlineClose /> </IconButton> 
      </header>
      <div className = "app-display"> 
          <Education />
      </div>
    </div>
  )
}

//if x button is clicked, normal waterinput is returned
  return (
    <div className = "App">
      <header className = "header">
        <div className = "title">
          Hydrokeep
        </div> 
        <button className = "learnmore-button" onClick = {edu}> Learn more </button> 
      </header>
        <div className = "app-display"> 
          <WaterInput />
        </div>
      </div>
   
  )
}
