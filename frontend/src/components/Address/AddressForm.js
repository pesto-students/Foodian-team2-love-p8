import React from 'react'
import { useState } from 'react';
import {set, useForm} from 'react-hook-form'
import './AddressForm.css'

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useDispatch } from 'react-redux';
import { setAddress } from '../../Store/UserInfo/addressSlice';
const AddressForm = ({onTabSwitch}) => {
  const [deliveryType, setDeliveryType] = useState('Home Delivery');
  const [addressInputsDisabled, setAddressInputsDisabled] = useState(false);
  const handleDeliveryTypeChange = (event) => {
    const { value } = event.target;
    setDeliveryType(value);
    setAddressInputsDisabled(value === 'Take Away');
  };
    const {register,handleSubmit} = useForm()
    const dispatch = useDispatch()
    const onSubmit =(data)=>{
      const addressData = {
        ...data,
        deliveryType: deliveryType
      };
        dispatch(setAddress(addressData))
        onTabSwitch('Payment')
    }

  return (
    <form className='address' onSubmit={handleSubmit(onSubmit)}>
         <p className='address-p'>Please Select Delivery Type</p>
        <div class="one">
          <input type="radio" id="take" name="address" value="Take Away"
            checked={deliveryType === 'Take Away'}
            onChange={handleDeliveryTypeChange}
             className='radio'/>
          <label for="Take Away" className='address-p1'>Take Away</label>
          </div>
          <div className='two'>
          <input type="radio" id="take1" name="address" value="Home Delivery"
               className='radio'
              checked={deliveryType === 'Home Delivery'}
              onChange={handleDeliveryTypeChange}/>
          <label for="HomeDelivery" className='address-p1'>Home Delivery</label>
          


        </div>
        <h3 className={`h-address  ${addressInputsDisabled ? 'ok':null}`}>Address for Delivery</h3>
        <div className='address-main flexCenter'>
          <div className='add'>
            <label className={`l-address ${addressInputsDisabled?'ok':null}`} for="streetAddress">Street Address</label>
            <input 
                 {...register('street')}
                 className='seclector'
                 id="street address"
                 type="text"
                 disabled={addressInputsDisabled}
                 placeholder='Street Address'/>
          </div>
          <div className='add'>
            <label className={`l-address ${addressInputsDisabled?'ok':null}`} for="DoorNO"> Door No</label>
            <input 
                 {...register('Door')}
                 className='seclector'
                 id="Door address"
                 type="text"
                 disabled={addressInputsDisabled}
                 placeholder='Door Number'/>
          </div>
          <div className='add'>
            <label className={`l-address ${addressInputsDisabled?'ok':null}`} for="city">City</label>
            <input 
                 {...register('City')}
                 className='seclector'
                 id="City"
                 type="text"
                 disabled={addressInputsDisabled}
                 placeholder='City'/>
          </div>
          <div className='add'>
            <label className={`l-address ${addressInputsDisabled?'ok':null}`} for="city">Mobile no</label>
            <input 
                 {...register('Mobile')}
                 className='seclector'
                 id="Mobile"
                 type="phone"
                 disabled={addressInputsDisabled}
                 placeholder='+91 moblie number'/>
          </div>
          <div className='add'>
            <label className={`l-address ${addressInputsDisabled?'ok':null}`} for="pincode">Pin Code</label>
            <input 
                 {...register('Pin')}
                 className='seclector'
                 id="Pincode"
                 type="number"
                 disabled={addressInputsDisabled}
                 placeholder='Pin Code'/>
          </div>
         
        </div>

            <div className='b-address'>
               
                <button className='button' type='submit'>
              <div className='flexCenter'>
                  <p style={{fontSize:"17px"}}>Next</p>
                  <ArrowRightAltIcon style={{fontSize:"30px",marginLeft:"6px"}}/>
              </div>
        </button>
            </div>
      

    </form>
  )
}

export default AddressForm



