import React from 'react'
import { useState } from 'react'
import { Link,NavLink } from 'react-router-dom'
import { Outlet } from 'react-router'
import "./Admin.css"
import h_img from "../../Assets/Imags/Foodian_logo.png"
import { BiLogOut } from 'react-icons/bi'
const Admin = () => {
  const [activeLink, setActiveLink] = useState('items');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (<>
    <section className='desk1' >

               <div>
                     
                      <img src="https://img.freepik.com/free-vector/warning-concept-illustration_114360-1551.jpg?size=626&ext=jpg&ga=GA1.2.362557203.1684250412&semt=sph" alt="view" style={{width:"400px"}}/>
                      <h1 style={{fontSize:"1.7rem",margin:"20px"}}>View only in devices with width more than 800px</h1>
               </div>
      </section>
    <div className='desk'>
     
         <section >
        <div className='flexCenter paddings innerWidth header1'>
            <div className='flexCenter h-name header9'>
                <img src={h_img} alt="logo"  className='imglogo'/>
                <div>
                <p>Foodian</p>
               
                </div>
                
            </div>

           
           
            <div className='flexCenter h-menu'>
              
                
                <Link to="/admin"  className={`nav-admin ${activeLink === 'items' ? 'active' : ''}`}
                        onClick={() => handleLinkClick('items')}>Items</Link>

                <Link to="admin-add"  className={`nav-admin ${activeLink === 'Add' ? 'active' : ''}`}
                        onClick={() => handleLinkClick('Add')}>Add Item</Link>
               
                
               <Link to="admin-orders"  className={`nav-admin ${activeLink === 'orders' ? 'active' : ''}`}
                        onClick={() => handleLinkClick('orders')}>Orders</Link>
                <Link to="/"><BiLogOut style={{fontSize:"28px"}}/></Link>
               
               
               

                
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
    </>)
  }

export default Admin