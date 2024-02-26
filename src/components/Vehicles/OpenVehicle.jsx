import { useContext, useState } from 'react';
import axios from 'axios';
import './Vehicles.css';
import ContextVariables from '../../context/contextVariables';
import { useNavigate } from 'react-router-dom';

const OpenVehicle = () => {
    const navigate = useNavigate();
    const { setOpenV, vData, domain } = useContext(ContextVariables);
    const [driver, setDriver] = useState('');
    const [destination, setDestination] = useState('');
    const [time, setTime] = useState('');

    const [isLoading, setIsLoading] = useState(false)

    const closeModal = (e) => {
        e.preventDefault();
        setOpenV(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)

        // Parse time string to Date object
        const [hours, minutes] = time.split(':');
        const timeDate = new Date();
        timeDate.setHours(parseInt(hours, 10));
        timeDate.setMinutes(parseInt(minutes, 10));

        try {
            const response = await axios.put(`${domain}/api/v1/vehicle/open`, { driver, destination, time:timeDate, id: vData._id });
            if(response.data){
                console.log(response.data); 
                setIsLoading(false)
                setOpenV(false);
                navigate('/loggedIn/vehicles')
            }
        } catch (error) {
            console.error('Error updating vehicle:', error);
            setIsLoading(false)
        }
        console.log(vData._id, timeDate)
    }

    return (
        <section id='OpenVehicle' className='modal'>
            <form onSubmit={handleSubmit}>
                <h1 className='center'>{vData.plate}</h1>

                <label>Driver</label>
                <input required type="text" value={driver} onChange={(e) => setDriver(e.target.value)} />

                <label>Destination</label>
                <input required type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />

                <label>Time of Departure</label>
                <input required type="time" value={time} onChange={(e) => setTime(e.target.value)} />

                <div className="buttons spBtn">
                    <button className='center' onClick={closeModal}>Close</button>
                    {isLoading ? <button disabled type="submit" className='center'>Opening</button> : <button type="submit" className='center'>Open Vehicle</button>}
                </div>
            </form>
        </section>
    )
}

export default OpenVehicle;
