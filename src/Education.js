import "./Education.css";
import { useState} from "react";
import {MdOutlineClose} from "react-icons/md";
import IconButton from '@mui/material/IconButton';

export default function Education(props) {



    return (
        <div className = "edu-content">
            <div className = "titleedu"> 
                What's the point?
            </div>
            <div className = "paragraph">
                Did you know that in 2017, over 785 million people
                didn't have access to basic water services? Not only that, but more
                than 884 million people didn't have safe water to drink.

                While this is improving, lack of basic sanitation services and
                access to clean water still remains a prevalent problem today.              
            </div>

            <div className = "paragraph">
                Here's where you can learn more and donate:
                <ul>
                    <li> <a href = "https://generosity.org/" target="_blank"> Generosity.org </a> </li> 
                    <li> <a href = "https://www.purewaterfortheworld.org/" target="_blank">Pure Water for the World</a></li>
                    <li> <a href = "https://www.bloodwater.org/" target="_blank">Blood:Water</a></li>
                    <li> <a href = "https://waterforgood.org/" target="_blank"> Water for Good </a> </li>
                    <li> <a href = "https://www.hopeoflifeintl.org/" target="_blank"> Hope of Life International</a> </li>
                 </ul>
            </div>
        </div>
    )
 
}