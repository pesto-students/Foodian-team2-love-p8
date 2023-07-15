import React, { useState,useEffect } from 'react'
import './Items.css'
import { CurrencyRupeeOutlined } from '@mui/icons-material'
import { BiCart, BiCartAlt } from 'react-icons/bi'
import data from '../../utils1/Products.json'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Store/cart/cartSlice'
import ProductCard from './ProductCard'
import { BallTriangle } from 'react-loader-spinner'





const Items = () => {
const [products,setProducts] = useState([])
const [isLoading, setLoading] = useState(true);
const [show,setShow] = useState(false)
const [add,setAdd] = useState(false)
const [availabilityFilter, setAvailabilityFilter] = useState('all'); // Filter state for availability
const [categoryFilter, setCategoryFilter] = useState('all'); // Filter state for category
  useEffect(() => {
    fetch('http://localhost:5000/api/v1/admin/items', {
      method: 'GET',
      // Add any necessary parameters or query strings
    })
      .then((response) => response.json())
      .then((responseData) => {
        
        const receivedProducts = responseData.data.Users;
        
          setProducts(receivedProducts);
          setLoading(false);
        
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);
  
    const dispatch  = useDispatch()
    const onAddProduct =(product)=>{
           if(product.availability!=="true"){
                setShow(true)
                setTimeout(() => {
                  setShow(false);
                }, 2000);
           }else{
            setAdd(true)
          
            setTimeout(() => {
              setAdd(false);
            }, 900);
           dispatch(addToCart(product))
           }
    }
 

    // const filteredProducts = products.filter((product) => product.availability==="true");
    
    const filteredProducts = products.filter((product) => {
      if (availabilityFilter === 'all' && categoryFilter === 'all') {
        return true; // Show all products when no filters selected
      }
      if (availabilityFilter !== 'all' && categoryFilter === 'all') {
        return product.availability === availabilityFilter; // Filter by availability only
      }
      if (availabilityFilter === 'all' && categoryFilter !== 'all') {
        return product.type === categoryFilter; // Filter by category only
      }
      return product.availability === availabilityFilter && product.type === categoryFilter; // Filter by both availability and category
    });
   

  return <div className='items-container innerWidth'>
    <div>
           <h1 className='item-heading'>Welcome to Family Restaurant</h1>
           <p className='item-p'>Menu</p>
    </div>  
    <div className='filters'>
        <label className='filters1'>
          Availability:
          <select value={availabilityFilter} onChange={(e) => setAvailabilityFilter(e.target.value)} className='filter-s'>
            <option value='all' >All</option>
            <option value='true'>Available</option>
            <option value='false'>Not Available</option>
          </select>
        </label>

        <label>
          Category:
          <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className='filter-s'>
            <option value='all'>All</option>
            <option value='starters'>Starter</option>
            <option value='biryani'>Biryani</option>
            <option value='fried rice'>Fried Rice</option>
            <option value='thali'>Thali</option>
           
            <option value='dessert'>Dessert</option>
          </select>
        </label>
      </div>
       {show  ? <div className='flexCenter'> <p className='error-message1' >add items which are available</p></div>:""}
       {add  ? <div className='flexCenter'><p className='success-message1'>Item added cart</p></div>:""}
    <div className='flexCenter'>  
    {isLoading ? (
        <div className='loader-container'>
         
           <BallTriangle height={80} width={80} color="blue" />
           </div>
      ) : filteredProducts.length === 0 ? (
            <div className='flexColCenter'>
                  
                  <img src="https://img.freepik.com/free-vector/choosing-healthy-unhealthy-food_23-2148552452.jpg?w=1380&t=st=1689395384~exp=1689395984~hmac=317cf5ebcfd0c8722362e6ba01a575ce9e3f50494e21e721e50038f40b6a68e6" alt="no-ordr-image" style={{width:"400px"}}/>
                  <p style={{fontSize:"2rem"}}>No Items available.</p>
            </div>
      ) : (
            filteredProducts.map((product, index) => (
              
          <ProductCard key={index} product={product} onAddProduct={onAddProduct} />
           ) ))}
             </div>
    </div>;
};

export default Items;


                              

