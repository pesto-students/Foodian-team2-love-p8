import React, { useState, useEffect } from 'react';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import './Aorders.css';
import { BallTriangle} from 'react-loader-spinner'
const Delivered = () => {
  const [order, setOrders] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedOrderItems, setSelectedOrderItems] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/v1/item/order', {
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

  const handleViewItemsClick = (orderItems) => {
    setSelectedOrderItems(orderItems);
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const handleAcceptOrder = (orderId) => {
    // Make a PUT request to update the status to "accepted" in the backend
    fetch(`http://localhost:5000/api/v1/item/order/${orderId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: 'delivered' }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        
        // Handle the response if needed
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const filteredOrders = order
  .filter((order) => order.status === 'delivered')
  .sort((a, b) => {
    // Assuming the orderDateTime is stored as a string, convert it to Date objects for comparison
    const dateA = new Date(a.orderDateTime);
    const dateB = new Date(b.orderDateTime);

    // Sort in ascending order (earliest order first), for descending order use "dateB - dateA"
    return dateA - dateB;
  });


  return (
    <div className='orderA-main'>
      <div className='orders-ele-1'>
        <h3 className='orders-ele-1-h3'>Order Id</h3>
        <h3 className='orders-ele-1-h3'>Address</h3>
        <h3>Items</h3>
        <h3>Status</h3>
      </div>
      {isLoading ? (
        <div className='loader-container'>
         
           <BallTriangle height={80} width={80} color="blue" />



         
        </div>
      ) : filteredOrders.length === 0 ? (
            <div className='flexColCenter'>
                  
                  <img src="https://cdn-icons-png.flaticon.com/512/669/669737.png?w=740&t=st=1689318677~exp=1689319277~hmac=4d3bf71ab931a1217dc8394ffe1b0965a009af98fbea6c509390923e28a5a7ad" alt="no-ordr-image" style={{width:"250px"}}/>
                  <p style={{fontSize:"2rem"}}>No orders available.</p>
            </div>
      ) : (
      filteredOrders.map((order, index) => (
        <div className='orders-ele' key={index}>
          <p className='orders-ele-1-p'>{order._id}</p>
          <div className='orders-ele-1-p'>
          {order.shippingAddress ? (
  order.shippingAddress.deliveryType === "Take Away" ? (
    <p>{order.shippingAddress.deliveryType}</p>
  ) : (
    <div>
      <p>{order.shippingAddress.street}</p>
      <p>{order.shippingAddress.Door}</p>
      <p>{order.shippingAddress.City}</p>
      <p>{order.shippingAddress.deliveryType}</p>
    </div>
  )
) : (
  <p>Loading shipping address...</p>
)}
          </div>
          <p className='orders-ele-1-p1'>
            <a href='#' onClick={() => handleViewItemsClick(order.orderItems)}>
              <span>View Items</span>
            </a>
          </p>
          <span class="stamp is-approved"  onClick={() => handleAcceptOrder(order._id)}>Delivered</span>
        </div>
      ))
    )}
      {isPopupOpen && (
        <div className='popup-container'>
          <div className='popup'>
            <div className='popup-content'>
              <h2>Items</h2>
             
              <table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th className='flexCenter'><p>Price</p><CurrencyRupeeIcon/></th>
                  </tr>
                </thead>
                <tbody>
                  {selectedOrderItems.map((item, index) => (
                    <tr key={index} style={index % 2 === 0 ? { backgroundColor: '#dddfdd' } : {}}>
                      <td>{item.name}</td>
                      <td>{item.amount}</td>
                      <td>{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className='button' onClick={handleClosePopup}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Delivered;
