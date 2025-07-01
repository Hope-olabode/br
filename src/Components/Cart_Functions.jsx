import { useContext } from "react";
import axios from "axios";
import Toast from "./Toast";
import { toast as sonnerToast } from "sonner";
import { AuthContext } from "../context/authContext";

export function CartFunctions(size) {
  console.log(size)
  const { cart, setCart, setLikedProducts, products } =
    useContext(AuthContext);

  function customToast(toastProps) {
    return sonnerToast.custom(() => (
      <Toast color={toastProps.color} message={toastProps.message} />
    ));
  }

  const handleAddToCart =  (productId, size) => {
    // Save previous state so we can revert if needed
    const previousCart = [...cart];
  
    
      const existingProduct = cart.length > 0 && cart.some((item) => item._id === productId);
      
      let updatedCart;
      let newCartItem;
      
      if (existingProduct) {
        // If product exists, update its quantity
        updatedCart = cart.map((item) =>
          item._id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
        newCartItem = products.find((p) => p._id === productId);
        newCartItem = { ...newCartItem, quantity: 1 };
      } else {
        // If product does not exist, add it to cart with an initial quantity
        const product = cart.find((p) => p._id === productId);
        newCartItem = { _id:productId, quantity: 20, size: size  };
        updatedCart = [...cart, newCartItem];
        console.log(updatedCart)
      }
      
  
      // Optimistically update the UI
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      
      // Send the update to the backend
      // await axios.post(
      //   `${import.meta.env.VITE_BACKEND_URL}/cart`,
      //   newCartItem,
      //   { withCredentials: true }
      // );
      
      // Optionally, you can display a success toast
      if (!existingProduct) {
        customToast({
          color: "#000000",
          message: "Product added to cart",
        });
      }
    
  };

  
  

  const handleQuantityChange = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === productId ? { ...item, quantity: newQuantity } : item
      )
    );

    
      const updatedCart = cart.map((item) =>
        item._id === productId ? { ...item, quantity: newQuantity } : item
      );
      console.log(updatedCart);
     /*  await axios.put(
        `    ${import.meta.env.VITE_BACKEND_URL}/cart/${productId}`,
        { quantity: newQuantity },
        {
          withCredentials: true,
        }
      ); // Added credentials */
      localStorage.setItem("cart", JSON.stringify(updatedCart));
   
  };

  const handleRemoveFromCart = async (productId) => {
    
      const updatedCart = cart.filter((item) => item._id !== productId);
      /* await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/cart/${productId}`, {
        withCredentials: true,
      }); // Added credentials */
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      customToast({
        color: "#E2063A",
        message: "Product removed from cart",
      });
   
  };

  const handleDecreaseQuantity = async (productId) => {
    try {
      const product = products.find((p) => p._id === productId);
      const newCart = { ...product, quantity: -1 };
      const updatedCart = cart.map((item) =>
        item._id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
      /* console.log(updatedCart) */
      /* await axios.post(`${import.meta.env.VITE_BACKEND_URL}/cart/`, newCart, {
        withCredentials: true,
      }); // Added credentials */
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
       await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/products/like`,
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
        `${import.meta.env.VITE_BACKEND_URL}/api/products/unlike`,
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
    unlikeProduct,
  };
}
