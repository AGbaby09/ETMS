import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
// import axios from "axios"

const NavBar = () => {
    const navigate = useNavigate()
    return (  
        <nav id="SideBar">
            <div id="avatar">
                <div className="image">

                </div>
                <h3>User Name</h3>
                <p>Driver</p>
            </div>
            <ul>
                <li>
                    <button className="al-c" onClick={()=>navigate("/")}>
                        <i className='bx bxs-category-alt'></i>
                        Dashboard
                    </button>
                </li>
                <li>
                    <button className="al-c" onClick={()=>navigate("/loggedIn/employees")}>
                        <i className='bx bxs-user' ></i>
                        Employees
                    </button>
                </li>
                <li>
                    <button className="al-c" onClick={()=>navigate("/loggedIn/drivers")}>
                        <i className='bx bx-id-card'></i>
                        Drivers
                    </button>
                </li>
                <li>
                    <button className="al-c" onClick={()=>navigate("/loggedIn/vehicles")}>
                        <i className='bx bxs-bus-school' ></i>
                        Vehicles
                    </button>
                </li>
                <li>
                    <button className="al-c" onClick={()=>navigate("/loggedIn/station")}>
                        <i className='bx bxs-car-garage' ></i>
                        Station
                    </button>
                </li>
            </ul>

            <ul className="secUL">
                <li>
                    <button className="setPro">
                        <i class='bx bx-cog'></i>
                        Settings
                    </button>
                    <button className="setPro">
                        <i class='bx bxs-user-circle'></i>
                        Profile
                    </button>
                </li>
            </ul>
        </nav>
    );
}
 
export default NavBar;