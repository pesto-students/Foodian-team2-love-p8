import React from 'react'
import './Cart.css'
import { Tabs } from '../../components/Tabs/Tabs'
import { useSelector } from 'react-redux'

import useTabSwitch from '../../Hooks/useTabSwitch'


import { cartProducts } from '../../Store/cart/cartSlice'
import AddressForm from '../../components/Address/AddressForm'
import Summary from '../../components/Summary/Summary'


const Cart = () => {

    const cart  = useSelector(cartProducts)
    const tabs = ['Summary','Delivery','Payment']

    const [currentTab,handleTabSwitch] = useTabSwitch(tabs,'Summary')
    
    if(!cart || cart.length ===0 ){
        return(
            <div style={{marginTop:300}} className='flexCenter'>
               <div className='cart-empty'>
                   <p className='cart-empty-p'>Your cart is empty</p>
                   <p className='cart-empty-p1'>Order now we are ready to serve</p>
                   <img src="https://img.freepik.com/free-vector/recipe-book-concept-illustration_114360-7481.jpg?w=1380&t=st=1688556837~exp=1688557437~hmac=7b048f927b98cbcf17c46e0bd8cd54b3e48894b6f95d5946486613d2f375410b"alt="cart-empty" className='cart-empty-img'/>

               </div>
            </div>
        )
    }
  return (
    <div className='cart-main innerWidth'>
            <div className='cart-main1'>
              <Tabs list={tabs} onTabSwitch={handleTabSwitch} activeTab={currentTab}/>
              <div className={`tabs ${currentTab !== 'Summary' ? 'hidden' : ''}`}>
                           <Summary/>
              </div>
              <div className={`tabs ${currentTab !== 'Delivery' ? 'hidden' : ''}`}>
                     <AddressForm onTabSwitch={handleTabSwitch}/>
              </div>
              <div className={`tabs ${currentTab !== 'Payment' ? 'hidden' : ''}`}>
                            Payment
              </div>

              </div>
    </div>
  )  
}

export default Cart