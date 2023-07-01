import React from 'react'
import "./Restaurants.css"
import data from '../../utils1/resto.json'
import { Star } from '@mui/icons-material'
const Restaurants = () => {
    
    const restoEle = data.map(resto => (
        <div className='restoCard'>
            <img src={resto.image} alt="restaurant" className='restoImg'/>
            <p className='h-resto'>{resto.name}</p>
            <div className='resto-rate'>
                <p>{resto.rating}</p>
                <Star/>
            </div>
           
           
        </div>
    ))
    console.log(restoEle)
  return (
   <section className='section-resto'>
            <div className='innerWidth'>
            <p className='resto-main'>Restaurants</p>
            <div className="flexCenter">
                {restoEle}
            </div>
        </div>
   </section>
  )
}

export default Restaurants


