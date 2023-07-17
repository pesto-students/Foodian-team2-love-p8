import React from 'react'
import "./Hero.css"
import {CgArrowLongRight} from 'react-icons/cg'
import { Link } from 'react-router-dom'
import b_img from "../../Assets/Imags/burger 1.png"
const Hero = () => {
  return (
    <section className='hero-wrapper width'>
        <div className='paddings innerWidth flexCenter hero-container'>
                 <div className='inside'>
                        
    
                            <h1 className='hero-heading'>Fastest  <span>Delivery </span>  <br/> & <br/>Easy <span>Pickup </span> </h1>
                            <div className='hero-order flexCenter'>
                                <h3>Order Now</h3>
                               <Link to="/login"><button className='button'><CgArrowLongRight color="white"  className='arrow'/></button> </Link>
                            </div>
                       
                 </div>
                 <div className='image-container'>
                    <img src={b_img} alt="burger_logo" className='img1' />
                 </div>

        </div>
 
    </section>
 
  )
}

export default Hero