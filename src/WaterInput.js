import "./WaterInput.css";
import Donation from "./Donation.js"
import { useState} from "react";

export default function WaterInput(props) {

    const [donation, setDonation] = useState(0);
    const [goal, setGoal] = useState(0);
    const [water, setWater] = useState(0);

    if (goal === 0) {
        return (

            <div className = "goalinput">
                What is your water goal?
                <input placeholder = "oz" 
                    value = {goal}
                    onChange = {(e) => setGoal(e.target.value)}/>
            </div>

        )
    }


    if ( water >= goal  && water !== 0 && goal !== 0) {
        return(
            <div className ="achieved"> 
                <span> Congrats! You met your water goal. </span>
                <span> Your goal: {goal} oz </span>
                <span> You drank: {water} oz</span> 
            </div>

        )
    }
    

    return (
        <div className = "content">
            Goal: {goal} oz
            <div className = "waterinput">
                <span> How much water did you drink?    </span> 
                <span className = "display"> {water} oz</span>
                <div className = "buttons"> 
                    <button onClick = {(e) => setWater(water + 6)}>
                        6oz   
                    </button>

                    <button onClick = {(e) => setWater(water + 8)}>
                        8oz   
                    </button>

                    <button onClick = {(e) => setWater(water + 12)}>
                        12oz   
                    </button>

                    <button onClick = {(e) => setWater(water + 16)}>
                        16oz   
                    </button>

                    <button onClick = {(e) => setWater(0)}>
                        Clear
                    </button>
                </div>
            </div>




        </div>
    )

    }