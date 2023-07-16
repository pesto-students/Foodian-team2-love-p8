import React, { useState, useEffect } from 'react';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { BallTriangle} from 'react-loader-spinner'
import { backendUrl } from '../../utils1/Url';
const DeliveryList = () => {
  const [order, setOrders] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`${backendUrl}/api/v1/item/order`, {
      method: 'GET',
      // Add any necessary parameters or query strings
    })
      .then((response) => response.json())
      .then((responseData) => {
        const mydata = responseData.data.Order;
        setOrders(mydata);
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const filteredOrders = order
    .filter((order) => order.status === 'accepted')
    .sort((a, b) => {
      const dateA = new Date(a.orderDateTime);
      const dateB = new Date(b.orderDateTime);
      return dateA - dateB;
    });

  return (<> 
    
    <div className='delivery-list'>
      <div className='delivery-list-1'>
        <h1>Home</h1>
      </div>

      <div className='delivery-list-2'>
      {isLoading ? (
        <div className='loader-container'>
         
           <BallTriangle height={80} width={80} color="blue" />



         
        </div>
      ) : filteredOrders.length === 0 ? (
            <div className='no-order-d'>
                  
                  <img src="https://cdn-icons-png.flaticon.com/512/669/669737.png?w=740&t=st=1689318677~exp=1689319277~hmac=4d3bf71ab931a1217dc8394ffe1b0965a009af98fbea6c509390923e28a5a7ad" alt="no-ordr-image" style={{width:"250px"}}/>
                  <p style={{fontSize:"2rem"}}>No orders available.</p>
            </div>
      ) : (
        filteredOrders.map((order) => (
          <div className='delivery-list-card' key={order._id}>
            <div className='deleivery-list-card-h'>
              <p className='deleivery-list-card-p'>Order ID</p>
              <p>#{order._id}</p>
            </div>

            <div className='d-orders-nav'>
              <div>
                <div className='d-orders-1'>
                  <RestaurantMenuIcon />
                </div>
                <p
                  style={{
                    textAlign: 'center',
                    color: 'slategray',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <KeyboardDoubleArrowDownIcon /> <KeyboardDoubleArrowDownIcon />
                </p>
                <div className='d-orders-1'>
                  <HomeIcon />
                </div>
              </div>

              <div className='d-order-names'>
                <div className='d-order-names-1'>
                  <p style={{ color: 'slategray' }}>PICK UP ORDER</p>
                  <h5>Family Restaurant</h5>
                </div>
                <div>
                  <p style={{ color: 'slategray' }}>DELIVER ORDER</p>
                  <h5>{order.shippingAddress.street}</h5>
                     
                   <h5>{order.shippingAddress.City}</h5>
                 
                   <h5>{order.shippingAddress.deliveryType}</h5>
                </div>
              </div>
            </div>

            <div className='d-order-button'>
            <Link to={`/accept-order/${order._id}`}>
                <button className='button' style={{ width: '310px', backgroundColor: 'green' }}>
                  Pick Up Order
                </button>
              </Link>
            </div>
          </div>
        ))
      )}
      </div>
    </div>
    </> );
};

export default DeliveryList;
