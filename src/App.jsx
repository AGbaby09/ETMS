import { useContext, useState } from 'react' 
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoggedIn from './components/LoggedIn/LoggedIn'
import Login from './components/Login/Login'
import SignUp from './components/Forms/Signup'
import ContextVariales from './context/contextVariables'
import AccRide from './components/Station/AccRide'
import ToggleLogin from './components/ToggleLogin/ToggleLogin'
import OpenVehicle from './components/Vehicles/OpenVehicle'
import CloseVehicle from './components/Vehicles/CloseVehicle'

function App() {
  const {openRide, openV, closeV} = useContext(ContextVariales)

  return (
    <BrowserRouter>
      <main className={`App scrollable`} style={{height: window.innerHeight, width: window.innerWidth}}>
        {openRide && <AccRide />}
        {openV && <OpenVehicle />}
        {closeV && <CloseVehicle />}
        <Routes>
          <Route path='/' element={<ToggleLogin />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/loggedIn/*' element={<LoggedIn />}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
