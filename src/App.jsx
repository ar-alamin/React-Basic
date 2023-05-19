import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Router/Home'
import About from './Router/About'
import NavBar from './Router/NavBar'

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default App