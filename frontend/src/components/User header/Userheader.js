import React from 'react'
import { useState } from 'react'
import {BiMenuAltRight} from 'react-icons/bi'
import {} from "@mui/material"
import {BarChart, LoginSharp, LoginTwoTone, LogoutOutlined, LogoutTwoTone, PersonPinCircleOutlined, SearchRounded, ShoppingCartRounded} from "@mui/icons-material"
import "./Userheader.css"

const Userheader = () => {
  const [menuOpened,setMenuOpened]=useState(false)
 
  const getMenuStyles=(menuOpened)=>{
    if(document.documentElement.clientWidth<=800){
      return {right:!menuOpened && "100%"}
    }
  }
  return (
    // <header>
    //      <img src="./Foodian_logo.png" alt="logo"  className='logo'/>

    //      {/* <div className='inputBox'>
                
    //          <SearchRounded className='searchIcon'/>
    //          <input type="text" placeholder='Searh Restaurants'/>


    //      </div> */}
    //      <div className='shoppingCart'>
    //           <ShoppingCartRounded  className='cart'/>
    //           <div className='cart_content'>
    //             <p>2</p>
    //           </div>
             
    //      </div>
    //      <div className='profileContainer'>
    //           <div className='imgBox'>
    //                 <PersonPinCircleOutlined />
    //                 <h2 className='userName'>Sachin</h2>

    //           </div>
    //      </div>


    //     <div className='toggleMenu'>
    //       <BarChart className="toggleIcon"/>

    //     </div>
    //          <div>
    //      </div>
    // </header>
    <section style={{ position: 'fixed', top: 0, left: 0, right: 0 }}>
    <div className='flexCenter paddings innerWidth header1' >
        <div className='flexCenter h-name' >
            <img src="./Foodian_logo.png" alt="logo"  className='imglogo'/>
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