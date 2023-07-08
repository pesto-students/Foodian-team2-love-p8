import React, { useState } from 'react';
import './Aorders.css';
const data = [
   
   
  { item:"Biryani",name: "Sachin", address:"wankhde stadium,door-5454,mumbai", status: "delivered" },
  { item:"Biryani",name: "Sachin", address:"wankhde stadium,door-5454,mumbai", status: "delivered" },
  { item:"Biryani",name: "Sachin", address:"wankhde stadium,door-5454,mumbai", status: "delivered" },
  { item:"Biryani",name: "Sachin", address:"wankhde stadium,door-5454,mumbai", status: "deliverd" },
  

  
  
  
]

const OrdersA = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleViewItemsClick = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className='orderA-main'>
      <div className='orders-ele-1'>
        <h3>Name</h3>
        <h3>Address</h3>
        <h3>Items</h3>
        <h3>Status</h3>
      </div>
      <div className='orders-ele'>
        <p>Sachin</p>
        <p>Wankhede Stadium, 23-3-4, Mumbai</p>
        <p>
          <a href='#' onClick={handleViewItemsClick}>
            <span>View Items</span>
          </a>
        </p>
        <button className='button'>Accept Order</button>
      </div>
      <div className='orders-ele'>
        <p>Sachin</p>
        <p>Wankhede Stadium, 23-3-4, Mumbai</p>
        <p>
          <a href='#' onClick={handleViewItemsClick}>
            <span>View Items</span>
          </a>
        </p>
        <button className='button'>Accept Order</button>
      </div>
      <div className='orders-ele'>
        <p>Sachin</p>
        <p>Wankhede Stadium, 23-3-4, Mumbai</p>
        <p>
          <a href='#' onClick={handleViewItemsClick}>
            <span>View Items</span>
          </a>
        </p>
        <button className='button'>Accept Order</button>
      </div>
      <div className='orders-ele'>
        <p>Sachin</p>
        <p>Wankhede Stadium, 23-3-4, Mumbai</p>
        <p>
          <a href='#' onClick={handleViewItemsClick}>
            <span>View Items</span>
          </a>
        </p>
        <button className='button'>Accept Order</button>
      </div>

      {isPopupOpen && (
        <div className='popup-container'>
          <div className='popup'>
            <div className='popup-content'>
              <h2>Items</h2>
              <table>
                <tr>
                    <th>Items</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Action</th>
                </tr>

                {data.map((val, key) => {
                    return (
                        <tr key={key} style={key % 2 === 0 ? { backgroundColor: '#dddfdd' } : {}}>
                            <td>{val.item}</td>

                            <td>{val.name}</td>
                            <td>{val.address}</td>
                            <td>{val.status}</td>
                        </tr>
                    )
                })}

        </table>
              <button className='button' onClick={handleClosePopup}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrdersA;
