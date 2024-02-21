import './Vehicles.css'
import '../FillForm.css'
import Vehicle from './Vehicle';

const Vehicles = () => {

    return (
        <section id="Vehicles">
            <div className="FillForm">
                <form >
                    <h3 className="title center">Vehicle Registration</h3>
                    <div className="form-group">
                        <div className="form-row">
                            <form-set>
                                <label>Number plate</label>
                                <input type="text" />
                            </form-set>
                            <form-set>
                                <label>Total seats</label>
                                <input type="text" />
                            </form-set>
                            <form-set>
                                <label>Color</label>
                                <input type="text" />
                            </form-set>
                        </div>
                        <div className="form-row">
                            <form-set>
                                <label>Branch</label>
                                <input type="text" />
                            </form-set>
                            <form-set>
                                <label>Destination</label>
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

                </div>
            </div>
            <div id="allVehicles">
                <h3 className='center'>All Vehicles</h3>
                <div className='all-v scrollable'>
                    <Vehicle open={false} />
                    <Vehicle open={false} />
                    <Vehicle open={false} />
                    <Vehicle open={false} />
                </div>
            </div>            
        </section>
    )
}

export default Vehicles;