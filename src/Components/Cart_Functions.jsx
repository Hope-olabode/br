import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Toast from "../Pages/Toast";
import { toast as sonnerToast, Toaster } from 'sonner';
import { Context } from "../App";



export  function CartFunctions() {
  const { cart, setCart, likedProducts, setLikedProducts, products } = useContext(Context);


  function customToast(toastProps) {
    return sonnerToast.custom(() => (
      <Toast
        color={toastProps.color}
        message={toastProps.message}
      />
    ));
  }

  const handleAddToCart = async (productId) => {
    try {
      console.log(cart);
      const existingProduct =
        cart.length > 0 && cart.some((item) => item._id === productId);
      console.log(existingProduct);
      if (existingProduct) {
        const product = products.find((p) => p._id === productId);
        const newCart = { ...product, quantity: 1 };
        const updatedCart = cart.map((item) =>
          item._id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        /* console.log(updatedCart) */
        await axios.post(`   https://bserver-b2ue.onrender.com/cart/`, newCart, {
          withCredentials: true,
        }); // Added credentials
        setCart(updatedCart);
       
        
      
        
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        } else {
          const product = products.find((p) => p._id === productId);
          const newCart1 = { ...product, quantity: 20 };
          const newCart = [...cart, { ...product, quantity: 20 }];
          console.log(newCart)
          await axios.post("   https://bserver-b2ue.onrender.com/cart", newCart1, { withCredentials: true }); // Added credentials
          setCart(newCart);
          
          localStorage.setItem("cart", JSON.stringify(newCart));
          customToast({
            color: "#000000",
            message: "Product added to cart",
          });
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      const message = error.response?.data?.message || "An error occurred";
      // displayMsg(message);
      customToast({
        color: "#E2063A",
        message: message,
      });
    }
  };

  const handleQuantityChange = async (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
    
    if (newQuantity < 20) return; 
    try {
      const updatedCart = cart.map((item) =>
        item._id === productId ? { ...item, quantity: newQuantity } : item
      );
      console.log(updatedCart)
      await axios.put(`   https://bserver-b2ue.onrender.com/cart/${productId}`, { quantity: newQuantity }, {
        withCredentials: true,
      }); // Added credentials
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } catch (error) {
      console.error("Error updating quantity:", error);
      const message = error.response?.data?.message || "An error occurred";
      // displayMsg(message);
      customToast({
        color: "#E2063A",
        message: message,
      });
    } 
  };

  const handleRemoveFromCart = async (productId) => {
    try {
      const updatedCart = cart.filter((item) => item._id !== productId);
      await axios.delete(`   https://bserver-b2ue.onrender.com/cart/${productId}`, {
        withCredentials: true,
      }); // Added credentials
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      customToast({
        color: "#E2063A",
        message: "Product removed from cart",
      });
    } catch (error) {
      console.error("Error removing from cart:", error);
      const message = error.response?.data?.message || "An error occurred";
      customToast({
        color: "#E2063A",
        message: message,
      });
    }
  };

  const handleDecreaseQuantity = async (productId) => {
    try {
      const product = products.find((p) => p._id === productId);
      const newCart = { ...product, quantity: -1 };
      const updatedCart = cart.map((item) =>
        item._id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
      /* console.log(updatedCart) */
      await axios.post(`   https://bserver-b2ue.onrender.com/cart/`, newCart, {
        withCredentials: true,
      }); // Added credentials
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } catch (error) {
      console.error("Error decreasing quantity:", error);
      const message = error.response?.data?.message || "An error occurred";
      // displayMsg(message);
      customToast({
        color: "#E2063A",
        message: message,
      });
    }
  };

  const likeProduct = async (productId) => {
    try {
      const response = await axios.post(
        "   https://bserver-b2ue.onrender.com/api/products/like",
        { productId },
        { withCredentials: true }
      );

      // Update the liked products state if the request is successful
      setLikedProducts((prev) => [...prev, productId]);
    } catch (error) {
      console.error("Error liking product:", error);
      const message = error.response?.data?.message || "An error occurred";
      customToast({
        color: "#E2063A",
        message: message,
      });
    }
  };

  const unlikeProduct = (productId) => {
    axios
      .post(
        "   https://bserver-b2ue.onrender.com/api/products/unlike",
        { productId },
        { withCredentials: true }
      )
      .then(() => {
        setLikedProducts((prev) => prev.filter((id) => id !== productId));
      })
      .catch((error) => console.error(error));
      const message = error.response?.data?.message || "An error occurred";
      // displayMsg(message);
      customToast({
        color: "#E2063A",
        message: message,
      });
  };

  


  return {
    cart,
    setCart,
    handleAddToCart,
    handleQuantityChange,
    handleRemoveFromCart,
    handleDecreaseQuantity,
    likeProduct,
    unlikeProduct
  }
}