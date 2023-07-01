import React from 'react'
import './Items.css'
import { CurrencyRupeeOutlined } from '@mui/icons-material'
import { BiCart, BiCartAlt } from 'react-icons/bi'
import data from '../../utils1/resto.json'

const Items = () => {

 
    
    const itemList = [];

  data.forEach(item => {
    if (item.items && item.items.length > 0) {
      item.items.forEach(subItem => {
        itemList.push(
        //   <div className="main1" key={subItem.id}>
            
            <div className="main2 flexColCenter">
             <img src={subItem.img} alt="food" className="item-img" />
              <p className="item-name">{subItem.name}</p>
              <div className="flexCenter">
                <CurrencyRupeeOutlined />
                <p className="item-price">{subItem.price}</p>
              </div>
              <button className="button item-button">
                <BiCart className="item-cart" style={{fontSize:25}} />
              </button>
            </div>
        //   </div>
        );
      });
    }
  });

  return <div className='items-container innerWidth'>
    <div>
           <h1 className='item-heading'>Welcome to Family Restaurant</h1>
           <p className='item-p'>Menu</p>
    </div>    
            <div className='flexCenter'>{itemList}</div>
    </div>;
};

export default Items;
