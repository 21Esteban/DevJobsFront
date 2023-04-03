import { useState } from 'react'

import './App.css'
import { Header } from './components/Header'
import { JobDetails } from './components/JobDetails'
import {MyRoutes} from "./routes/routes"

function App() {
  
  return (
    <div className="App">
     <Header/>
     <MyRoutes/>
    </div>
  )
}

export default App
