import "./Education.css";
import { useState} from "react";
import {MdOutlineClose} from "react-icons/md";
import IconButton from '@mui/material/IconButton';

export default function Education(props) {



    return (
        <div className = "edu-content">
            <div className = "title"> 
                What's the point?
            </div>
            <div className = "paragraph">
                Did you know that in 2017, over 785 million people
                didn't have access to basic water services? Not only that, but more
                than 884 million people didn't have safe water to drink.

                While this is improving, lack of basic sanitation services and
                access to clean water still remains a prevalent problem today.              
            </div>
        </div>
    )
 
}