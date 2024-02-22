
import Outlets from '../Outlets/Outlets';
import SideBar from '../SideBar/NavBar/NavBar'
import AuthContext from "../../context/AuthProvider";
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './LoggedIn.css'
const LoggedIn = () => {
    const {auth} = useContext(AuthContext)

    const navigate = useNavigate()

    useEffect(()=>{
        if(!auth?.token){
            navigate('/login')
        }
    }, [auth])

    return (
        <section id='LoggedIn'>
            <SideBar />
            <Outlets />
        </section>
    )
}

export default LoggedIn;