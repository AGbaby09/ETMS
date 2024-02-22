import './Profile.css'

const Profile = () => {

    return (
        <section id='Profile'>
            <h1>Profile</h1>

            <div className="label">
                <h3>Fullname: <span>User name names</span></h3> 
                <button className='center'>
                    Edit
                    <i className="bx bx-edit"></i>
                </button>
            </div>
            <div className="label">
                <h3>Email: <span>example@email.com</span></h3> 
                <button className='center'>
                    Edit
                    <i className="bx bx-edit"></i>
                </button>
            </div>
            <div className="label">
                <h3>Mobile: <span>123456789</span></h3> 
                <button className='center'>
                    Edit
                    <i className="bx bx-edit"></i>
                </button>
            </div>
            <div className="label">
                <h3>Password: <span>********</span></h3> 
                <button className='center'>
                    Edit
                    <i className="bx bx-edit"></i>
                </button>
            </div>
        </section>
    )
}

export default Profile