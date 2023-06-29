import React from 'react'
import './Banner.css'
import { SearchRounded } from '@mui/icons-material'

export const Banner = () => {
  return (
    <div className='bg'>
    <div className='innerWidth'>
        <h3 className='main'> Hello Sachin,</h3>
        
        <div className='flexCenter banner'>

        <p className='h-banner'> Choose your favorite dishes from a wide selection of top-rated restaurants</p>
        </div>
        <div className='flexCenter search'>
        <div className='inputBox'>
                
          <SearchRounded className='searchIcon'/>
          <input type="text" placeholder='Searh Restaurants'/>


        </div> 
        </div>
    </div>
     
    </div>
  )
}
