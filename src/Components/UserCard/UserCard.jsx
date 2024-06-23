import React from 'react'
import './UserCard.css'
import { Link } from 'react-router-dom'

export const UserCard = ({ id, avatar, first_name, last_name, email }) => {
  return (
    <div className='main'>
      <div className="user-img">
        <img src={avatar} alt="" />
      </div>
      <div className="user-name">
        {first_name} {last_name}
      </div>
      <p><b>{email}</b></p>
      <Link to={`/userDetails/${id}`}><button className='button'>More details</button></Link>
    </div>
  )
}
