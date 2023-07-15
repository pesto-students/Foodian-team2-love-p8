import React from 'react'
import "./Restaurants.css"
import data from '../../utils1/resto.json'
import { Link } from 'react-router-dom'
import { Star } from '@mui/icons-material'
import { filteredRestaurants } from '../Banner/Banner';
const Restaurants = () => {
    
    const restoEle = data.map(resto => (
        <div className='restoCard'><Link to='/login/user/2'>
            <img src={resto.image} alt="restaurant" className='restoImg'/>
            <p className='h-resto'>{resto.name}</p>
            <div className='resto-rate'>
                <p>{resto.rating}</p>
                <Star/>
            </div>
            </Link>
           
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


