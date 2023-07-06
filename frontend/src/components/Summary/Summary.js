import React from 'react'
import { UseSelector, useSelector } from 'react-redux'
import { cartProducts } from '../../Store/cart/cartSlice'
import "./Summary.css"
import SummaryCard from './SummaryCard'

 
const Summary = () => {
    const cart = useSelector(cartProducts)
  return (
    <div className='summary'>
      
       <div className='summary-card'>

        { 
              cart && cart?.map((product,index)=>{
                return(
                    <div className='div1'><SummaryCard product={product} key={index}/></div>
                    
                )
              })
          

        }
       </div>
       
    </div>
  )
}

export default Summary



