import { useContext, useState } from 'react'
import './Profile.css'
import axios from 'axios'
import ContextVariales from '../../context/contextVariables'
import AuthContext from "../../context/AuthProvider";

const Profile = () => {
    const {domain} = useContext(ContextVariales)
    const {auth} = useContext(AuthContext)

    const [fullname, setFullname] = useState('')
    const [editFullname, setEditFullname] = useState(false)
    const [email, setEmail] = useState('')
    const [editEmail, setEditEmail] = useState(false)
    const [mobile, setMobile] = useState('')
    const [editMobile, setEditMobile] = useState(false)
    const [password, setPassword] = useState('')
    const [editPassword, setEditPassword] = useState(false)

    const submit = async (type, field) => {
        await axios.put(`${domain}/api/v1/edit/${type}`, {input:field, id:auth?.id})
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{console.log(error)})
    }

    return (
        <section id='Profile'>
            <h1>Profile</h1>

            <div className="label">
                {editFullname ? 
                    <form onSubmit={(e)=>{e.preventDefault();submit('fullname', fullname)}}>
                        <div className="editForm">
                            <p>New Fullname:</p>
                            <input type="text" required
                                onChange={(e)=>{setFullname(e.target.value)}}
                                value={fullname}
                            />
                        </div>
                        <div className="editButtons">
                            <button className='center' type='submit'><i className="bx bx-check"></i> Save edit</button>
                            <button className='center' onClick={(e)=>{e.preventDefault();setFullname('');setEditFullname(false)}}><i className="bx bx-x"></i> Cancel Edit</button>
                        </div>
                    </form>
                     : 
                    <>
                        <h3>Fullname: <span>User name names</span></h3> 
                        <button className='center' onClick={()=>{setEditFullname(true)}}>
                            Edit
                            <i className="bx bx-edit"></i>
                        </button>
                    </>
                }
            </div>
            <div className="label">
                {editEmail ? 
                    <form onSubmit={()=>{submit('email', email)}}>
                        <div className="editForm">
                            <p>New Email:</p>
                            <input type="email" required
                                onChange={(e)=>{setEmail(e.target.value)}}
                                value={email}
                            />
                        </div>
                        <div className="editButtons">
                            <button className='center' type='submit'><i className="bx bx-check"></i> Save edit</button>
                            <button className='center' onClick={(e)=>{e.preventDefault();setEmail('');setEditEmail(false)}}><i className="bx bx-x"></i> Cancel Edit</button>
                        </div>
                    </form>
                     : 
                    <>
                        <h3>Email: <span>example@email.com</span></h3> 
                        <button className='center' onClick={()=>{setEditEmail(true)}}>
                            Edit
                            <i className="bx bx-edit"></i>
                        </button>
                    </>
                }
            </div>
            <div className="label">
                {editMobile ? 
                    <form onSubmit={()=>{submit('mobile', mobile)}}>
                        <div className="editForm">
                            <p>New Mobile:</p>
                            <input type="text" required
                                onChange={(e)=>{setMobile(e.target.value)}}
                                value={mobile}
                            />
                        </div>
                        <div className="editButtons">
                            <button className='center' type='submit'><i className="bx bx-check"></i> Save edit</button>
                            <button className='center' onClick={(e)=>{e.preventDefault();setMobile('');setEditMobile(false)}}><i className="bx bx-x"></i> Cancel Edit</button>
                        </div>
                    </form>
                     : 
                    <>
                        <h3>Mobile: <span>123456789</span></h3> 
                        <button className='center' onClick={()=>{setEditMobile(true)}}>
                            Edit
                            <i className="bx bx-edit"></i>
                        </button>
                    </>
                }
            </div>
            <div className="label">
                {editPassword ? 
                    <form onSubmit={()=>{submit('password', password)}}>
                        <div className="editForm">
                            <p>New Password:</p>
                            <input type="text" required
                                onChange={(e)=>{setPassword(e.target.value)}}
                                value={password}
                            />
                        </div>
                        <div className="editButtons">
                            <button className='center' type='submit'><i className="bx bx-check"></i> Save edit</button>
                            <button className='center' onClick={(e)=>{e.preventDefault();setPassword('');setEditPassword(false)}}><i className="bx bx-x"></i> Cancel Edit</button>
                        </div>
                    </form>
                     : 
                    <>
                        <h3>Password: <span>********</span></h3> 
                        <button className='center' onClick={()=>{setEditPassword(true)}}>
                            Edit
                            <i className="bx bx-edit"></i>
                        </button>
                    </>
                }
            </div>
        </section>
    )
}

export default Profile