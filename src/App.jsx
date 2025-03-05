import React, { useEffect, createContext, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
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
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import ResetPassword from "./Pages/ResetPassword.jsx";

export const Context = createContext();

export default function App() {
  const [isLogin, setIsLogin] = useState("");
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [products, setProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState("");

  const [cart, setCart] = useState([]);

  const [loading, setLoading] = useState(true); // Loader state
  const location = useLocation(); // Detect route changes

  useEffect(() => {
    const initializeApp = async () => {
      setLoading(true); // Start loading and add no-scroll
       

      try {
        const responses = await Promise.allSettled([
          axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products`),
          axios.get(`${import.meta.env.VITE_BACKEND_URL}/auth/isLogin`, { withCredentials: true }),
          axios.get(`${import.meta.env.VITE_BACKEND_URL}/cart`, { withCredentials: true }),
          axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/liked`, { withCredentials: true }),
        ]);
    
        // Process products regardless of other failures
        if (responses[0].status === "fulfilled") {
          setProducts(responses[0].value.data);
        } else {
          console.error("Error fetching products", responses[0].reason);
        }
    
        if (responses[1].status === "fulfilled") {
          setIsLogin(responses[1].value.data.loggedIn);
          setUser(responses[1].value.data.user);
          setName(responses[1].value.data?.user?.Full_Name || "Guest");
        } else {
          console.error("Error checking login", responses[1].reason);
        }
    
        if (responses[2].status === "fulfilled") {
          setCart(responses[2].value.data);
        } else {
          console.error("Error fetching cart", responses[2].reason);
        }
    
        if (responses[3].status === "fulfilled") {
          setLikedProducts(responses[3].value.data.likedProducts);
        } else {
          console.error("Error fetching liked products", responses[3].reason);
        }
      } catch (error) {
        console.error("Unexpected error:", error);
        setLoading(false)
      } finally {
        setLoading(false); // End loading and remove no-scroll
      }
    }

    initializeApp();
  }, []);

  console.log(isLogin);
  console.log(name);
  console.log(user);

  useEffect(() => {
    // Trigger loader on route changes
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 3000);

    return () => clearTimeout(timeout); // Cleanup
  }, [location]);

  console.log(isLogin);

  return (
    <Context.Provider
      value={{
        isLogin,
        setIsLogin,
        cart,
        setCart,
        user,
        likedProducts,
        setLikedProducts,
        products,
        setProducts,
      }}
    >
      
      <ScroolToTop />
      <div style={{ visibility: loading ? "hidden" : "visible" }}>
        <Routes>
          <Route path="/" element={<Header />}>
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
          </Route>
        </Routes>
      </div>
      {loading && <Loader />}
    </Context.Provider>
  );
}
