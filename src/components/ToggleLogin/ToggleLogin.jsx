import { useNavigate } from 'react-router-dom';
import './ToggleLogin.css'
import { useContext, useState } from 'react';
import ContextVariales from '../../context/contextVariables';
import bus from '../../assets/Bus-PNG-HD.png'

const ToggleLogin = () => {
    const {setRole} = useContext(ContextVariales)
    const navigate = useNavigate();

    const [move, setMove] = useState(false)

    setTimeout(() => {
        setMove(true)
    }, 2000);

    return (
        <section id='ToggleLogin'>
            <section className={`homeTitle ${move ? 'moveTop' : ''}`}>
                <div className="busIMG">
                    <img src={bus} alt="" />
                </div>
                <h1>KROM TROSKI</h1>
                <p>A simple employee transport management system</p>
            </section>
            <div className="toggleOptions">
                <h1>KROM TROSKI</h1>    
                <div className="logins">
                    <button onClick={()=>{navigate('/login'); setRole(911)}}>Login as Admin</button>
                    <button onClick={()=>{navigate('/login'); setRole(121)}}>Login as Employee</button>
                    {/* <button onClick={()=>{navigate('/login'); setRole(212)}}>Login as Driver</button> */}
                </div>
            </div>
        </section>
    )
}

export default ToggleLogin;