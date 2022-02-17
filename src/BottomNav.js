import "./BottomNav.css";
import { useState} from "react";
import { MdWaterDrop, MdSchool, MdOutlineWater} from "react-icons/md";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';


export default function BottomNav() {

    const [value, setValue] = useState(0); 

    return( 
        <BottomNavigation 
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
        }}
        >
            <BottomNavigationAction label="Fish Tank" icon={<MdOutlineWater />} />
            <BottomNavigationAction label="Water" icon={<MdWaterDrop/>} />
            <BottomNavigationAction label="Education" icon={<MdSchool />} />


        </BottomNavigation>
    )
}