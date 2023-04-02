import React, {useEffect, useState} from 'react' //usestate is a web hook
import {Link, useLocation} from "react-router-dom" //this is instead of <a></a> in react
import "../styles/Navbar.css";
import ReorderIcon from '@material-ui/icons/Reorder'

function Navbar() {
    const [expandNavbar,setExpandNavbar] = useState(false); //this to identify whether we have expanded the navbar or not

    const location = useLocation()

    useEffect(() =>{
        setExpandNavbar(false);
    },[location]);

    return ( //hamberger symbol
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
        <div className='toggleButton'>
            <button 
              onClick={() =>{
                setExpandNavbar((prev) => !prev);
                }}
            > 
                {" "}
                <ReorderIcon/>{" "} 
             </button>
        </div>
        <div className='links'>
            <Link to='/'> Home</Link>
            <Link to='/projects'> Projects</Link>
            <Link to='/experience'> Experience</Link>

        </div>
    </div>
  )
}

export default Navbar