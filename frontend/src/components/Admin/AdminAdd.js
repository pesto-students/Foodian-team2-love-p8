import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const AdminAdd = () => {
  const options = ['meals', 'starters', 'fired rice', 'biryani','desserts'];
  const defaultOption = options[0];
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleDropdownChange = (selected) => {
    setSelectedOption(selected.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.elements.itemName.value;
    const price = e.target.elements.price.value;
    const image_url = e.target.elements.imageUrl.value;
    const availability = true;
    const category = selectedOption;

    const newItem = {
      name,
      price,
      image_url,
      availability,
      type:category,
    };

    fetch('http://localhost:5000/api/v1/admin/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.status === 'success') {
          setMessage('Item added successfully');
          setMessageType('success');
          e.target.reset();
          setSelectedOption(defaultOption);
        } else {
          setMessage('Error adding item. Please try again.');
          setMessageType('error');
        }
        setTimeout(() => {
          setMessage('');
          setMessageType('');
        }, 3000);
      })
      .catch((error) => {
        console.error('Error:', error);
        setMessage('Error adding item. Please try again.');
        setMessageType('error');
        setTimeout(() => {
          setMessage('');
          setMessageType('');
        }, 3000);
      });
  };

  return (
    <div className="flexColCenter innerWidth">
      <h2>Add Item</h2>
      <form className="Form" onSubmit={handleSubmit}>
        <label>Enter Item</label>
        <input className="add-ip" type="text" name="itemName" placeholder="Enter Name" required />

        <label>Price</label>
        <input className="add-ip" type="text" name="price" placeholder="Enter Price" required />

        <label>Image URL</label>
        <input className="add-ip" type="url" name="imageUrl" placeholder="Enter Image URL" required />

        <label>Category</label>

        <div className="dropdown-container">
          <Dropdown
            options={options}
            onChange={handleDropdownChange}
            value={selectedOption}
            placeholder="Select an option"
          />
        </div>

        <button className="button1" type="submit">
          Add Item
        </button>

        {message && <p className={`message ${messageType}`}>{message}</p>}
      </form>
    </div>
  );
};

export default AdminAdd;
