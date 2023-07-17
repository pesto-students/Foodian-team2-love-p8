import React, { useState ,useContext} from 'react';
import './Banner.css';
import { SearchRounded } from '@mui/icons-material';
import data from '../../utils1/resto.json';
import { UserContext } from '../../Hooks/userContext';




export const Banner = () => {
  const { user } = useContext(UserContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState(data);

  
  function extractNameFromEmail(email) {
    if (!user){
     const x = 'guest@gmail.com'
     const atIndex = x.indexOf('@');
     if (atIndex !== -1) {
       const name = x.slice(0, atIndex);
       return name.charAt(0).toUpperCase() + name.slice(1);
     }
     return null; // Return null if the email is invalid or doesn't contain an "@" symbol
   }
    else{
      const atIndex = email.indexOf('@')
     if (atIndex !== -1) {
       const name = email.slice(0, atIndex);
       return name.charAt(0).toUpperCase() + name.slice(1);
     }
     return null; // Return null if the email is invalid or doesn't contain an "@" symbol
   }}
   
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    // Filter the restaurants based on the search query
    const filtered = data.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };
  const name1 = extractNameFromEmail(user);
  

  return (
    <div className='bg'>
      <div className='innerWidth'>
        <h3 className='main'>Hello {name1},</h3>

        <div className='flexCenter banner'>
          <p className='h-banner'>
            Choose your favorite dishes from a wide selection of top-rated restaurants
          </p>
        </div>

        <div className='flexCenter search'>
          <div className='inputBox'>
            <SearchRounded className='searchIcon' />
            <input
              type='text'
              placeholder='Search Restaurants'
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
