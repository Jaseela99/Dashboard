import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <div className='header'>
        <ul className='heading'>
          <li className='title'> Dashboard</li>
        <Link to="/users"><li className='option'>Users</li></Link>
          <Link to="/orders"><li className='option'>Orders</li></Link>
        </ul>
    </div>
    

    </>
  )
}

export default Header