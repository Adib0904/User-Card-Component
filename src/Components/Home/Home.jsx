import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import './Home.css'
export const Home = () => {

  const { token, isAuth } = useContext(AuthContext)


  return (
    <div className='home-div'>

      <h1 >{!isAuth ? 'Token : PLEASE LOGIN ' : `Token : ${token}`}</h1>


    </div>
  )
}
