import { useContext } from 'react'
import './Vehicles.css'
import ContextVariales from '../../context/contextVariables'

const Vehicle = ({open}) => {
    const {setOpenRide} = useContext(ContextVariales)
    const openMe = () => {
        setOpenRide(true)
    }

    return (
        <div className='Vehicle' onClick={open && openMe}>
            <div className="top side">
                <h3>GV3982</h3>
                <p>4/5</p>
            </div>
            <div className="bottom side">
                <h3>09:00 - 11:00 </h3>
                <p>Delayed</p>
            </div>
        </div>
    )
}

export default Vehicle