import { useContext, useState } from 'react';
import './Vehicles.css'
import ContextVariales from '../../context/contextVariables';
import axios from 'axios';

const CloseVehicle = () => {
    const {setCloseV, vData, domain} = useContext(ContextVariales)
    const [isLoading, setIsLoading] = useState(false)

    const handleClose = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        await axios.put(`${domain}/api/v1/vehicle/close`, {id: vData._id})
        .then(result=>{console.log(result);setCloseV(false);setIsLoading(false)})
        .catch(error=>{console.log(error);setIsLoading(false)})
    }

    return (
        <section id='CloseVehicle' className='modal'>
            <form onSubmit={handleClose}>
                <p className='center'>Would you like to close</p>
                <h1 className='center'>{vData.plate}</h1>
                <div className="buttons spBtn">
                    <button className='center' onClick={(e)=>{e.preventDefault();setCloseV(false)}}>No</button>
                    {isLoading ? <button disabled className='center' type='submit'>Closing</button> : <button className='center' type='submit'>Yes</button>}
                </div>
            </form>
        </section>
    )
}

export default CloseVehicle;