import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

    <div className='flex flex-row gap-4 place-content-evenly'>
     <NavLink to='/'>
      Home
     </NavLink>

     <NavLink to='/pastes'>
      Paste
     </NavLink>
     </div>

     </div>
  )
}

export default Navbar