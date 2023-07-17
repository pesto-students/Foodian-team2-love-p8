import React from 'react'
import './Payment.css'
import { Link } from 'react-router-dom'

const PaySuccess = () => {
  return (
    
    <div className="main-container">
	<div className="check-container">
		<div className="check-background">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    
      <path
        className="check-path"
        d="M30 50L45 65L70 35"
        stroke="white"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
		</div>
		<div className="check-shadow"></div>
       
	</div>
    <h1>Order Delivered</h1>
    <Link to="/delivery"><button className='button'>Go Back</button></Link>
</div>

  )
}

export default PaySuccess