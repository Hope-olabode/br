import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/authContext.jsx";

import axios from "axios";

import HomePage from "./Pages/Home page.jsx";
import About from "./Pages/About us.jsx";
import Apparel from "./Pages/Apparel.jsx";
import Header from "./Components/Header.jsx";
import BranditHub from "./Pages/Brandit Hub.jsx";
import AssistCentre from "./Pages/Assist Centre.jsx";
import Reseller from "./Pages/Reseller.jsx";
import Login from "./Pages/Log in.jsx";
import Signup from "./Pages/Sign up.jsx";
import Cart from "./Pages/Cart.jsx";
import Launchpad from "./Pages/Launchpad.jsx";
import Privacypolicy from "./Pages/Privacy Policy.jsx";
import Terms from "./Pages/Terms and Conditions.jsx";
import ScroolToTop from "./Components/ScrollToTop.jsx";
import Education from "./Pages/Education.jsx";
import ProductDetail from "./Pages/products.jsx";
import Next from "./Pages/Next.jsx";
import Loader from "./Components/Loader.jsx";
import Profile from "./Pages/Profile.jsx";
import ProfilePage from "./Pages/Edit Profile.jsx";
import OrderHistory from "./Pages/Oder History.jsx";
import LikedProducts from "./Pages/Liked product.jsx";
import CustomQuote from "./Pages/Custom quote.jsx";
import Error4 from "./Pages/404.jsx";
import ResetPassword from "./Pages/ResetPassword.jsx";
import Payment from "./Pages/Testpage.jsx";
import Recipt from "./Pages/Recipt.jsx";

import CreateProduct from "./Pages/Admin/Create Product.jsx";
import Admin from "./Pages/Admin/Admin.jsx";
import All from "./Pages/Admin/All Products.jsx";
import Dashboard from "./Pages/Admin/Dashboard.jsx";
import Posts from "./Pages/Admin/Posts.jsx";
import Customer from "./Pages/Admin/Customers.jsx";

import CardStack from "./Components/CardStack.jsx";

export default function App() {
  const location = useLocation(); // Detect route changes
  const [routeLoading, setRouteLoading] = useState(false);
  const { loading: contextLoading } = useContext(AuthContext);

  const isAdminRoute = location.pathname.startsWith("/admin");

  useEffect(() => {
    // Route transition loader only for non-admin pages
    if (!isAdminRoute) {
      setRouteLoading(true);
      const timeout = setTimeout(() => setRouteLoading(false), 2000); // 1s delay
      return () => clearTimeout(timeout);
    }
  }, [location, isAdminRoute]);

  /* useEffect(() => {
    console.log("Ping effect mounted");
    const interval = setInterval(async () => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/user/ping`,
          {},
          { withCredentials: true }
        );
        console.log("Ping response:", response.data);
      } catch (error) {
        console.error("Ping error:", error.response?.data || error.message);
      }
    }, 30000); // Every 30 seconds

    return () => clearInterval(interval);
  }, []); */

  // useEffect(() => {
  //   // Trigger loader on route changes
  //   setLoading(true);
  //   const timeout = setTimeout(() => setLoading(false), 3000);

  //   return () => clearTimeout(timeout); // Cleanup
  // }, [location]);
  const showLoader = !isAdminRoute && (contextLoading || routeLoading);
  return (
    <>
      {/* {showLoader && <Loader />} */}
      <ScroolToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {showLoader && <Loader />}
              <Header />
            </>
          }
        >
          <Route exact path="/" element={<HomePage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Store" element={<Apparel />} />
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
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Edit" element={<ProfilePage />} />
          <Route path="/Order" element={<OrderHistory />} />
          <Route path="/Liked" element={<LikedProducts />} />
          <Route path="/Custom" element={<CustomQuote />} />
          <Route path="/l" element={<Loader />} />
          <Route path="/Reset" element={<ResetPassword />} />
          <Route path="/Test" element={<Payment />} />
          
        
          

          <Route path="/Recipt" element={<Recipt />} />
          {/* <Route path="/Create" element={<CreateProduct />} /> */}
        </Route>
        <Route path="*" element={<Error4 />} />
        <Route path="/card" element={<CardStack />}></Route>
        {/* Admin Routes */}
        <Route path="/Admin" element={<Admin />}>
          <Route path="Create products" element={<CreateProduct />} />
          <Route path="Products" element={<All />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Customer" element={<Customer />} />
          <Route path="Posts" element={<Posts />} />
          <Route path="Events" element={<div>All Events</div>} />
        </Route>
      </Routes>
    </>
  );
}
