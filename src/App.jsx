import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import AppRoutes from './routes/App.routes'


function App() {
 

  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
    
  )
}

export default App
