import './Vehicles.css'
import '../FillForm.css'
import CreateVehicle from './CreateVehicle'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import ContextVariales from '../../context/contextVariables'

const Vehicles = () => {
    const {domain} = useContext(ContextVariales)

    const [isLoading, setIsLoading] = useState(false)

    const [brand, setBrand] = useState('')
    const [plate, setPlate] = useState('')
    const [seats, setSeats] = useState(null)

    const empty = () => {
        setBrand('')
        setPlate('')
        setSeats(0)
    }

    const [allVehicles, setAllVehicles] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)

        try {
            if(brand && plate && seats > 0){
                axios.post(`${domain}/api/v1/vehicle/create`, {brand, plate, seats})
                .then(result => {console.log(result);setIsLoading(false);empty()})
                .catch(error => {console.log(error);setIsLoading(false)})
            }else{
                console.log('All fields must be filled')
                setIsLoading(false)
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        const fetchAllVehicles = async () => {
            axios.get(`${domain}/api/v1/vehicle/fetchAll`)
            .then(result => {setAllVehicles(result.data)})
            .catch(error => {console.log(error)})
        }
        
        fetchAllVehicles();
    }, [allVehicles])

    return (
        <section id="Vehicles">
            <div className="FillForm">
                <form onSubmit={handleSubmit} >
                    <h3 className="title center">Vehicle Registration</h3>
                    <div className="form-group">
                        <div className="form-row">
                            <form-set>
                                <label>Brand/Model</label>
                                <input type="text" 
                                    onChange={(e)=>{setBrand(e.target.value)}}
                                    value={brand}
                                />
                            </form-set>
                            <form-set>
                                <label>Number plate</label>
                                <input type="text" 
                                    onChange={(e)=>{setPlate(e.target.value)}}
                                    value={plate}
                                />
                            </form-set>
                            <form-set>
                                <label>Total seats</label>
                                <input type="number" 
                                    onChange={(e)=>{setSeats(e.target.value)}}
                                    value={seats}
                                />
                            </form-set>
                        </div>
                        <div className="form-row">
                            <form-set>
                                {/* <label>Branch</label>
                                <input type="text" /> */}
                            </form-set>
                            <form-set>
                                {/* <label>Destination</label>
                                <input type="text" /> */}
                            </form-set>
                            <form-set>
                                {/* <label>Photo</label>
                                <input type="file" /> */}
                            </form-set>
                        </div>
                        {isLoading ? <button type="submit" disabled>Registering</button> : <button type="submit">Register</button>}
                    </div>
                </form>
                <div className="preview">

                </div>
            </div>
            <div id="allVehicles">
                <h3 className='center'>All Vehicles</h3>
                <div className='all-v scrollable'>
                    {allVehicles && allVehicles.map((vehicle)=>(
                        <CreateVehicle vehicle={vehicle}/>
                    ))}
                </div>
            </div>            
        </section>
    )
}

export default Vehicles;