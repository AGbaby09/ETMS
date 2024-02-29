import { useContext, useEffect, useState } from 'react'
import './Profile.css'
import axios from 'axios'
import ContextVariales from '../../context/contextVariables'
import AuthContext from "../../context/AuthProvider";

const Profile = () => {
    const [isLoading, setIsLoading] = useState(false)
    const {domain} = useContext(ContextVariales)
    const {auth} = useContext(AuthContext)

    const [userProfile, setUserProfile] = useState({})

    const [fullname, setFullname] = useState('')
    const [editFullname, setEditFullname] = useState(false)
    const [email, setEmail] = useState('')
    const [editEmail, setEditEmail] = useState(false)
    const [mobile, setMobile] = useState('')
    const [editMobile, setEditMobile] = useState(false)
    const [password, setPassword] = useState('')
    const [editPassword, setEditPassword] = useState(false)

    const submit = async (type, field) => {
        setIsLoading(true)
        await axios.put(`${domain}/api/v1/edit/${type}`, {input:field, id:auth?.id})
        .then(response=>{
            setIsLoading(false)
            setEditFullname(false)
            setEditEmail(false)
            setEditMobile(false)
            setEditPassword(false)
        })
        .catch(error=>{console.log(error)})
    }

    useEffect(()=>{
        const getInfo = async () => {
            await axios.post(`${domain}/api/v1/edit/getInfo`, {id: auth?.id})
            .then(response=>{
                if(response.data){
                    setUserProfile(response.data)
                }
            })
            .catch(error=>{console.log(error)})
        }

        getInfo()
    }, [userProfile])

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
                            {isLoading ? <button disabled className='center' type='submit'><i className="bx bx-check"></i> Saving</button> : <button className='center' type='submit'><i className="bx bx-check"></i> Save edit</button>}
                            <button className='center' onClick={(e)=>{e.preventDefault();setFullname('');setEditFullname(false)}}><i className="bx bx-x"></i> Cancel Edit</button>
                        </div>
                    </form>
                     : 
                    <>
                        <h3>Fullname: <span>{userProfile.fullname ? userProfile.fullname : 'Loading...'}</span></h3> 
                        <button className='center' onClick={()=>{setEditFullname(true)}}>
                            Edit
                            <i className="bx bx-edit"></i>
                        </button>
                    </>
                }
            </div>
            <div className="label">
                {editEmail ? 
                    <form onSubmit={(e)=>{e.preventDefault();submit('email', email)}}>
                        <div className="editForm">
                            <p>New Email:</p>
                            <input type="email" required
                                onChange={(e)=>{setEmail(e.target.value)}}
                                value={email}
                            />
                        </div>
                        <div className="editButtons">
                            {isLoading ? <button disabled className='center' type='submit'><i className="bx bx-check"></i> Saving</button> : <button className='center' type='submit'><i className="bx bx-check"></i> Save edit</button>}
                            <button className='center' onClick={(e)=>{e.preventDefault();setEmail('');setEditEmail(false)}}><i className="bx bx-x"></i> Cancel Edit</button>
                        </div>
                    </form>
                     : 
                    <>
                        <h3>Email: <span>{userProfile.email ? userProfile.email : 'Loading...'}</span></h3> 
                        <button className='center' onClick={()=>{setEditEmail(true)}}>
                            Edit
                            <i className="bx bx-edit"></i>
                        </button>
                    </>
                }
            </div>
            <div className="label">
                {editMobile ? 
                    <form onSubmit={(e)=>{e.preventDefault();submit('mobile', mobile)}}>
                        <div className="editForm">
                            <p>New Mobile:</p>
                            <input type="text" required
                                onChange={(e)=>{setMobile(e.target.value)}}
                                value={mobile}
                            />
                        </div>
                        <div className="editButtons">
                            {isLoading ? <button disabled className='center' type='submit'><i className="bx bx-check"></i> Saving</button> : <button className='center' type='submit'><i className="bx bx-check"></i> Save edit</button>}
                            <button className='center' onClick={(e)=>{e.preventDefault();setMobile('');setEditMobile(false)}}><i className="bx bx-x"></i> Cancel Edit</button>
                        </div>
                    </form>
                     : 
                    <>
                        <h3>Mobile: <span>{userProfile.contact ? userProfile.contact : 'Loading...'}</span></h3> 
                        <button className='center' onClick={()=>{setEditMobile(true)}}>
                            Edit
                            <i className="bx bx-edit"></i>
                        </button>
                    </>
                }
            </div>
            <div className="label">
                {editPassword ? 
                    <form onSubmit={(e)=>{e.preventDefault();submit('password', password)}}>
                        <div className="editForm">
                            <p>New Password:</p>
                            <input type="text" required
                                onChange={(e)=>{setPassword(e.target.value)}}
                                value={password}
                            />
                        </div>
                        <div className="editButtons">
                            {isLoading ? <button disabled className='center' type='submit'><i className="bx bx-check"></i> Saving</button> : <button className='center' type='submit'><i className="bx bx-check"></i> Save edit</button>}
                            <button className='center' onClick={(e)=>{e.preventDefault();setPassword('');setEditPassword(false)}}><i className="bx bx-x"></i> Cancel Edit</button>
                        </div>
                    </form>
                     : 
                    <>
                        <h3>Password: <span>{userProfile.password ? userProfile.password : 'Loading...'}</span></h3> 
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