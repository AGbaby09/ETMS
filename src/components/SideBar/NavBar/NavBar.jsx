import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context/AuthProvider";
import "./NavBar.css";
// import axios from "axios"

const NavBar = () => {
    const navigate = useNavigate()
    const {auth} = useContext(AuthContext)
    return (  
        <nav id="SideBar">
            <div id="avatar">
                <div className="image">

                </div>
                <h3>User Name</h3>
                <p>{auth?.role === 121 ? 'Employee' : auth?.role === 212 ? 'Driver' : ''}</p>
            </div>
            <ul>
                <li>
                    <button className="al-c" onClick={()=>navigate("/loggedIn")}>
                        <i className='bx bxs-category-alt'></i>
                        Dashboard
                    </button>
                </li>
                {auth?.role === 911 && <li>
                    <button className="al-c" onClick={()=>navigate("/loggedIn/employees")}>
                        <i className='bx bxs-user' ></i>
                        Employees
                    </button>
                </li>}
                {auth?.role === 911 && <li>
                    <button className="al-c" onClick={()=>navigate("/loggedIn/drivers")}>
                        <i className='bx bx-id-card'></i>
                        Drivers
                    </button>
                </li>}
                {auth?.role === 911 && <li>
                    <button className="al-c" onClick={()=>navigate("/loggedIn/vehicles")}>
                        <i className='bx bxs-bus-school' ></i>
                        Vehicles
                    </button>
                </li>}
                {auth?.role !== 212 && <li>
                    <button className="al-c" onClick={()=>navigate("/loggedIn/station")}>
                        <i className='bx bxs-car-garage' ></i>
                        Station
                    </button>
                </li>}
            </ul>

            <ul className="secUL">
                <li>
                    <button className="setPro">
                        <i class='bx bxs-user-circle'></i>
                        Profile
                    </button>
                    <button className="setPro">
                        <i class='bx bx-exit'></i>
                        Logout
                    </button>
                </li>
            </ul>
        </nav>
    );
}
 
export default NavBar;