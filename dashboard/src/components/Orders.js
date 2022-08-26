import React from 'react'
import { Link } from 'react-router-dom'
import "./Orders.css"
const Orders = () => {
  return (
    <div className='container'>
    <div className='tabs'>
      <Link to="/orders/order1" ><button className='order'>Order1</button></Link> 
      <Link to="/orders/order2" ><button className='order'>Order2</button></Link> 
      <Link to="/orders/order3" ><button className='order'>Order3</button></Link> 
           </div>
    </div>
  )
}

export default Orders