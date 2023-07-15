import React, { useState ,useEffect} from 'react';
import data from '../../utils1/Products.json';
import { Delete, Star } from '@mui/icons-material';
import { BallTriangle} from 'react-loader-spinner'






const AdminItems = () => {

  const [items,setItems] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/v1/admin/items', {
      method: 'GET',
      // Add any necessary parameters or query strings
    })
      .then((response) => response.json())
      .then((responseData) => {
     
      
        if (responseData.status === 'Success') {
          setItems(responseData.data.Users);
         
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);
   console.log(items)
  const [onStates, setOnStates] = useState(items.map(item => item.availability));

  const toggle = (index) => {
    setOnStates((prevState) => {
      const updatedStates = [...prevState];
      updatedStates[index] = !updatedStates[index];
  
      const updatedItems = [...items]; // Create a copy of the items array
      updatedItems[index].availability = updatedStates[index]; // Update the copy
      setItems(updatedItems); // Update the state with the modified copy
  
      // Make API request to update availability in the database
      if (updatedStates[index]) {
        fetch(`http://localhost:5000/api/v1/admin/items/${updatedItems[index]._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ availability: true }),
        })
          .then((response) => response.json())
          .then((responseData) => {
            // Handle response if needed
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      } else {
        // Availability is turned off, update the backend with availability: false
        fetch(`http://localhost:5000/api/v1/admin/items/off/${updatedItems[index]._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ availability: false }),
        })
          .then((response) => response.json())
          .then((responseData) => {
            // Handle response if needed
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }
  
      return updatedStates;
    });
  };
  const handleDelete = (index) => {
    
    const itemId = items[index]._id;
  
    fetch(`http://localhost:5000/api/v1/admin/items/remove/${itemId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        // Handle response if needed
        if (responseData.status === 'Success') {
          // Delete the item from the local state
          const updatedItems = [...items];
          updatedItems.splice(index, 1);
          setItems(updatedItems);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  
  

  const restoEle = items.map((resto, index) => (
    <div className='admin-card' key={index}>
      <img src={resto.image_url} alt="restaurant" className='adminImg' />
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
      <Delete style={{marginTop:20}}
        onClick={() => handleDelete(index)}
        />
      </div>
    </div>
  ));

  return (
    <section className='section-admin-item'>
      <div className='innerWidth'>
        <p className='admin-main'>Food Items</p>
        <div className="flexCenter make">{restoEle.length>0 ? restoEle :  <BallTriangle height={80} width={80} color="blue" />}</div>
      </div>
    </section>
  );
};

export default AdminItems;
