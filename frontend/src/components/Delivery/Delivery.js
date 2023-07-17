import React from 'react'
import "./Delivery.css"
import ListAltIcon from '@mui/icons-material/ListAlt';
import RestoreIcon from '@mui/icons-material/Restore';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router';
import { LoginOutlined } from '@mui/icons-material';
const Delivery = () => {
  return (<>
  <section className='d-desk'>
      <div>
        <img src="https://img.freepik.com/free-vector/warning-concept-illustration_114360-1551.jpg?size=626&ext=jpg&ga=GA1.2.362557203.1684250412&semt=sph" alt="image"/>
        <h1 style={{fontSize:"2rem"}}>View only in devices width less than 800px</h1>
      </div>
    </section>
    <div className='delivery'>
         <Outlet/>
        <div className='delivery-cont'>
            <ListAltIcon style={{fontSize:"2rem",color:"#FE511A"}}/>
            <RestoreIcon style={{fontSize:"2rem"}}/>
           <Link to='/'><LoginOutlined style={{fontSize:"2rem"}}/></Link> 

        </div>


       
    </div>
    </>)
}

export default Delivery