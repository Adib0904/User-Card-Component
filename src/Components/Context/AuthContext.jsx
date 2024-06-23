import React, { Children, createContext, useState } from 'react'

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(false)
  const [token, setToken] = useState("")


  const login = (token) => {
    setAuth(true)
    setToken(token)
  }
  const logout = () => {
    setAuth(false)
    setToken('')

  }

  const Payload = {
    isAuth,
    login,
    logout,
    token
  }
  return (
    <AuthContext.Provider value={Payload}>
      {children}
    </AuthContext.Provider>
  )
}
