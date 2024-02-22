import './Drivers.css'
import '../FillForm.css'
import AuthContext from "../../context/AuthProvider";
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ContextVariales from '../../context/contextVariables';

const Drivers = () => {
    const {auth} = useContext(AuthContext)
    const {domain} = useContext(ContextVariales)

    const navigate = useNavigate()

    useEffect(()=>{
        if(!auth?.token){
            navigate('/')
        }
    }, [auth])

    const [isLoading, setIsLoading] = useState(false)
    const emptyFields = () => {
        setFullname("")
        setEmail("")
        setBranch("")
        setContact("")
    }
    const [drivers, setDrivers] = useState([]);
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [branch, setBranch] = useState('');
    const [contact, setContact] = useState('');
    const password = 'password';
    const role = 212

    useEffect(() => {
        const fetchDrivers = async () => {
            try {
                const response = await axios.get(`${domain}/api/v1/driver/fetchAll`);
                if (response.data) {
                    setDrivers(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchDrivers();
    }, [drivers]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        

        if (role && fullname && branch && email && password && contact){
            await axios.post(`${domain}/api/v1/driver/create`, {email, fullname, password, role, branch, contact})
            .then(result => {console.log('success:', result);setIsLoading(false)})
            .catch(error => {console.log(error);setIsLoading(false);emptyFields()})
        }
        else{
            setIsLoading(false)
        }
    }

    return (
        <section id="Drivers">
            <div className="FillForm">
                <form onSubmit={handleSubmit}>
                    <h3 className="title center">Driver Registration</h3>
                    <div className="form-group">
                        <div className="form-row">
                            <form-set>
                                <label>Fullname</label>
                                <input type="text" onChange={(e)=>{setFullname(e.target.value)}}/>
                            </form-set>
                            <form-set>
                                <label>Email</label>
                                <input type="text" onChange={(e)=>{setEmail(e.target.value)}}/>
                            </form-set>
                            <form-set>
                                <label>Number</label>
                                <input type="text" onChange={(e)=>{setContact(e.target.value)}}/>
                            </form-set>
                        </div>
                        <div className="form-row">
                            <form-set>
                                <label>Branch</label>
                                <input type="text" onChange={(e)=>{setBranch(e.target.value)}}/>
                            </form-set>
                            {/* <form-set>
                                <label>Destination</label>
                                <input type="text" />
                            </form-set> */}
                            {/* <form-set>
                                <label>Photo</label>
                                <input type="file" />
                            </form-set> */}
                        </div>
                        {isLoading ? <button type="submit" disabled>Registering</button> : <button type="submit" >Register</button>}
                    </div>
                </form>
                <div className="preview">

                </div>
            </div>
            <div id="allDrivers">
                <div className="table">
                    <div className="thead">
                        <div className="tr al-c">
                            <div className="th al-c col1">
                                <p className="al-c">Ticket ID</p>
                            </div>
                            <div className="th al-c col2">
                                <p className="al-c">Site ID</p>
                            </div>
                            <div className="th al-c col3">
                                <p className="al-c">Category</p>
                            </div>
                            <div className="th al-c col4">
                                <p className="al-c">Assigned Officer</p>
                            </div>
                            <div className="th al-c col5">
                                <p className="al-c">Ticket  Description</p>
                            </div>
                            <div className="th al-c col6">
                                <p className="al-c">Ticket Duration</p>
                            </div>
                            <div className="th al-c col7">
                                <p className="al-c">Status</p>
                            </div>
                        </div>
                    </div>
                    <div className="tbody scrollable">
                    {drivers.map((driver) => (
                            <div className="tr al-c" key={driver.id}>
                                <div className="td al-c col1">
                                    <p className="al-c">{driver.fullname}</p>
                                </div>
                                <div className="td al-c col2">
                                    <p className="al-c">{driver.email}</p>
                                </div>
                                <div className="td al-c col3">
                                    <p className="al-c">{driver.contact}</p>
                                </div>
                                <div className="td al-c col4">
                                    <p className="al-c">{driver.branch}</p>
                                </div>
                                <div className="td al-c col5">
                                    <p className="al-c">{driver.area}</p>
                                </div>
                                <div className="td al-c col6">
                                    <p className="al-c">{driver.shift}</p>
                                </div>
                                <div className="td al-c col7">
                                    <p className="al-c">{driver.status}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Drivers;