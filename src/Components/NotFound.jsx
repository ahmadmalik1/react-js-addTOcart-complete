import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>

    <h1 className='m-5'>
    ERROR 404 <br />
    Page Not Found
    </h1>

        <Link className="badge bg-warning continue-shopping-btn" to="/">
            <i className="bi bi-arrow-left"></i>
                Goto back Home
        </Link>
    </>
  )
}

export default NotFound
