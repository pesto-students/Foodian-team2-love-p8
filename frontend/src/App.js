
import './App.css';
import Login from './Pages/Login/Login';

import Signup from './Pages/Signup/Signup';
import Footer from './components/Footer/Footer';
import Header from './components/Header.js/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services.js/Services';
import {Router,Route} from "react-router-dom"
import Userheader from './components/User header/Userheader';
import { Banner } from './components/Banner/Banner';
import Offers from './components/Offers/Offers';



function App() {
  return (
    <div className="App">
    
    <Userheader/>
    <Banner/>
    <Offers/>
      {/* <Header/>
     
      <Hero/>
      
      <Services/>
      <Footer/> */}


      {/* <Signup/>
      <Login/> */}
    </div>
  );
}

export default App;
