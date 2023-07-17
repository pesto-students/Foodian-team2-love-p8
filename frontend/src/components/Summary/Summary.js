import React from 'react'
import { UseSelector, useSelector } from 'react-redux'
import { cartProducts } from '../../Store/cart/cartSlice'
import "./Summary.css"
import SummaryCard from './SummaryCard'
import { CurrencyRupee, CurrencyRupeeRounded } from '@mui/icons-material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

 
const Summary = ({onTabSwitch}) => {
    const cart = useSelector(cartProducts)
    const totalAmount = cart.reduce((total, product) => total + (product.amount*product.price), 0);
    const handle = ()=>{
            onTabSwitch("Delivery")
    }
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
     <div className='total-amount'>

              <p>Total Amount :</p>
              <div className='flexCenter'>
                <CurrencyRupeeRounded/>
                <p>{totalAmount}</p>
              </div>
              
      </div>
      <div className='total-button'>
        <button className='button' onClick={handle}>
              <div className='flexCenter'>
                  <p style={{fontSize:"17px"}}>Next</p>
                  <ArrowRightAltIcon style={{fontSize:"30px",marginLeft:"6px"}}/>
              </div>
        </button>
      </div>
      
    </div>
  )
}

export default Summary



