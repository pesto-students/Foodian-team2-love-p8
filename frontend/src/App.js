
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
import AdminOrders from './components/Admin/AdminOrders';
import AdminOrders2 from './components/Admin/AdminOrders2';
import OrdersA from './components/Admin/AdminOrders/OrdersA';
import AcceptdA from './components/Admin/AdminOrders/AcceptdA';
import Delivered from './components/Admin/AdminOrders/Delivered';
import Delivery from './components/Delivery/Delivery';
import DeliveryList from './components/Delivery/DeliveryList';
import DeliveryAcc from './components/Delivery/DeliveryAcc';
import PaySuccess from './components/PaymentForm/PaySuccess';

 import { UserProvider } from './Hooks/userContext';
import PayCSuccess from './components/PaymentForm/PayCSuccess';




function App() {
  return (
    <UserProvider>
    <div className="App">
    
    
      <Routes>
        
               {/* user routes */}
                 <Route path="/" element={<Landingpage/>} />
                 <Route path="/login" element={<Loginpage/>}/>
                 <Route path="/signup" element={<Signuppage/>}/>
                 <Route path="/login/user" element={<UserpageLayout/>}>
                       <Route index element={<Customer/>}/>
                       <Route path=':id' element={<Items/>}/>
                       <Route path="cart" element ={<Cart/>}/>
                       <Route path="success/:orderId" element={<PayCSuccess/>}/>
                 </Route>
        


                 {/* Admin Routes */}
                 <Route path="/admin" element={<Admin/>}>
                      <Route index element={<AdminItems/>}/>
                       <Route path="admin-add" element={<AdminAdd/>}/>
                       <Route path="admin-orders" element ={<AdminOrders2/>}>
                            <Route index element={<OrdersA/>}/>
                            <Route path='accepted' element={<AcceptdA/>}/>
                            <Route path="delivered" element ={<Delivered/>}/>


                       </Route>
                       

                 </Route>



                 {/* Delivery Routes */}


                 < Route path='/delivery' element={<Delivery/>}>
                  
                       <Route index element={<DeliveryList/>}/>
                    
                       
                 </Route>
                 <Route path="accept-order/:orderId" element={<DeliveryAcc/>}/>
                 <Route path="/delivered" element={<PaySuccess/>}/>
                

                 

      </Routes> 
      {/* <Userheader/>
      <Items/> */}
    </div>
    </UserProvider>
  );

}

export default App;
