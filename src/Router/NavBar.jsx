import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <ul>
            <li><Link to='/' >Home</Link></li>
            <li><Link to='/about' >About</Link></li>
            <li><Link to='/posts/js' >Posts</Link></li>           
        </ul>
        <Outlet />
    </div>
  )
}

export default NavBar