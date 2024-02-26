import { useContext, useEffect } from 'react'
import './Vehicles.css'
import ContextVariales from '../../context/contextVariables'
import AuthContext from "../../context/AuthProvider";
import { useNavigate } from 'react-router-dom';

const StationVehicle = ({vehicle}) => {
    const {setOpenRide, setRData} = useContext(ContextVariales)

    // const openMe = (e) => {
    //     e.preventDefault()
    //     setOpenRide(true)
    // }

    const getTime = (time) => {
        const specificDate = new Date(time); 
        const hours = specificDate.getHours(); 
        const minutes = specificDate.getMinutes();

        return `${hours}:${minutes}`;
    }

    return (
        <button className='Vehicle' onClick={()=>{setOpenRide(true);setRData(vehicle)}}>
            <div className="top side">
                <h3>{vehicle.plate}</h3>
                <p>{vehicle.passengers.length}/{vehicle.seats} <i className='bx bx-chair'></i></p>
            </div>
            <div className="bottom side">
                <h3>{getTime(vehicle.time)}</h3>
                <p>{vehicle.destination}</p>
            </div>
        </button>
    )
}

export default StationVehicle;