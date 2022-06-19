import React from 'react'
import Home from './components/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Reservaciones from './components/Reservaciones/Reservaciones'
import Menu from './components/Menu/Menu'

const App = () => {
  return (
    <>
      <Routes> {/* Routes se tiene etiqueta de cierre. Route tiene autocierre */}
        <Route path='/' element={<Home />}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='/reservaciones' element={<Reservaciones />}/>
      </Routes>
    </>
  )
}

export default App