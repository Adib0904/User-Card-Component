import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from './Context/AuthContext'

export const PrivateRouter = ({ children }) => {

  const { isAuth } = useContext(AuthContext);

  if (!isAuth) {
    return <Navigate to='/Login' />
  }

  return (
    <>
      {children}
    </>
  )
}
