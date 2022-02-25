import "./BottomNav.css";
import { useState} from "react";
import FishTank from './FishTank.js';
import WaterInput from './WaterInput.js';
import Education from './Education.js';
import { MdWaterDrop, MdSchool, MdOutlineWater, MdOutlineClose} from "react-icons/md";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import IconButton from '@mui/material/IconButton';

export default function BottomNav(props) {

    const [showFish, setShowFish] = useState(false);
    const [showWater, setShowWater] = useState(false);
    const [showEdu, setShowEdu] = useState(false);


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
        <IconButton aria-label="fish-button" onClick = {fishstate} >
            <MdOutlineClose />
         </IconButton>  
    ]
    }
    
    if(showWater){
        // fishstate;
        // edustate;
        return[
            <WaterInput />,
            <IconButton aria-label="water-button" onClick = {waterstate} >
                <MdOutlineClose />
             </IconButton>    
        ]
    }

    if(showEdu){
        // waterstate;
        // edustate;
        return[
            <Education />,
            <IconButton aria-label="water-button" onClick = {edustate} >
                <MdOutlineClose />
            </IconButton> 
        ]
    }

    return (
        <div className = "nav">
            <IconButton aria-label="fish-button" onClick = {() => setShowFish(true)}>
                <MdOutlineWater/>
            </IconButton>
            <IconButton aria-label="water-button" onClick = {() => setShowWater(true)}>
                <MdWaterDrop/>
            </IconButton>
            <IconButton aria-label="edu-button" onClick = {() => setShowEdu(true)}>
                <MdSchool/>
            </IconButton>
        </div>
    )
}


        // <BottomNavigation 
        //     showLabels
        //     value={value}
        //     onChange={(event, newValue) => {
        //         setValue(newValue);}}
        //     >

        //     {/* Need to figure out how to make it so that onClick these display different pages. 
        //         Needs componenets that are set to false and onClick are set to true. But I don't quite
        //         know where to put that */}
        //     <BottomNavigationAction 
        //         label="Fish Tank" 
        //         icon={<MdOutlineWater />} 

        //     />
        //     <BottomNavigationAction label="Water" icon={<MdWaterDrop/>} />
        //     <BottomNavigationAction label="Education" icon={<MdSchool />} />
        // </BottomNavigation>