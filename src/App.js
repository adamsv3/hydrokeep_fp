import './App.css';
import BottomNav from './BottomNav.js';
import {MdSchool, MdOutlineClose} from "react-icons/md";
import Education from './Education.js';
import WaterInput from "./WaterInput";
import IconButton from '@mui/material/IconButton';
import {useState} from 'react';
import mySeaweed from './mySeaweed.png'

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
       <IconButton onClick = {eduoff} className = "learnmorebutton"> <MdOutlineClose /> </IconButton> 
      </header>
      <div className = "appstuff"> 
          <Education />
      </div>
      {/* <div>
        <img className = "seaweed" src = {mySeaweed}> </img>
      </div> */}
      {/* <footer className ="footer">
        <img className = "seaweed" src={seaweed} alt="seaweed" />
        <img className = "seaweed" src={seaweed} alt="seaweed" />
        <img className = "seaweed" src={seaweed} alt="seaweed" />
        <img className = "seaweed" src={seaweed} alt="seaweed" />
        <img className = "seaweed" src={seaweed} alt="seaweed" />
        <img className = "seaweed" src={seaweed} alt="seaweed" />
        <img className = "seaweed" src={seaweed} alt="seaweed" />
        <img className = "seaweed" src={seaweed} alt="seaweed" />
        <img className = "seaweed" src={seaweed} alt="seaweed" />
      </footer> */}
    </div>
  )
}

  return (
    <div className = "App">
      <header className = "header">
      <div className = "title">
        Hydrokeep
      </div> 
      <button className = "learnmorebutton" onClick = {edu}> Learn more </button> 
      </header>
      <div className = "appstuff"> 
        <WaterInput />
      </div>
      {/* <div>
        <img src = {mySeaweed}> </img>
      </div> */}

      </div>
   
  )
}
