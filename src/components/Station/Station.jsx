import { useContext, useEffect, useState } from 'react';
import './Station.css'
import Time from './Time';
import StationVehicle from '../Vehicles/StationVehicle';
import axios from 'axios';
import ContextVariales from '../../context/contextVariables';


const Station = () => {
    const {domain} = useContext(ContextVariales)
    const [selectTime, setSelectTime] = useState(false)

    const [openVehicles, setOpenVehicles] = useState([])

    useEffect(()=>{
        const fetchOpenVehicles = async () => {
            axios.get(`${domain}/api/v1/vehicle/fetchOpen`)
            .then(result => {setOpenVehicles(result.data)})
            .catch(error => {console.log(error)})
        }
    
        fetchOpenVehicles()
    }, [openVehicles])

    const getTodaysDateTimeFormatted = () => {
        const now = new Date(); // Create a new Date object with the current date and time
    
        // Define arrays for the names of days and months
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
        // Get the day of the week (0-6), month (0-11), day of the month (1-31), and year (four digits) from the Date object
        const dayOfWeekIndex = now.getDay();
        const monthIndex = now.getMonth();
        const dayOfMonth = now.getDate();
        const year = now.getFullYear();
    
        // Get the hour (0-23), minute (0-59), and second (0-59) from the Date object
        const hour = String(now.getHours()).padStart(2, '0');
        const minute = String(now.getMinutes()).padStart(2, '0');
        const second = String(now.getSeconds()).padStart(2, '0');
    
        // Get the day of the month suffix (st, nd, rd, or th)
        const daySuffix = getDaySuffix(dayOfMonth);
    
        // Construct the formatted date and time string
        const formattedDateTime = `${daysOfWeek[dayOfWeekIndex]}, ${dayOfMonth}${daySuffix} ${monthsOfYear[monthIndex]}, ${year}, ${hour}:${minute}:${second}`;
    
        return formattedDateTime;
    };
    
    // Function to get the suffix for the day of the month (st, nd, rd, or th)
    const getDaySuffix = (day) => {
        if (day >= 11 && day <= 13) {
            return 'th';
        }
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    };
    
    
    return (
        <section id="Station">
            <div id="head" className='spBtn'>
                {/* <h3>Thursday, 22 Jan 2023</h3> */}
                <h3>{getTodaysDateTimeFormatted()}</h3>

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
                {openVehicles && openVehicles.map((vehicle)=>(
                    <StationVehicle key={vehicle._id} vehicle={vehicle}/>
                ))}
            </div>
        </section>
    )
}

export default Station;