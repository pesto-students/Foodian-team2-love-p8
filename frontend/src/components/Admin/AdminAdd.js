import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const AdminAdd = () => {
  const options = ['Meals', 'Starters', 'Fired Rice','Desserts'];
  const defaultOption = options[0];
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleDropdownChange = (selected) => {
    setSelectedOption(selected);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Access the selected option using 'selectedOption' state value
    console.log('Selected Option:', selectedOption);
    // Additional logic to handle form submission
  };

  return (
    <div className='flexColCenter innerWidth'>
      <h2>Add Item</h2>
      <form className='Form' onSubmit={handleSubmit}>
        <label>Enter Item</label>
        <input className='add-ip' type="Name" placeholder=" Enter Name" />

        <label>Price</label>
        <input className='add-ip' type="mobile" placeholder=" Enter Price" />

        <label>Image Url</label>
        <input className='add-ip' type="email" placeholder=" Enter Image Url" />
 
        <label>Category</label>
      

        <div className='dropdown-container'>
          <Dropdown
            options={options}
            onChange={handleDropdownChange}
            value={selectedOption}
            placeholder='Select an option'
          />
        </div>

        <button className='button1'>Add Item</button>
      </form>
    </div>
  );
};

export default AdminAdd;
