import React from 'react'
import"./Offers.css"

const Offers = () => {
  return (
    <div className='innerWidth'>
      <p className='h-offers'>Today Deals</p> 
    <div className='flexCenter'>
       
      <div className='offers'>
        <p >30% OFF on your first order</p>
        <img src="./pizza 1.png" alt="pizza" style={{width:75}}/>

      </div>

      <div className='offers' style={{backgroundColor:"#FF3535"}}>
        <p>10% discount on Drinks</p>
        <img src="./ten-percent-discount 1.png" alt="10%"/>

      </div>

      <div className='offers' style={{backgroundColor:"#0BCB2A"}}>
        <p>Orders above 499 get free Delivery</p>
        <img src="./free-white 1.png" alt="free"/>

      </div>

    </div>
    </div>
  )
}

export default Offers