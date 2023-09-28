import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav>
      <ul>
        <li>
          <NavLink to="/home">home</NavLink>
        </li>
        <li>
          <NavLink to="/booklists">booklists</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">favorites</NavLink>
        </li>
      </ul>
    </nav>


    </div>
  )
}
