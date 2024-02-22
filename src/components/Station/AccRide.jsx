import { useContext } from 'react'
import './Station.css'
import ContextVariales from '../../context/contextVariables'

const AccRide = () => {
    const{setOpenRide} = useContext(ContextVariales)

    const closeModal = (e) => {
        e.preventDefault()

        setOpenRide(false)
    }

    return (
        <div className="modali">
            <form>
                <div className="details">
                    <h1 className='center'>GV 3982</h1>

                    <p><span>Driver</span>: Agyekum Daniel</p>
                    <p><span>Seats</span>: 25</p>
                    <p><span>Slots left</span>: 8</p>
                    <p><span>Departure</span>: 45 minutes</p>
                    <p><span>Destination</span>: Haatso</p>

                </div>

                <div className="buttons">
                    <button onClick={closeModal} className='center'>Close</button>
                    <button className='center board'>Board</button>
                </div>
            </form>
        </div>
    )
}

export default AccRide;