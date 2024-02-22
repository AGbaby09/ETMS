import './Dashboard.css'
import {Chart as ChartJS, defaults} from 'chart.js/auto';
import {Bar, Doughnut, Line, Pie} from 'react-chartjs-2';

import AuthContext from "../../context/AuthProvider";
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const {auth} = useContext(AuthContext)

    const navigate = useNavigate()

    useEffect(()=>{
        if(!auth?.token){
            navigate('/')
        }
    }, [auth])

    defaults.maintainAspectRatio = false;
    defaults.responsive = true;

    return (
        <section id="Dashboard">
            <div className="row row1">
                <div id="count">
                    <div className="slab">
                        <h3>Total no. Employees</h3>
                        <h1>1365</h1>
                    </div>
                    <div className="slab">
                        <h3>Total no. Drivers</h3>
                        <h1>65</h1>
                    </div>
                    <div className="slab">
                        <h3>Total no. Vehicles</h3>
                        <h1>15</h1>
                    </div>
                    <div className="slabPie">
                        <h3>Doughnut for Totals</h3>
                        <div className="chart">
                        <Doughnut  
                            data={{
                                // labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                                labels: ['Employees', 'Drivers', 'Vehicles'],
                                datasets: [
                                    {
                                        label: 'Count',
                                        data: [1365, 65, 50],
                                        backgroundColor : ['rgba(62, 60, 60, 0.65)','rgba(50, 49, 49, 0.8)','rgb(36, 35, 35)'],
                                        borderRadius: 5,
                                        boxShadow: '0 0 5px 10px red',
                                        // fill:true,
                                    },
                                ],
                            }}
                        />
                        </div>
                    </div>
                </div>
                <div id="graph">
                    <div className="bar center">
                        <div className="barchart">
                            <h3>Graph for rides</h3>
                            <div className="chart">
                            <Bar 
                            data={{
                                labels: ['GV3025', 'GV6942', 'GV2815', 'GV1734', 'GV5611', 'GV4197','GV3025', 'GV6942', 'GV2815', 'GV1734', 'GV5611', 'GV4197'],
                                datasets: [
                                    {
                                        label: 'Seat',
                                        data: [30, 60, 20, 90, 10, 50, 57, 89, 53, 68, 13, 45],
                                        backgroundColor : 'rgba(62, 60, 60, 0.65)',
                                        borderRadius: 150,
                                    },
                                    {
                                        label: 'Boarded',
                                        data: [10, 26, 72, 59, 81, 95, 67, 99, 43,86, 33, 55],
                                        backgroundColor : 'rgba(50, 49, 49, 0.8)',
                                        borderRadius: 150,
                                    },
                                    {
                                        label: 'Times of ride',
                                        data: [36, 64, 42, 74, 60, 55, 87, 19, 43, 88, 31, 50],
                                        backgroundColor : 'rgb(36, 35, 35)',
                                        borderRadius: 150,
                                    },
                                ],
                            }}
                        />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard;