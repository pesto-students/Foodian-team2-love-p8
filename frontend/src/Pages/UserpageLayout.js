import React from 'react'
import Userheader from '../components/User header/Userheader'


import { Outlet } from 'react-router'

const UserpageLayout = () => {
  return (
    <div>

        <Userheader/>
        <Outlet/>
       
    </div>
  )
}

export default UserpageLayout