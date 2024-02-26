import './Employees.css';
import '../FillForm.css';
import car from '../../assets/bnz.jpg';
import AuthContext from "../../context/AuthProvider";
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContextVariables from '../../context/contextVariables';
import axios from 'axios';

const Employees = () => {
    const [isLoading, setIsLoading] = useState(false)
    const emptyFields = () => {
        setFullname("")
        setEmail("")
        setArea("")
        setBranch("")
        setNumber("")
    }

    const { auth } = useContext(AuthContext);
    const { domain } = useContext(ContextVariables);
    const navigate = useNavigate();

    const [employees, setEmployees] = useState([]);
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [branch, setBranch] = useState('');
    const [contact, setContact] = useState('');
    const [profile, setProfile] = useState('');
    const password = 'password';
    const role = 121

    useEffect(() => {
        if (!auth?.token) {
            navigate('/');
        }
    }, [auth, navigate]);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get(`${domain}/api/v1/employee/fetchAll`);
                if (response.data) {
                    setEmployees(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchEmployees();
    }, [employees]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        

        if (role && fullname && branch && email && password && number){
            await axios.post(`${domain}/api/v1/employee/create`, {email, fullname, password, role, branch, contact: number})
            .then(result => {console.log('success:', result);setIsLoading(false)})
            .catch(error => {console.log(error);setIsLoading(false);emptyFields()})
        }
        else{
            setIsLoading(false)
        }
    }

    return (
        <section id="Employees">
            <div className="FillForm">
                <form onSubmit={handleSubmit}>
                    <h3 className="title center">Employee Registration</h3>
                    <div className="form-group">
                        <div className="form-row">
                            <form-set>
                                <label>Fullname</label>
                                <input type="text"
                                    onChange={(e) => { setFullname(e.target.value); }}
                                    value={fullname}
                                />
                            </form-set>
                            <form-set>
                                <label>Email</label>
                                <input type="text"
                                    onChange={(e) => { setEmail(e.target.value); }}
                                    value={email}
                                />
                            </form-set>
                            <form-set>
                                <label>Number</label>
                                <input type="text"
                                    onChange={(e) => { setNumber(e.target.value); }}
                                    value={number}
                                />
                            </form-set>
                        </div>
                        <div className="form-row">
                            <form-set>
                                <label>Branch</label>
                                <input type="text"
                                    onChange={(e) => { setBranch(e.target.value); }}
                                    value={branch}
                                />
                            </form-set>
                            <form-set>
                                {/* <label>Photo</label>
                                <input type="file"
                                    onChange={(e) => { setProfile(e.target.value); }}
                                    value={profile}
                                /> */}
                            </form-set>
                            <form-set>
                                
                            </form-set>
                        </div>
                        {isLoading ? <button type="submit" disabled>Registering</button> : <button type="submit">Register</button>}
                    </div>
                </form>
                <div className="preview">
                    {/* <img src={car} alt="" /> */}
                </div>
            </div>
            <div id="allEmployees">
                <div className="table">
                    <div className="thead">
                        <div className="tr al-c">
                            <div className="th al-c col1">
                                <p className="al-c">Fullname</p>
                            </div>
                            <div className="th al-c col2">
                                <p className="al-c">Email</p>
                            </div>
                            <div className="th al-c col3">
                                <p className="al-c">Number</p>
                            </div>
                            <div className="th al-c col4">
                                <p className="al-c">Branch</p>
                            </div>
                            <div className="th al-c col5">
                                <p className="al-c">Area</p>
                            </div>
                            <div className="th al-c col6">
                                <p className="al-c">Shift</p>
                            </div>
                            <div className="th al-c col7">
                                <p className="al-c">Status</p>
                            </div>
                        </div>
                    </div>
                    <div className="tbody scrollable">
                        {employees.map((employee) => (
                            <div className="tr al-c" key={employee.id}>
                                <div className="td al-c col1">
                                    <p className="al-c">{employee.fullname}</p>
                                </div>
                                <div className="td al-c col2">
                                    <p className="al-c">{employee.email}</p>
                                </div>
                                <div className="td al-c col3">
                                    <p className="al-c">{employee.contact}</p>
                                </div>
                                <div className="td al-c col4">
                                    <p className="al-c">{employee.branch}</p>
                                </div>
                                <div className="td al-c col5">
                                    <p className="al-c">{employee.area}</p>
                                </div>
                                <div className="td al-c col6">
                                    <p className="al-c">{employee.shift}</p>
                                </div>
                                <div className="td al-c col7">
                                    <p className="al-c">{employee.status}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Employees;
