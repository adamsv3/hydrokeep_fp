import "./WaterInput.css";
import { useState} from "react";

export default function WaterInput(props) {
    
    const [amount, setAmount] = useState('');


    function ok() {
        props.setWaterAmount(amount);
        setAmount('');
    }

    return (
        <div className = "set-water">
            <input className = "set-water-input"
                value = {amount}
                onChange = {(e) => setAmount(e.target.value)}
            />
            <button className = "set-water-button"
                onClick = {ok} > OK
            </button>
            
        </div>
    )

    // const [showInput, setShowInput] = useState(false) 
    // const [amount, setAmount] = useState("")


    // function ok(){
    //     props.setWaterAmount(amount);
    //     setShowInput(false);
    // }

    // if (showInput) {
    //     return(
    //     <div className = "name-picker">
    //         <input className = "name-picker-input"
    //             onChange = {(e) => setAmount(e.target.value)}
    //             value = {amount}
    //         />
    //         <button className = "name-picker-button" onClick = {ok}> OK </button>
    //     </div>)
    // }
    // return (
    //     <div className = "name-picker">
    //         <span className = "name-picker-name">
    //             {amount || 'Set Amount:'}
    //         </span>
    //         <button className = "button"
            
    //         onClick = {() => setShowInput(true)} >

    //             </button> 
    //     </div>
    // )
    }