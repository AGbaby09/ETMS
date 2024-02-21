import { useContext, useState } from 'react' 
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoggedIn from './components/LoggedIn/LoggedIn'
import Login from './components/Login/Login'
import ContextVariales from './context/contextVariables'
import AccRide from './components/Station/AccRide'

function App() {
  const {openRide} = useContext(ContextVariales)

  return (
    <BrowserRouter>
      <main className={`App scrollable`} style={{height: window.innerHeight, width: window.innerWidth}}>
        {openRide && <AccRide />}
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/*' element={<LoggedIn />}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
