// import { useContext, useEffect } from 'react'
// import './Vehicles.css'
// import ContextVariales from '../../context/contextVariables'
// import AuthContext from "../../context/AuthProvider";
// import { useNavigate } from 'react-router-dom';

// const Vehicle = () => {

//     return (
//         <div>
            
//         </div>
//     );
// }

// export const createVehicle = () => {
//     const {setOpenRide} = useContext(ContextVariales)
//     const {auth} = useContext(AuthContext)

//     const navigate = useNavigate()

//     useEffect(()=>{
//         if(!auth?.token){
//             navigate('/')
//         }
//     }, [auth])

//     const openMe = (e) => {
//         e.preventDefault()
//         setOpenRide(true)
//     }

//     return (
//         <button className='Vehicle' onClick={open && openMe}>
//             <div className="top side">
//                 <h3>GV3982</h3>
//                 {/* {open ? <p>8/25</p> : <p>25 <i className='bx bx-chair'></i></p>} */}
//             </div>
//             <div className="bottom side">
//                 {/* {open? <h3>9:00</h3> : <h3>09:00, 13:00, 19:00 </h3>} */}
//                 <p>create</p>
//             </div>
//         </button>
//     )
// }

// export const stationVehicle = () => {

//     return (
//         <button className='Vehicle'>
//             <div className="top side">
//                 <h3>GV3982</h3>
//                 {/* {open ? <p>8/25</p> : <p>25 <i className='bx bx-chair'></i></p>} */}
//             </div>
//             <div className="bottom side">
//                 {/* {open? <h3>9:00</h3> : <h3>09:00, 13:00, 19:00 </h3>} */}
//                 <p>station</p>
//             </div>
//         </button>
//     )
// }


// export default Vehicle;