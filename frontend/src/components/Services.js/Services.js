import React from 'react'
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react'
import "swiper/css"
// import 'swiper/swiper.min.css';
// import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Autoplay, Navigation } from 'swiper/core';
import "./Services.css";
import data from '../../utils1/slider.json'
import { sliderSettings } from '../../utils1/common';
import { Link } from 'react-router-dom';

SwiperCore.use([Autoplay, Navigation]);


const Services = () => { 
    console.log(Swiper)
  return (
    <section >
        <div className='paddings innerWidth container'>
        <p className='s-heading'> Select Your Food From Mutliple restaurants and Different Categories  </p>
        <Swiper {...sliderSettings} autoplay={{ delay: 2000 }}>
         
               {
                   data.map((card,i)=>(

                              <SwiperSlide key={i}  >
                                            <div className='card'>
                                               <img src={card.image} alt="immmmmm g" className='s-img'/>
                                               <h4>{card.name}</h4>
                                            
                                            </div>
                              </SwiperSlide>


                   ))
               }
               
        </Swiper>
        <Link to="/login"><button className='button'>Order Now</button></Link>
        </div>
    </section>
  )
}

export default Services


const SliderButtons =()=>{
  const swiper = useSwiper();
  return(
    <div className='r-button'>
      <button onClick={()=>swiper.slidePrev()}>
        &lt;

      </button>

      <button onClick={()=>swiper.slideNext()}>
        &gt; 
      </button>

    </div>
  )
}