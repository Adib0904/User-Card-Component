import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './Home/Home'
import { AllUsers } from './Users/AllUsers'
import { Login } from './Login/Login'
import { SingleUser } from './SingleUser/SingleUser'
import { PrivateRouter } from './PrivateRouter'
export const AllRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AllUsers' element={<AllUsers />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/userDetails/:id' element={
          <PrivateRouter>
            <SingleUser />
          </PrivateRouter>
        } />
      </Routes>
    </div>
  )
}
