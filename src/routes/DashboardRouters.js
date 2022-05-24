import React from 'react'
import {Navigate, Route, Routes } from 'react-router-dom'
import Home from '../Components/home/Home'
import NavBars from '../Components/NavBars'
import Agentes from '../Components/Agentes'




const DashboardRouters = () => {
  return (
    <div>
      <>
      <NavBars/>
        <Routes>
        <Route path="/" element={<Home />}/>
          
          <Route path="*" element={<Navigate to="/" />}/>

          <Route path="/agente" element={<Agentes />}/>
        </Routes>
      </>
    </div>
  )
}

export default DashboardRouters