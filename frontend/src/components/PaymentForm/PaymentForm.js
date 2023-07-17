import React from 'react';
import './Payment.css'
import { CardElement, Elements,useStripe,useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {clearCart,cartProducts} from "../../Store/cart/cartSlice"
import {getAddress,clearAddress} from "../../Store/UserInfo/addressSlice"
import {useNavigate} from 'react-router-dom'
import { useState,useEffect,useContext } from 'react';
import { UserContext } from '../../Hooks/userContext';
import { Oval } from 'react-loader-spinner';
import { backendUrl } from '../../utils1/Url';

const stripePromise = loadStripe(`process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY`);

const PaymentForm = (props) => {
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [date,setDate] = useState(null)
    const dispatch = useDispatch();
    const cart = useSelector(cartProducts);
    const address = useSelector(getAddress);
    const navigate = useNavigate();
    const elements = useElements();
    const stripe = useStripe();
    const totalAmount = cart.reduce((total, product) => total + (product.amount*product.price), 0);
    useEffect(() => {
      const currentDate = new Date();
      setDate(currentDate);
    }, []);
  

    

 
    const newOrder = {
      user:user,
      orderItems:cart,
      shippingAddress:address.deliveryType === 'Take Away' ? { deliveryType: 'Take Away' } : address,
      status:"ordered",
      totalAmount:totalAmount,
      payment:"card",
      orderDateTime:date
     
    };
    
    const handleFinal = (e) => {
      e.preventDefault();
       setLoading(true)
      // Call the backend or perform authentication logic here
      
  
      // Example API call using fetch
      fetch(`${backendUrl}/api/v1/item/order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newOrder),
      })
        .then((response) => response.json())
        .then((data) => {
        
          setLoading(false)
          const orderId = data.data.Order._id;
          navigate(`/login/user/success/${orderId}`)
           dispatch(clearAddress())
           dispatch(clearCart())
          // Handle the response from the backend
          // Example: display success or error message based on the response
         
        })
        .catch((error) => {
          // Handle any errors that occur during the API call
          console.error('Error:', error);
        });
    };

  return (
    <form id="payment-form" className='payment-form' onSubmit={handleFinal} >
      <label htmlFor="card-element" className='payment-h'>Please enter your card details</label>
      <div id="card-element" className='payment-c'>
        <CardElement options={{ style: { base: { fontSize: '20px' } } }} />
      </div>
      <div style={{textAlign:"center"}}>
   <button type='submit' className='button pay-button'  >
        

        <div className='flexColCenter'>
          
        <h3>Pay Now</h3>

               {loading ?<Oval height={40} width={40} color="white" />:""}
 
          
          </div> 

      </button>
 
      </div>
    </form>
  );
};

const StripeWrapper = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};

export default StripeWrapper;
