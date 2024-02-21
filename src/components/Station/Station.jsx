import { useState } from 'react';
import './Station.css'
import Time from './Time';
import Vehicle from '../Vehicles/Vehicle';

const Station = () => {
    const [selectTime, setSelectTime] = useState(false)

    return (
        <section id="Station">
            <div id="head" className='spBtn'>
                <h3>Thursday, 22 Jan 2023</h3>

                <button className='center' onClick={()=>{setSelectTime(!selectTime)}}>Select Time <i className="bx bx-chevron-down"></i></button>
            </div>
            {selectTime && <div className="times">
                <Time time={'9:00AM - 11:00AM'}/>
            </div>}

            <div id="rides" className='scrollable'>
                <Vehicle open={true}/>
                <Vehicle open={true}/>
                <Vehicle open={true}/>
                <Vehicle open={true}/>
                <Vehicle open={true}/>
                <Vehicle open={true}/>
            </div>
        </section>
    )
}

export default Station;