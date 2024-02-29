import axios from 'axios';
import { createContext, useContext, useState, useEffect } from 'react';

const ContextVariales = createContext({})

export const ContextVarialesProvider = ({children}) => {

    // const domain = 'http://localhost:2023'
    const domain = 'https://etms-backend-nine.vercel.app'
    const [callReview, setCallReview] = useState(false)
    const [callTalk, setCallTalk] = useState(false)
    const [role, setRole] = useState(100)
    const [openRide, setOpenRide] = useState(false)
    const [openV, setOpenV] = useState(false)
    const [closeV, setCloseV] = useState(false)
    const [vData, setVData] = useState({})
    const [rData, setRData] = useState({})
    
    return (
        <ContextVariales.Provider value={{ 
            callReview, setCallReview, callTalk, setCallTalk, openRide, setOpenRide,
            role, setRole, domain, openV, setOpenV, vData, setVData, rData, setRData,
            closeV, setCloseV
            }} >
            {children}
        </ContextVariales.Provider>
    )
}

export default ContextVariales;