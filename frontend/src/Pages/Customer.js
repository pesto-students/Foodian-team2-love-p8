import React from 'react'
import Offers from '../components/Offers/Offers'
import Restaurants from '../components/Restaurants/Restaurants'
import {Banner} from '../components/Banner/Banner'

const Customer = () => {
  return (
    <div>
        <Banner/>
        <Offers/>
        <Restaurants/>
    </div>
  )
}

export default Customer