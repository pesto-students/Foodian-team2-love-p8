import React, { useState } from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from "react-outside-click-handler"
import {Link} from "react-router-dom"
import h_img from "../../Assets/Imags/Foodian_logo.png"

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
                <img src={h_img} alt="logo"  className='imglogo'/>
                <p>Foodian</p>
            </div>


            {/* <OutsideClickHandler onOutsideClick={()=>{setMenuOpened(false)}}> */}
            <div className='flexCenter h-menu' style={getMenuStyles(menuOpened)}>
              
                <Link to="/">Home</Link>
                <Link to="/">Add Restaurant</Link>
                <Link to="/login"><button className='button' >Login</button></Link>
                <Link to="/signup"><button className='button' >SignUp</button></Link>
               
               
               

                
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