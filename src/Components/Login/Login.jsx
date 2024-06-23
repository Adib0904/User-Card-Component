import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
import axios from 'axios'
import './Login.css'

export const Login = () => {
  const { isAuth, login, logout, token } = useContext(AuthContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const handleLogin = (event) => {
    const { value } = event.target;
    setEmail(value)
  }
  const handlePass = (event) => {
    const { value } = event.target;
    setPassword(value)
  }

  const handleSubmit = () => {
    const payload = {
      email,
      password
    }
    setEmail('');
    setPassword('');
    axios
      .post("https://reqres.in/api/login", payload)
      .then(res => {
        login(res.data.token)
      })
      .catch(
        err => alert(`Invaild Credentials, ${err}`),
      )
  }

  // eve.holt@reqres.in
  // cityslicka




  if (isAuth) {
    return (
      <>
        <div className="main-container">
          <h1>Your Logged In</h1>
          <h4>Token No : {token}</h4>
          <button className='logoutBtn' onClick={logout}>Logout</button>
        </div>

      </>
    )
  }

  return (
    <>
      <div className='main-container'>
        <h1>{!isAuth && 'PLEASE LOGIN'}</h1>
        <input onChange={handleLogin} value={email} type="text" placeholder='Enter Your Email...' />
        <input onChange={handlePass} value={password} type="text" placeholder='Enter Your Password...' />
        <button className='loginBtn' onClick={handleSubmit}>Login</button>
        {/* <button className='logoutBtn' onClick={logout}>Logout</button> */}
      </div>
      <div className='home-div'>

        <p>Login Id- eve.holt@reqres.in</p>
        <p>Password-cityslicka</p>
      </div >

    </>
  )
}
