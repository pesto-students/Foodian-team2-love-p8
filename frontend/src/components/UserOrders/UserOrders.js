import React from 'react'
import "./UserOrders.css"
import  { useState, useEffect } from 'react';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { BallTriangle } from 'react-loader-spinner';




const UserOrders = () => {
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
        setLoading(false);
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
      body: JSON.stringify({ status: 'accepted' }),
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
    .filter((order) => order.status === 'ordered')
    .sort((a, b) => {
      // Assuming the orderDateTime is stored as a string, convert it to Date objects for comparison
      const dateA = new Date(a.orderDateTime);
      const dateB = new Date(b.orderDateTime);

      // Sort in ascending order (earliest order first), for descending order use "dateB - dateA"
      return dateA - dateB  ;
    });
  return (
    <div className='user-order innerWidth'>


 


          

                  <img src="https://img.freepik.com/free-vector/flat-construction-template_23-2147739035.jpg?size=626&ext=jpg&ga=GA1.2.362557203.1684250412&semt=ais" alt="construction"/>
   
     

          
    </div>    

  
  
  )
}

export default UserOrders