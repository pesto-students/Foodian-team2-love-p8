
import './App.css';
import Login from './Pages/Login/Login';

import Signup from './Pages/Signup/Signup';
import Footer from './components/Footer/Footer';
import Header from './components/Header.js/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services.js/Services';
import {Router,Route, Routes, Form} from "react-router-dom"
import Userheader from './components/User header/Userheader';
import { Banner } from './components/Banner/Banner';
import Offers from './components/Offers/Offers';
import Restaurants from './components/Restaurants/Restaurants';

import Landingpage from './Pages/Landingpage/Landingpage';
import Loginpage from './Pages/Loginpage/Loginpage';
import Signuppage from './Pages/Signuppage';
import UserpageLayout from './Pages/UserpageLayout';
import Items from './components/ItemsList/Items';

import Customer from './Pages/Customer';
import Cart from './Pages/Cart/Cart';
import Admin from './components/Admin/Admin';
import AdminItems from './components/Admin/AdminItems';
import AdminAdd from './components/Admin/AdminAdd';

 




function App() {
  return (
    <div className="App">
    
    
      <Routes>
               
                 <Route path="/login" element={<Loginpage/>}/>
                 <Route path="/login/user" element={<UserpageLayout/>}>
                       <Route index element={<Customer/>}/>
                       <Route path=':id' element={<Items/>}/>
                       <Route path="cart" element ={<Cart/>}/>
                 </Route>
                 
                 <Route path="/admin" element={<Admin/>}>
                      <Route index element={<AdminItems/>}/>
                       <Route path="admin-add" element={<AdminAdd/>}/>
                       <Route path="admin-orders" element ={<Cart/>}/>

                 </Route>
                  <Route path="/signup" element={<Signuppage/>}/>
                  <Route path="/" element={<Landingpage/>} />
                  <Route path="/login" element={<Loginpage/>} />

      </Routes> 
      {/* <Userheader/>
      <Items/> */}
    </div>
  );
}

export default App;
