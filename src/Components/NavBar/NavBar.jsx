import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export const NavBar = () => {

  const navData = [
    { tital: 'HOME', path: "/" },
    { tital: 'USERS', path: "/Allusers" },
    { tital: 'LOGIN', path: "/Login" },

  ]
  return (
    <div className='navBar'>
      {
        navData.map((elem, ind) =>

          <Link key={ind} to={elem.path}>
            <div className='nav-element' >{elem.tital} </div>
          </Link>

        )
      }
    </div>
  )
}
