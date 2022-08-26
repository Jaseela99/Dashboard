import React from 'react'
import "./Users.css"
import { Link } from 'react-router-dom'
const Users = () => {
  return (
    <div className='container'>
    <div className='tabs'>
      <Link to="/users/user1" ><button className='user'>User1</button></Link> 
      <Link to="/users/user2" ><button className='user'>User2</button></Link> 
      <Link to="/users/user3" ><button className='user'>User3</button></Link> 
           </div>
    </div>
  )
}

export default Users