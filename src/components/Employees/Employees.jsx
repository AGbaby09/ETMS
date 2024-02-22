import './Employees.css'
import '../FillForm.css'
import car from '../../assets/bnz.jpg'
import AuthContext from "../../context/AuthProvider";
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContextVariales from '../../context/contextVariables';
import axios from 'axios';

const Employees = () => {
    const {auth} = useContext(AuthContext)
    const {domain} = useContext(ContextVariales)

    const navigate = useNavigate()

    const [employees, setEmployees] = useState([])

    useEffect(()=>{
        if(!auth?.token){
            navigate('/')
        }
    }, [auth])

    useEffect(()=>{
        const fetchEmployees = async () => {
            try {
                axios.get(`${domain}/ap1/v1/employee/fetchAll`, {})
                .then(result=>{
                    console.log(result)
                    if(result.data){
                        // setEmployees(result.data)
                    }
                })
                .catch(error=>{console.log(error)})
            } catch (error) {
                console.log(error)
            }
            
        }

        fetchEmployees()
    }, [employees])

    return (
        <section id="Employees">
            <div className="FillForm">
                <form >
                    <h3 className="title center">Employee Registration</h3>
                    <div className="form-group">
                        <div className="form-row">
                            <form-set>
                                <label>Fullname</label>
                                <input type="text" />
                            </form-set>
                            <form-set>
                                <label>Email</label>
                                <input type="text" />
                            </form-set>
                            <form-set>
                                <label>Number</label>
                                <input type="text" />
                            </form-set>
                        </div>
                        <div className="form-row">
                            <form-set>
                                <label>Branch</label>
                                <input type="text" />
                            </form-set>
                            <form-set>
                                <label>Area</label>
                                <input type="text" />
                            </form-set>
                            <form-set>
                                <label>Photo</label>
                                <input type="file" />
                            </form-set>
                        </div>
                        <button type="submit">Register</button>
                    </div>
                </form>
                <div className="preview">
                    <img src={car} alt="" />
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
                    {employees && employees.map((employee) => (
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
    )
}

export default Employees;