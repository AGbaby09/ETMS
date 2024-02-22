import axios from "axios";
import { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/AuthProvider";
import "./Login.css"
import { useNavigate } from "react-router-dom";
import ContextVariables from "../../context/contextVariables";


const Login = () => {

    const navigate = useNavigate()

    const {domain, role} = useContext(ContextVariables)
    const {setAuth, auth} = useContext(AuthContext)

    useEffect(()=>{
        if(auth?.token){
            navigate('/loggedIn')
        }
    }, [auth])
    
    const [peek, setPeek] = useState(false)


    axios.defaults.withCredentials = true;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emptyFields = () => {
        setEmail("")
        setPassword("")
    }

    const [err, setErr] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)

        await axios.post(`${domain}/api/v1/${role === 121 ? 'employee' : role === 212 ? 'driver' : 'admin'}/login`, {email, password})
        .then(res => {
            setIsLoading(false)
            emptyFields()
            if(res.data){
                localStorage.setItem("kromTroski", JSON.stringify(res.data))
                setAuth(res.data)
            }
        })
        .catch(err => {
            console.log("error sending request:", err)
            setErr(err.response.data)
            setIsLoading(false)
            setPassword("");
        });

    }

    
    return (  
        <section id="form" className={true ? "showForm" : "hideForm"}>

            {err && <div id="error">
                        <i className="material-symbols-outlined">
                            warning
                        </i>
                        <p>{err}</p>
                        <i className="material-symbols-outlined">
                            warning
                        </i>
                    </div>
            }

            <form onSubmit={handleSubmit}>
                {/* <button className="close" onClick={(e)=>{e.preventDefault(); setCallLogin(false); emptyFields()}}>
                    <i className="bx bx-x"></i>
                </button> */}
                <h3>Log into your account</h3>
                <label>Email <input 
                        id="email"
                        name="email"
                        type="email" 
                        autoComplete="on"
                        placeholder="example@domain.com"
                        onChange={(e) => {setEmail(e.target.value); setErr("")}}
                        value={email}
                    />
                </label>
                <label>Password <input 
                        id="password"
                        name="password"
                        type={!peek ? "password" : "text"}
                        placeholder="Enter correct password"
                        onChange={(e) => {setPassword(e.target.value); setErr("")}}
                        value={password}
                    />
                    {peek ? (
                        <i id="peekaboo" className="material-symbols-outlined" onClick={()=>setPeek(!peek)}>
                            visibility_off
                        </i>
                    ) : (
                        <i id="peekaboo" className="material-symbols-outlined" onClick={()=>setPeek(!peek)}>
                            visibility
                        </i>
                    )}
                </label>

                <p>forgotten your password? <button>Click here!</button></p>

                {isLoading ? (
                    <div id="loading">
                        <lord-icon
                            src="https://cdn.lordicon.com/gzdzdtov.json"
                            trigger="loop"
                            state="loop-cycle"
                            colors="primary:#848484,secondary:#000000">
                        </lord-icon>
                    </div>) : (
                    <button type="submit">LOGIN</button>
                )}
                
                <p>Don't have an account? <button onClick={(e)=>{ e.preventDefault();navigate('/signup'); emptyFields()}}>Sign up</button></p>
            </form>
        </section>
    );
}
 
export default Login;