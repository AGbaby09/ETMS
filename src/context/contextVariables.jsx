import { createContext, useContext, useState, useEffect } from 'react';

const ContextVariales = createContext({})

export const ContextVarialesProvider = ({children}) => {

    const domain = 'http://localhost:2023'
    const [callReview, setCallReview] = useState(false)
    const [callTalk, setCallTalk] = useState(false)
    const [role, setRole] = useState(100)
    const [openRide, setOpenRide] = useState(false)

    return (
        <ContextVariales.Provider value={{ callReview, setCallReview, callTalk, setCallTalk, openRide, setOpenRide, role, setRole, domain }} >
            {children}
        </ContextVariales.Provider>
    )
}

export default ContextVariales;