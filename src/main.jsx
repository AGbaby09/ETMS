import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextVarialesProvider } from './context/contextVariables.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextVarialesProvider>
      <App />
    </ContextVarialesProvider>
  </React.StrictMode>,
)
