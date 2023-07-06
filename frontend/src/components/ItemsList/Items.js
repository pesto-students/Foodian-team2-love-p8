import React, { useState } from 'react'
import './Items.css'
import { CurrencyRupeeOutlined } from '@mui/icons-material'
import { BiCart, BiCartAlt } from 'react-icons/bi'
import data from '../../utils1/Products.json'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Store/cart/cartSlice'
import ProductCard from './ProductCard'





const Items = () => {
   const [products,setProducts] = useState([...data])
    const dispatch  = useDispatch()
    const onAddProduct =(product)=>{
           dispatch(addToCart(product))
    }
 
    
    const itemList = [];


  return <div className='items-container innerWidth'>
    <div>
           <h1 className='item-heading'>Welcome to Family Restaurant</h1>
           <p className='item-p'>Menu</p>
    </div>  

    <div className='flexCenter'>  
            {/* <div className='flexCenter'>{itemList}</div> */}
            {
              products.length > 0 && products.map((product,index)=>{
                        return (
                                   
                                        <ProductCard key={index} product={product} onAddProduct={onAddProduct}/>

                                 
                        )
              })
            }
             </div>
    </div>;
};

export default Items;


                              

