import React, { useState } from 'react';
import data from '../../utils1/Products.json';
import { Delete, Star } from '@mui/icons-material';

const AdminItems = () => {
  const [onStates, setOnStates] = useState(data.map(item => item.avail));

  const toggle = (index) => {
    setOnStates((prevState) => {
      const updatedStates = [...prevState];
      updatedStates[index] = !updatedStates[index];

      // Update the 'avail' property in the data array
      data[index].avail = updatedStates[index];

      return updatedStates;
    });
  };

  const restoEle = data.map((resto, index) => (
    <div className='admin-card' key={index}>
      <img src={resto.img} alt="restaurant" className='adminImg' />
      <p className='h-admin-item'>{resto.name}</p>
      <p>{resto.price}</p>
      <div>
      <button  id="myButton"
        className={onStates[index] ? 'on' : 'off'}
        onClick={() => toggle(index)}
      >
        <span className="pin" />
      </button>
     
      </div>
      <div>
      <Delete style={{marginTop:20}}/>
      </div>
    </div>
  ));

  return (
    <section className='section-admin-item'>
      <div className='innerWidth'>
        <p className='admin-main'>Food Items</p>
        <div className="flexCenter make">{restoEle}</div>
      </div>
    </section>
  );
};

export default AdminItems;
