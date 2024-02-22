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
            {selectTime && <div className="times scrollable">
                <Time time={'2:00AM'}/>
                <Time time={'3:00AM'}/>
                <Time time={'4:00AM'}/>
                <Time time={'7:00AM'}/>
                <Time time={'8:00AM'}/>
                <Time time={'9:00AM'}/>
                <Time time={'12:00PM'}/>
                <Time time={'1:00PM'}/>
                <Time time={'2:00PM'}/>
                <Time time={'5:00PM'}/>
                <Time time={'6:00PM'}/>
                <Time time={'7:00PM'}/>
            </div>}

            <div id="rides" className='scrollable'>
                <Vehicle open={true}/>
                <Vehicle open={true}/>
                <Vehicle open={true}/>
                <Vehicle open={true}/>
                <Vehicle open={true}/>
                <Vehicle open={true}/>
                <Vehicle open={true}/>
                <Vehicle open={true}/>
                <Vehicle open={true}/>
                <Vehicle open={true}/>
                <Vehicle open={true}/>
                <Vehicle open={true}/>
                <Vehicle open={true}/>
                <Vehicle open={true}/>
                <Vehicle open={true}/>
                <Vehicle open={true}/>
                <Vehicle open={true}/>
                <Vehicle open={true}/>
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