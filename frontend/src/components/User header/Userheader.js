import React from 'react'
import { useState } from 'react'
import {BiMenuAltRight} from 'react-icons/bi'
import {} from "@mui/material"
import {BarChart, LoginSharp, LoginTwoTone, LogoutOutlined, LogoutTwoTone, PersonPinCircleOutlined, SearchRounded, ShoppingCartRounded} from "@mui/icons-material"
import "./Userheader.css"
import img from "../../Assets/Imags/Foodian_logo.png"

const Userheader = () => {
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

            <div className='shoppingCart'>
              <ShoppingCartRounded  className='cart'/>
              <div className='cart_content'>
                <p>2</p>
               </div>
             
            </div>
            
            

           
          
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