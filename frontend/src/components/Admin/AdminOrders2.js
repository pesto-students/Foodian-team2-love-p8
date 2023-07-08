
import './Admin.css'
import React, { useState } from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';


const AdminOrders2 = () => {
  const [activeLink, setActiveLink] = useState('orders');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className='flexCenter'>
      <div className='admin-orders'>
        <div className='admin-orders-h'>
          <Link
            to=""
            className={`admin-orders-h-link ${activeLink === 'orders' ? 'active' : ''}`}
            onClick={() => handleLinkClick('orders')}
          >
            Orders
          </Link>
          <h1>/</h1>
          <Link
            to='accepted'
            className={`admin-orders-h-link ${activeLink === 'accepted' ? 'active' : ''}`}
            onClick={() => handleLinkClick('accepted')}
          >
            Accepted
          </Link>
          <h1>/</h1>
          <Link
            to='delivered'
            className={`admin-orders-h-link ${activeLink === 'delivered' ? 'active' : ''}`}
            onClick={() => handleLinkClick('delivered')}
          >
            Delivered
          </Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminOrders2;
