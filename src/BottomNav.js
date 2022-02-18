import "./BottomNav.css";
import { useState} from "react";
import { MdWaterDrop, MdSchool, MdOutlineWater} from "react-icons/md";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';


export default function BottomNav(props) {

    const [value, setValue] = useState(0);

    return( 
        <BottomNavigation 
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
        }}>

            {/* Need to figure out how to make it so that onClick these display different pages. 
                Needs componenets that are set to false and onClick are set to true. But I don't quite
                know where to put that */}
            <BottomNavigationAction label="Fish Tank" icon={<MdOutlineWater />} />
            <BottomNavigationAction label="Water" icon={<MdWaterDrop/>} />
            <BottomNavigationAction label="Education" icon={<MdSchool />} />
        </BottomNavigation>
    )
}