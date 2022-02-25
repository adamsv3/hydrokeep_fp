import "./FishTank.css";
import { useState} from "react";
import {MdOutlineWater} from "react-icons/md";
import IconButton from '@mui/material/IconButton';



export default function FishTank(props) {

    return (
       <div> 
           fish tank
        </div>
    )
    





    //old logic
    // const [showFish, setShowFish] = useState(false) 

    // function x(){
    //     setShowFish(false);
    // }

    // if (showFish) {
    //     return(
    //     <div className = "fish">
    //         <div className = "fish-info">
    //             Lorem ipsum lorem ipsum lorem ipsum
    //         </div>
    //         <IconButton aria-label="fish-button" onClick = {x}>
    //             <MdOutlineWater />
    //         </IconButton>
    //     </div>)
    // }
    // return (
    //     <div className = "fish">
    //         <IconButton aria-label="fish-button" onClick = {() => setShowFish(true)}>
    //             <MdOutlineWater/>
    //         </IconButton>
    //     </div>
    // )
}