import { useContext, useState } from "react";
import "./Forms.css"
import ContextVariales from "../../context/contextVariables";

const Login = () => {
    const {setCallLogin, setCallSignUp} = useContext(ContextVariales)
    const [isLoading, setIsLoading] = useState(false)

    const [peek, setPeek] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emptyFields = () => {
        setEmail("")
        setPassword("")
    }

    return (
        <section id="form" className="modal">
            <form id="login">
                <button className="close" onClick={(e)=>{e.preventDefault(); setCallLogin(false); emptyFields()}}>
                    <i className="bx bx-x"></i>
                </button>

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
                    <button type="submit" className="button">LOGIN</button>
                )}
                
                <p>Don't have an account? <button onClick={(e)=>{ e.preventDefault();setCallLogin(false);setCallSignUp(true); emptyFields()}}>Sign up</button></p>
            </form>
        </section>
    )
}

export default Login;