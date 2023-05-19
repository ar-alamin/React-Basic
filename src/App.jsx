import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Router/Home'
import About from './Router/About'
import NavBar from './Router/NavBar'
import ErrorPage from './Router/ErrorPage'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Route>
        
        <Route path='*' element={<ErrorPage />} />
        {/* <Route path='*' element={<Navigate to='/' />} /> */}
      </Routes>
    </>
  )
}

export default App