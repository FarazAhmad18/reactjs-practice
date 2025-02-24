import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex justify-center gap-4 mt-3'>
      <NavLink
      to="/"
      className={({ isActive }) =>
        ` ${isActive ? "border-b-2 border-purple-500" : ""}`
      }>
        Home
      </NavLink>
      <NavLink
      to="/pastes"
      className={({ isActive }) =>
        ` ${isActive ? "border-b-2 border-purple-500" : ""}`
      }>
        
        Pastes
      </NavLink>
    </div>
  )
}

export default Navbar
