import React from 'react'
import "./Hero.css"
import {CgArrowLongRight} from 'react-icons/cg'

const Hero = () => {
  return (
    <section className='hero-wrapper width'>
        <div className='paddings innerWidth flexCenter hero-container'>
                 <div className='inside'>
                        
    
                            <h1 className='hero-heading'>Fastest  <span>Delivery </span>  <br/> & <br/>Easy <span>Pickup </span> </h1>
                            <div className='hero-order flexCenter'>
                                <h3>Order Now</h3>
                               <button className='button'><CgArrowLongRight color="white"  className='arrow'/></button> 
                            </div>
                       
                 </div>
                 <div className='image-container'>
                    <img src="/burger 1.png" alt="burger_logo" className='img1' />
                 </div>

        </div>
 
    </section>
 
  )
}

export default Hero