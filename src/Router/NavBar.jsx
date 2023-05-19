import React from 'react'
import { Outlet } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
        </ul>
        <Outlet />
    </div>
  )
}

export default NavBar