import React from 'react'
import"./Offers.css"
import first_img from "../../Assets/Imags/pizza 1.png"
import second_img from "../../Assets/Imags/ten-percent-discount 1.png"
import third_img from "../../Assets/Imags/free-white 1.png"

const Offers = () => {
  return (
    <div className='innerWidth'>
      <p className='h-offers'>Today Deals</p> 
    <div className='flexCenter'>
       
      <div className='offers'>
        <p >30% OFF on your first order</p>
        <img src={first_img} alt="pizza" style={{width:75}}/>

      </div>

      <div className='offers' style={{backgroundColor:"#FF3535"}}>
        <p>10% discount on Drinks</p>
        <img src={second_img} alt="10%"/>

      </div>

      <div className='offers' style={{backgroundColor:"#0BCB2A"}}>
        <p>Orders above 499 get free Delivery</p>
        <img src={third_img} alt="free"/>

      </div>

    </div>
    </div>
  )
}

export default Offers