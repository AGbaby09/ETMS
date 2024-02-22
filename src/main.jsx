import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextVarialesProvider } from './context/contextVariables.jsx'
import { AuthProvider } from './context/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ContextVarialesProvider>
        <App />
      </ContextVarialesProvider>
    </AuthProvider>
  </React.StrictMode>,
)
