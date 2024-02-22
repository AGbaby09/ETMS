import "./Forms.css"
import { useState, useContext, useEffect } from "react"
import ContextVariales from "../../context/contextVariables";
import AuthContext from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
    const navigate = useNavigate()

    const {auth} = useContext(AuthContext)

    useEffect(()=>{
        if(auth?.token){
            navigate('/loggedIn')
        }
    }, [auth])

    const { domain} = useContext(ContextVariales)
    const [isLoading, setIsLoading] = useState(false)

    const [peek, setPeek] = useState(false)
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setcontact] = useState("");
    const [password, setPassword] = useState("");
    const [branch, setBranch] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const emptyFields = () => {
        setFullname("")
        setEmail("")
        setPassword("")
        setcontact("")
        setConfirmPassword("")
    }
    const role = 121;
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        

        if(confirmPassword === password){
            if (role && fullname && email && password && branch && contact){
                await axios.post(`${domain}/api/v1/employee/register`, {email: email, fullname: fullname, password: password, role: role, branch:branch, contact: contact})
                .then(result => {console.log('success:', result);setIsLoading(false);navigate('/')})
                .catch(error => {console.log(error);setIsLoading(false);emptyFields()})
            }
            else{
                setIsLoading(false)
            }
        }
        else{
            setIsLoading(false)
        }
    }


    return (
        <section id="form" className="modal">
            <form id="signup" onSubmit={handleSubmit}>
                {/* <button className="close" onClick={(e)=>{e.preventDefault();setCallSignUp(false);emptyFields()}}> 
                    <i className="bx bx-x"></i>
                </button> */}

                <h3>Create your account</h3>

                <label>Full name <input 
                        id="fullname"
                        name="fullname"
                        type="text" 
                        autoComplete="off"
                        placeholder="Your full name"
                        onChange={(e) => {setFullname(e.target.value);}}
                        value={fullname}
                    />
                </label>

                <label>Email <input 
                        id="email"
                        name="email"
                        type="email" 
                        autoComplete="off"
                        placeholder="example@domain.com"
                        onChange={(e) => {setEmail(e.target.value);}}
                        value={email}
                    />
                </label>
                
                <label>Contact <input 
                        id="contact"
                        name="contact"
                        type="text" 
                        autoComplete="off"
                        placeholder="1234567890"
                        onChange={(e) => {setcontact(e.target.value);}}
                        value={contact}
                    />
                </label>

                <label>Branch <input 
                        id="branch"
                        name="branch"
                        type="text" 
                        autoComplete="off"
                        placeholder="Branch name"
                        onChange={(e) => {setBranch(e.target.value);}}
                        value={branch}
                    />
                </label>

                <label>Password <input 
                        id="password"
                        name="password"
                        type={!peek ? "password" : "text"}
                        placeholder="Use strong password"
                        onChange={(e) => {setPassword(e.target.value);}}
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
                        id="cpassword"
                        name="cpassword"
                        type={!peek ? "password" : "text"}
                        placeholder="Enter correct password"
                        onChange={(e) => {setConfirmPassword(e.target.value);}}
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
                
                <p>Already have an account? <button onClick={(e)=>{ e.preventDefault();navigate('/login'); emptyFields()}}>Login</button></p>
            </form>
        </section>
    )
}

export default Signup;