import "./Forms.css"
import { useState, useContext } from "react"
import ContextVariales from "../../context/contextVariables";

const Signup = () => {
    const {setCallLogin, setCallSignUp} = useContext(ContextVariales)
    const [isLoading, setIsLoading] = useState(false)

    const [peek, setPeek] = useState(false)
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const emptyFields = () => {
        setFullname("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }

    return (
        <section id="form" className="modal">
            <form id="signup">
                <button className="close" onClick={(e)=>{e.preventDefault();setCallSignUp(false);emptyFields()}}> 
                    <i className="bx bx-x"></i>
                </button>

                <h3>Log into your account</h3>

                <label>Full name <input 
                        id="fullname"
                        name="fullname"
                        type="text" 
                        autoComplete="off"
                        placeholder="Your full name"
                        onChange={(e) => {setFullname(e.target.value); setErr("")}}
                        value={fullname}
                    />
                </label>

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
                        placeholder="Use strong password"
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

                <label>Confirm Password <input 
                        id="password"
                        name="password"
                        type={!peek ? "password" : "text"}
                        placeholder="Enter correct password"
                        onChange={(e) => {setConfirmPassword(e.target.value); setErr("")}}
                        value={confirmPassword}
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

                {isLoading ? (
                    <div id="loading">
                        <lord-icon
                            src="https://cdn.lordicon.com/gzdzdtov.json"
                            trigger="loop"
                            state="loop-cycle"
                            colors="primary:#848484,secondary:#000000">
                        </lord-icon>
                    </div>) : (
                    <button type="submit" className="button">SIGNUP</button>
                )}
                
                <p>Already have an account? <button onClick={(e)=>{ e.preventDefault();setCallLogin(true);setCallSignUp(false); emptyFields()}}>Login</button></p>
            </form>
        </section>
    )
}

export default Signup;