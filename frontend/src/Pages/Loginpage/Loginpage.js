import React from 'react'
import Header from '../../components/Header.js/Header'
import Login from '../Login/Login'
import { Outlet } from 'react-router'

const Loginpage = () => {
  return (
    <div>

       <Header/>
       <Login/>



    </div>
  )
}

export default Loginpage