import React from 'react'
import "./Summary.css"
import { useDispatch } from "react-redux";
import { incrementProductsAmount,decrementProductsAmount,removeFromCart } from '../../Store/cart/cartSlice'
import DeleteIcon from '@mui/icons-material/Delete';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
const SummaryCard = ({product}) => {
    const dispatch = useDispatch()
  return (
    
    <div className='product-card'>
            <div className='product-img-cont'>
              <img src={product.img} alt={product.name} className='product-img'/>
              <div>
              <h3 className='product-h3'>{product.name}</h3>
              <div className="product-price"><CurrencyRupeeIcon className='product-icon' /><p>{product.price}</p></div>
              </div>
            </div>
             <div className='product-button'>

                 <button className='button button-card' disabled={product.amount <= 0} onClick={() => dispatch(decrementProductsAmount(product))}>-</button>
                     <span  className='quantity'>{product.amount}</span>
                 <button className='button button-card' onClick={() => dispatch(incrementProductsAmount(product))}>+</button>
                </div>

                <div className="last-icon">
                   <DeleteIcon onClick={() => dispatch(removeFromCart(product))} className='delete-icon'/>


                 </div>

    </div>
  )
}

export default SummaryCard




{/* <div className='card-inside'>
<img src={product.img} alt={product.name} className='product-img'/>

</div>


<div className='quantity1'>

<div >

<button className='button' disabled={product.amount <= 0} onClick={() => dispatch(decrementProductsAmount(product))}>-</button>
<span  className='quantity2'>{product.amount}</span>
<button className='button' onClick={() => dispatch(incrementProductsAmount(product))}>+</button>
</div>
</div>
<div className="product-price"><CurrencyRupeeIcon /><p>{product.price}</p></div>


<div className="last-icon">
<DeleteIcon onClick={() => dispatch(removeFromCart(product))} className='delete-icon'/>


</div> */}