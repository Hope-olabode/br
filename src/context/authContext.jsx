import React, { useEffect, createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext({})


export const AuthProvider = ({children})=> {
  const [isLogin, setIsLogin] = useState("");
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [products, setProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState("");

  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });


  

  useEffect(() => {
    const initializeApp = async () => {
      try {
        const responses = await Promise.allSettled([
          axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products`),
          axios.get(`${import.meta.env.VITE_BACKEND_URL}/auth/isLogin`, { withCredentials: true }),
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
          setLikedProducts(responses[2].value.data.likedProducts);
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

  

  



  return <AuthContext.Provider value={{
    isLogin,
    setIsLogin,
    cart,
    setCart,
    user,
    likedProducts,
    setLikedProducts,
    products,
    setProducts,
  }}>
    {children}
  </AuthContext.Provider>

}