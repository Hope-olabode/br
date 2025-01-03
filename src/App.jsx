import { useEffect, createContext } from "react";
import { Route, Router, Routes } from "react-router-dom";
import HomePage from './Pages/Home page.jsx'
import About from './Pages/About us.jsx'
import Apparel from './Pages/Apparel.jsx'
import Header from "./Components/Header.jsx";
import BranditHub from "./Pages/Brandit Hub.jsx";
import AssistCentre from "./Pages/Assist Centre.jsx";
import Reseller from "./Pages/Reseller.jsx";
import Login from "./Pages/Log in.jsx";
import Signup from "./Pages/Sign up.jsx";
import Cart from "./Pages/Cart.jsx";

import Launchpad from "./Pages/Launchpad.jsx"

import React, { useState } from 'react';
import Privacypolicy from "./Pages/Privacy Policy.jsx";
import Terms from "./Pages/Terms and Conditions.jsx";
import ScroolToTop from "./Components/ScrollToTop.jsx";
import Education from "./Pages/Education.jsx";
import ProductDetail from "./Pages/products.jsx";
import Next from "./Pages/Next.jsx";

export const Context = createContext();


export default function App() {

const [isLogin, setIsLogin] = useState(() => {
  // Retrieve the initial value from localStorage or default to false
  return JSON.parse(localStorage.getItem("isLogin")) || false}) 

const [cart, setCart] = useState(() => {
    // Retrieve the initial value from localStorage or default to false
    return JSON.parse(localStorage.getItem("cart")) || [];
  })

 


useEffect(() => {
  // Check if the value is already true in localStorage
  const storedValue = localStorage.getItem('isLogin') === 'true';
  if (storedValue) {
    setIsLogin(true); // Set state to true if stored value is true
  }
}, []);

  return(
    
      <Context.Provider value={{isLogin, setIsLogin, cart ,setCart}}>
      <ScroolToTop />
        <Routes>
          <Route path="/" element={<Header />} >
            <Route exact path="/" element={<HomePage />} />
            <Route path="/About" element={<About />} />
            <Route 
              path="/Apparel" 
              element={<Apparel 
            
              />} 
            />
            <Route path="/Brandit Hub" element={<BranditHub />} />
            <Route path="/Assist Centre" element={<AssistCentre />} />
            <Route path="/Launchpad" element={<Launchpad />} />
            <Route path="/Become a reseller" element={<Reseller />} />
            <Route path="/Privacy Policy" element={<Privacypolicy />} />
            <Route path="/Terms and Conditions" element={<Terms />} />
            <Route path="/Education" element={<Education />} />
            <Route path="/Sign up" element={<Signup />} />
            <Route path="/Log in" element={<Login />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Product/:id" element={<ProductDetail />} />
            <Route path="/Next" element={<Next />} />
          </Route>
          
        </Routes>
      </Context.Provider>

  )
}