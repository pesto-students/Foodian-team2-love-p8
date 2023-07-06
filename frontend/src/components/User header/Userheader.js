import React from 'react'
import { useState } from 'react'
import {BiMenuAltRight} from 'react-icons/bi'
import {} from "@mui/material"
import {BarChart, LoginSharp, LoginTwoTone, LogoutOutlined, LogoutTwoTone, PersonPinCircleOutlined, SearchRounded, ShoppingCartRounded} from "@mui/icons-material"
import "./Userheader.css"
import img from "../../Assets/Imags/Foodian_logo.png"
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { cartProducts } from '../../Store/cart/cartSlice'

const Userheader = () => {
  const productsInCart = useSelector(cartProducts)
  const cartCount = productsInCart ? productsInCart.length:0
  //cart

  const [menuOpened,setMenuOpened]=useState(false)
 
  const getMenuStyles=(menuOpened)=>{
    if(document.documentElement.clientWidth<=800){
      return {right:!menuOpened && "100%"}
    }
  }
  return (
    
    <section className='section1' style={{ position: 'fixed', top: 0, left: 0, right: 0 }}>
    <div className='flexCenter paddings innerWidth header1' >
        <div className='flexCenter h-name' >
            <img src={img} alt="logo"  className='imglogo'/>
            <p>Foodian</p>
        </div>
        


        {/* <OutsideClickHandler onOutsideClick={()=>{setMenuOpened(false)}}> */}
        <div className='flexCenter h-menu' style={getMenuStyles(menuOpened)}>
          
           
            <a href="/">Your Orders</a>

            <Link to="cart"><div className='shoppingCart'>
              <ShoppingCartRounded  className='cart'/>
              {
             
               
                 cartCount>0 ?  <div className='cart_content'><p>{cartCount}</p></div> : null
               }
               
              
             
            </div></Link>
            
            

           
          
           <LogoutTwoTone/>
           

            
        </div>
        {/* </OutsideClickHandler> */}

        <div className='menu-icon' onClick={()=>setMenuOpened((prev)=>!prev) }>
          <BiMenuAltRight size={30}/>

        </div>
    </div>
</section>
  )
}

export default Userheader