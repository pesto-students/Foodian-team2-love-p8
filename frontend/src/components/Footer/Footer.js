import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='f-wrapper'>
        <div className='innerWidth'>
       
       <div className='flexStart paddings'>
                <img src="./Foodian_logo.png" alt="logo" className='f-img'/>
                <p className='f-name'>Foodian</p>
            </div>


       <div className='flexCenter f-div'>
       <div className='f-card'>
               
               <ul>
                 <li ><h4>About Foodian</h4></li>
                 <li><br/></li>
                
                 <li> Who We Are</li>

                 <li>Blog</li>
                 <li>Work With Us</li>
                 <li>Report Fraud</li>
                 <li>Contact Us</li>
               </ul>
         </div>
         <div className='f-card'>
         
             <ul>
                 <li><h4>Learn More</h4></li>
                 <li><br/></li>
                
                 <li> Privacy</li>

                 <li>Security</li>
                 <li> Terms</li>
                 <li>Site map</li>
                 <li>Ratings</li>
               </ul>
             
         
          
         </div>
             
       </div>
       </div>
    </div>
  )
}

export default Footer