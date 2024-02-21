
import Outlets from '../Outlets/Outlets';
import SideBar from '../SideBar/NavBar/NavBar'

import './LoggedIn.css'
const LoggedIn = () => {

    return (
        <section id='LoggedIn'>
            <SideBar />
            <Outlets />
        </section>
    )
}

export default LoggedIn;