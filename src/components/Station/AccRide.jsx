import { useContext, useState } from 'react'
import './Station.css'
import ContextVariales from '../../context/contextVariables'
import AuthContext from '../../context/AuthProvider'
import axios from 'axios'

const AccRide = () => {
    const {auth} = useContext(AuthContext)
    const{setOpenRide, rData, domain} = useContext(ContextVariales)
    const [isLoading, setIsLoading] = useState(false)

    const closeModal = (e) => {
        e.preventDefault()

        setOpenRide(false)
    }

    const handleBoard = async (e) => {
        e.preventDefault();
        setIsLoading(true)

        await axios.post(`${domain}/api/v1/vehicle/board`, { id: rData._id, passenger: auth?.id })
        .then(result => {console.log(result);setIsLoading(false);setOpenRide(false)})
        .catch(error => {console.log(error);setIsLoading(false)})

    }

    return (
        <div className="modali">
            <form onSubmit={handleBoard}>
                <div className="details">
                    <h1 className='center'>{rData.plate}</h1>

                    <p><span>Driver</span>: {rData.driver}</p>
                    <p><span>Seats</span>: {rData.seats}</p>
                    <p><span>Slots left</span>: {rData.seats - rData.passengers.length}</p>
                    <p><span>Destination</span>: {rData.destination}</p>

                </div>

                <div className="buttons">
                    <button onClick={closeModal} className='center'>Close</button>
                    {isLoading ? <button disabled className='center board'>Boarding</button> : <button className='center board'>Board</button>}
                </div>
            </form>
        </div>
    )
}

export default AccRide;