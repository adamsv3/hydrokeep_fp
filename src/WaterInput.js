import "./WaterInput.css";
import { useState} from "react";

export default function WaterInput(props) {

    const [donation, setDonation] = useState(null);
    const [fakegoal, setFakeGoal] = useState(null);
    const [goal, setGoal] = useState(null);
    const [water, setWater] = useState(0);
    const [waterInfo, setWaterInfo] = useState(false);


    if (goal === null) {
        return (
            <div className = "goalinput">
                <div className = "question"> 
                    What is your water goal?
                </div>
                <div className = "goalinput-input">
                    <div className = "information-box"> 
                        The amount of water you drink daily depends on many different factors.
                        Use <a href ="https://www.everydayhealth.com/dehydration/hydration-calculator/">this calculator </a> 
                        to determine how much water you should drink in a day.
                    </div>
                    <input
                        placeholder = "oz" 
                        value = {fakegoal}
                        onChange = {(e) => setFakeGoal (e.target.value)}>
                    </input>
                </div>

                <div className = "question"> 
                    What is your donation for the day?
                </div>

                <div className = "goalinput-input">
                    <div className = "information-box"> 
                        Wager money on whether or not you can complete your water goal! If you don't meet
                        your water goal for the day, the amount yout input here will be donated to clean water
                        charities. Click "Learn More" in the corner to learn more.
                    </div>
                    <input
                        placeholder = "$" 
                        value = {donation}
                        onChange = {(e) => setDonation (e.target.value)}>
                    </input>
                </div>

                <button onClick = {(e) => setGoal(fakegoal)}> Set Goals </button>

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
            <div className = "waterinput">
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
                </div>
            <div className = "input-displays"> 
                <span> Goal: {goal} oz </span>
                <span> Donation: ${donation||"0"} </span>
            </div>
            </div>




        </div>
    )

    }