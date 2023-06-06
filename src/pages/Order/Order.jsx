import React from 'react'
import "./Order.css"
import { Link } from 'react-router-dom'
import orderSuccess from "../../assets/orderSuccess.gif"
export const Order = () => {
  return (
    <div className='order'>
        <img src= {orderSuccess}  />
    <h1> Order Successfull </h1>
     <h3> Thanks for ordering with us ..!</h3>
   <Link  className = "link"to = "/">  <button className='orderBtn'> Continue Shopping </button> </Link>
        </div>
  )
}
