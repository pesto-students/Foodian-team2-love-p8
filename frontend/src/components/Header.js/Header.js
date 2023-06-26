import React, { useState } from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from "react-outside-click-handler"
import {Link} from "react-router"

const Header = () => {
  const [menuOpened,setMenuOpened]=useState(false)
 
  const getMenuStyles=(menuOpened)=>{
    if(document.documentElement.clientWidth<=800){
      return {right:!menuOpened && "100%"}
    }
  }
  return (
    <section >
        <div className='flexCenter paddings innerWidth header1'>
            <div className='flexCenter h-name '>
                <img src="./Foodian_logo.png" alt="logo"  className='imglogo'/>
                <p>Foodian</p>
            </div>


            {/* <OutsideClickHandler onOutsideClick={()=>{setMenuOpened(false)}}> */}
            <div className='flexCenter h-menu' style={getMenuStyles(menuOpened)}>
              
               
                <a href="/">Add Restaurant</a>
                <button className='button'>Login</button>
                <button className='button'>SignUp</button>
               
               

                
            </div>
            {/* </OutsideClickHandler> */}

            <div className='menu-icon' onClick={()=>setMenuOpened((prev)=>!prev) }>
              <BiMenuAltRight size={30}/>

            </div>
        </div>
    </section>
  )
}

export default Header