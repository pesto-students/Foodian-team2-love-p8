import React from 'react'
import './Items.css'
import { CurrencyRupeeOutlined } from '@mui/icons-material'
import { BiCart, BiCartAlt } from 'react-icons/bi'

const ProductCard = ({product,onAddProduct}) => {
    const addProduct=()=>{
        onAddProduct(product)
    }
  return (
    <div className="main2 flexColCenter">
    <img src={product.img} alt="food" className="item-img" />
     <p className="item-name">{product.name}</p>
     <div className="flexCenter">
       <CurrencyRupeeOutlined />
       <p className="item-price">{product.price}</p>
     </div>
     <button className="button item-button" onClick={addProduct}>
       <BiCart className="item-cart" style={{fontSize:25}} />
     </button>
   </div>
  )
}

export default ProductCard