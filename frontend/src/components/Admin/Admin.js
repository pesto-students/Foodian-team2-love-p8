import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import { Outlet } from 'react-router'
import "./Admin.css"
import h_img from "../../Assets/Imags/Foodian_logo.png"
import { BiLogOut } from 'react-icons/bi'
const Admin = () => {
  return (
    <div>
         <section >
        <div className='flexCenter paddings innerWidth header1'>
            <div className='flexCenter h-name header9'>
                <img src={h_img} alt="logo"  className='imglogo'/>
                <div>
                <p>Foodian</p>
               
                </div>
                
            </div>

           
           
            <div className='flexCenter h-menu'>
              
                
                <NavLink to="/admin" className="nav-admin">Items</NavLink>
                <Link to="admin-add" className="nav-admin">Add Item</Link>
                <Link to="admin-orders" className="nav-admin">Orders</Link>
               <BiLogOut/>
               
               
               

                
            </div>
           

            <div className='menu-icon'>
             

            </div>
        </div>
    </section>
     <div className='admin-heading'>
     <p >Family Restaurant  Admin Pannel</p>
     </div>
     <Outlet/>
    </div>
  )
}

export default Admin