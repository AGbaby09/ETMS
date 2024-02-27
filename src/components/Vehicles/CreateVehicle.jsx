import { useContext, useEffect } from 'react'
import './Vehicles.css'
import ContextVariales from '../../context/contextVariables'
import AuthContext from "../../context/AuthProvider";
import { useNavigate } from 'react-router-dom';

const CreateVehicle = ({vehicle}) => {
    const {setOpenV, setVData, setCloseV} = useContext(ContextVariales)

    return (
        <button className='Vehicle' onClick={()=>{setVData(vehicle);vehicle.status === 'closed' && setOpenV(true);vehicle.status === 'open' && setCloseV(true)}} >
            <div className="top side">
                <h3>{vehicle.plate}</h3>
                <p> {vehicle.seats} <i className='bx bx-chair'></i></p>
            </div>
            <div className="bottom side">
                <h3>{vehicle.status}</h3>
                <p>{vehicle.brand}</p>
            </div>
        </button>
    )
}

export default CreateVehicle;