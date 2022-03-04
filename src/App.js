import './App.css';
import BottomNav from './BottomNav.js';
import {MdSchool, MdOutlineClose} from "react-icons/md";
import Education from './Education.js';
import WaterInput from "./WaterInput";
import IconButton from '@mui/material/IconButton';
import {useState} from 'react';

export default function App(props) {
  
const [showEdu, setShowEdu] = useState(false) 

function edu(){
  setShowEdu(true)
}

function eduoff(){
  setShowEdu(false)
}

if (showEdu) {
  return (
    <div className = "App">
      <header className = "header">
      <div className = "title">
        Hydrokeep
      </div> 
       <IconButton onClick = {eduoff} > <MdOutlineClose /> </IconButton> 
      </header>
      <div className = "appnavigation"> 
        <Education />
        {/* <BottomNav /> */}
      </div>
    </div>
  )
}

  return (
    <div className = "App">
      <header className = "header">
      <div className = "title">
        Hydrokeep
      </div> 
       <IconButton onClick = {edu} > <MdSchool /> </IconButton> 
      </header>
      <div className = "appnavigation"> 
        <WaterInput />
      </div>
    </div>
  )
}
