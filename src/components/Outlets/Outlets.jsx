import './Outlets.css'
import { Route, Routes } from 'react-router-dom';
import Employees from '../Employees/Employees'
import Drivers from '../Drivers/Drivers'
import Vehicles from '../Vehicles/Vehicles'
import Station from '../Station/Station';

const Outlets = () => {

    return (
        <section id='Outlets' className='scrollable'>
            <Routes>
                <Route path='/employees' element={<Employees />} />
                <Route path='/drivers' element={<Drivers />} />
                <Route path='/vehicles' element={<Vehicles />} />
                <Route path='/station' element={<Station />} />
            </Routes>
        </section>
    )
}

export default Outlets;