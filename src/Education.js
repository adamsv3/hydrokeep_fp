import "./Education.css";
import { useState} from "react";
import {MdSchool} from "react-icons/md";
import IconButton from '@mui/material/IconButton';

export default function Education(props) {

    return (
        <div className = "content">
            lorem ipsum
        </div>
    )
    // const [showEdu, setShowEdu] = useState(false) 

    // function x(){
    //     setShowEdu(false);
    // }

    // if (showEdu) {
    //     return(
    //     <div className = "edu">
    //         <span className = "edu-info">
    //             Lorem ipsum lorem ipsum lorem ipsum
    //         </span>
    //         <IconButton aria-label="edu-button" onClick = {x}>
    //             <MdSchool />
    //         </IconButton>
    //     </div>)
    // }
    // return (
    //     <div className = "edu">
    //         <IconButton aria-label="edu-button" onClick = {() => setShowEdu(true)}>
    //             <MdSchool />
    //         </IconButton>
    //     </div>
    // )
}