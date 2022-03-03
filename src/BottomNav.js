import "./BottomNav.css";
import { useState} from "react";
import FishTank from './FishTank.js';
import WaterInput from './WaterInput.js';
import Education from './Education.js';
import { MdWaterDrop, MdSchool, MdOutlineWater, MdOutlineClose} from "react-icons/md";
import IconButton from '@mui/material/IconButton';

export default function BottomNav(props) {

    const [showFish, setShowFish] = useState(false);
    const [showWater, setShowWater] = useState(false);
    const [showEdu, setShowEdu] = useState(false);
    let [dono, setDono] = useState('');

    // const [value, setValue] = useState(0);
    function fishstate(){
        setShowFish(false);
    }

    function waterstate(){
        setShowWater(false);
    }

    function edustate(){
        setShowEdu(false);
    }
 
    if(showFish){
        // waterstate;
        // edustate;
    return[
        <FishTank />,
        <IconButton aria-label="x-button" onClick = {fishstate} size = "large">
            <MdOutlineClose />
         </IconButton>  
    ]
    }
    
    if(showWater){
        // fishstate;
        // edustate;
        return[
            <WaterInput setDono = {setDono}/>,
            <IconButton aria-label="x-button" onClick = {waterstate} size = "large">
                <MdOutlineClose />
             </IconButton>    
        ]
    }

    if(showEdu){
        // waterstate;
        // edustate;
        return[
            <Education />,
            <IconButton aria-label="x-button" onClick = {edustate} size = "large" >
                <MdOutlineClose />
            </IconButton> 
        ]
    }

    return (
        <div className = "nav">
            <IconButton aria-label="fish-button" onClick = {() => setShowFish(true)} size = "large">
                <MdOutlineWater/>
            </IconButton>
            <IconButton aria-label="water-button" onClick = {() => setShowWater(true)} size = "large">
                <MdWaterDrop/>
            </IconButton>
            <IconButton aria-label="edu-button" onClick = {() => setShowEdu(true)} size = "large">
                <MdSchool/>
            </IconButton>
        </div>
    )
}
