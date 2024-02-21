import './Employees.css'
import '../FillForm.css'
import car from '../../assets/bnz.jpg'

const Employees = () => {

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
                        <div className="tr al-c">
                            <div className="td al-c col1">
                                <p className="al-c">{'dummy'}</p>
                            </div>
                            <div className="td al-c col2">
                                <p className="al-c">{'dummy'}</p>
                            </div>
                            <div className="td al-c col3">
                                <p className="al-c">{'dummy'}</p>
                            </div>
                            <div className="td al-c col4">
                                <p className="al-c">{'dummy'}</p>
                            </div>
                            <div className="td al-c col5">
                                <p className="al-c">{'dummy'}</p>
                            </div>
                            <div className="td al-c col6">
                                <p className="al-c">{'dummy'}</p>
                            </div>
                            <div className="td al-c col7">
                                <p className="al-c">{'dummy'}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Employees;