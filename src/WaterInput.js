import "./WaterInput.css";
import { useState} from "react";

export default function WaterInput(props) {
    const [donation, setDonation] = useState('');
    const [goal, setGoal] = useState('');
    const [water, setWater] = useState('');

    function donoclick(){
        setDonation(donation);
    }
    
    console.log(donation);
    return (
        <div className = "content">

            Donation
            <div className = "donation"> 
                <input className = "donation-input" placeholder="$" 
                    onChange = {(e) => setDonation(e.target.value)}
                    value = {donation}
                />
                <button onClick = {donoclick}>
                    OK
                </button>
            </div>
            Water Goal
            <div className = "goal">
                <input className = "goal-input" placeholder = "oz" />
                <button>
                        OK
                </button>
            </div>
            Water Intake
            <div className ="water">
                <input className = "water-input" placeholder = "oz" />
                <button>
                        OK
                </button>
            </div>
        </div>
    )



    // old logic
    // const [showWater, setShowWater] = useState(false) 
    // const [amount, setAmount] = useState('');

    // function x(){
    //     setShowWater(false);
    // }
    


    // if (showWater) {
    //     return(
    //     <div className = "water">
    //         <div className = "water-input" />
    //             How much water have you drank?
    //         <input
    //             onChange = {(e) => setAmount(e.target.value)}
    //             value = {amount}
    //         >
    //         </input>
    //         <button className = "amount-button"
    //             onClick = {(e) => setAmount(e.target.value)}
    //         >
    //             OK
    //         </button>
    //         <IconButton aria-label="water-button" onClick = {x}>
    //             <MdWaterDrop />
    //         </IconButton>
    //     </div>)
    // }
    // console.log(setAmount)
    // return (
    //     <div className = "water">
    //         <IconButton aria-label="water-button" onClick = {() => setShowWater(true)}>
    //             <MdWaterDrop />
    //         </IconButton>
    //     </div>

    // )

   
    // console.log(amount);
    // return (
    //     <div className = "set-water">
    //         <input className = "set-water-input"
    //             value = {amount}
    //             onChange = {(e) => setAmount(e.target.value)}
    //         />
    //         <button className = "set-water-button"
    //             onClick = {x} > OK
    //         </button>

    //     </div>
    // )


    }