import './History.css'

const History = () => {

    return (
        <section id='History'>
            <h1>Booking History</h1>

            <div className="histories scrollable">
                <div className="history">
                    <div className="top">
                        <h1>GV 3892</h1>
                        <p>Jan 11, 2024</p>
                    </div>
                    <div className="mid">
                        <p>Diver: Agyeman</p>
                        <p>Destination: Haatso</p>
                        <p>Time of Departure: 19:00</p>
                        <p>Time of Arrival: 21:15</p>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default History;