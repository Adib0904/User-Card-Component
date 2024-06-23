import React, { useEffect, useState } from 'react'
import { UserCard } from '../UserCard/UserCard'
import './Allusers.css'
import CircularIndeterminate from '../CircularIndeterminate'

export const AllUsers = () => {
  const [isLoading, setLoading] = useState(false)
  const [apiData, setData] = useState([]);
  const [page, setPage] = useState(1)
  let pageString = 'Now';
  if (page == 1) {
    pageString = 'Now'
  } else {
    pageString = 'Prev'
  }
  useEffect(() => {
    getData()
  }, [page])

  const getData = async () => {
    try {
      setLoading(true)
      const respnse = await fetch(`https://reqres.in/api/users?page=${page}`)
      const data = await respnse.json();
      setData(data.data)
      setLoading(false)
      // console.log(apiData)
    } catch (err) {
      return <h1>Data Not Found,{err}</h1>
    }

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
      <div className="main-div">
        {
          apiData.map((elem, ind) =>
            <UserCard key={elem.id} {...elem} />
          )
        }

      </div>
      <div className="page">
        <button onClick={() => { setPage(1) }}>{pageString}</button>
        <button onClick={() => { setPage(2) }}>Next</button>
      </div>

    </>
  )
}
