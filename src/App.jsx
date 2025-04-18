import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

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

export default function App() {
  const location = useLocation(); // Detect route changes
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Trigger loader on route changes
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 3000);

    return () => clearTimeout(timeout); // Cleanup
  }, [location]);

  return (
    <>
      <div style={{ visibility: loading ? "hidden" : "visible" }}>
        <ScroolToTop />
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
            <Route path="/Test" element={<Payment />} />
            <Route path="*" element={<Error4 />} />
            <Route path="/Recipt" element={<Recipt />} />

          </Route>
        </Routes>
      </div>
      {loading && <Loader />}
    </>
  );
}
