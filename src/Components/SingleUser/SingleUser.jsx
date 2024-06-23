import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './SingleUser.css'
import CircularIndeterminate from '../CircularIndeterminate'
export const SingleUser = () => {
  const [isLoading, setLoading] = useState(false)
  const { id } = useParams();
  const [user, setUser] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    setLoading(true)
    const response = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await response.json()
    setLoading(false)
    setUser([data])
  }

  if (isLoading) {
    return (
      <div className='center-info'>
        <CircularIndeterminate />
      </div>
    )

  }

  return (
    <>

      {
        user.map((elem, ind) =>

          <div key={ind} className="container">
            <div className="left-section">
              <img className="avatar" src={elem.data.avatar} alt="Avatar" />
            </div>
            <div className="right-section">
              <div className="information">
                <h1> <b>{elem.data.first_name} {elem.data.last_name}</b></h1>
                <p>{elem.data.email}</p>
              </div>
              <div className="support-text">
                {elem.support.text}
                <a className="support-link" href={elem.support.url} target="_blank">Support ReqRes</a>
              </div>
              <Link to='/AllUsers' ><button className='back-btn'>Back</button></Link>
            </div>
          </div>
        )

      }


    </>
  )
}
