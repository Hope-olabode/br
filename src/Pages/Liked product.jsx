import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Cap from "../assets/Images/Cap.svg";
import axios from "axios";
import Heart from "../assets/Images/Heart.svg";
import Heart2 from "../assets/Images/Heart2.svg";
import plus from "../assets/Images/Icon Button.svg";
import plus2 from "../assets/Images/plus2.svg";
import minus from "../assets/Images/minus.svg";
import dust from "../assets/Images/dust.svg";
import { Context } from "../App";
import { Toaster } from "sonner";
import { CartFunctions } from "../Components/Cart_Functions";

export default function likedProducts() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const {
    cart,
    handleAddToCart,
    handleRemoveFromCart,
    handleDecreaseQuantity,
    likeProduct,
    unlikeProduct,
  } = CartFunctions();
  const { setCart, likedProducts, setLikedProducts, products } =
    useContext(Context);
  const navigate = useNavigate();

  console.log(likedProducts);

  /* const likeProduct = (productId) => {
    axios
      .post(
        "   https://bserver-b2ue.onrender.com/api/products/like",
        { productId },
        { withCredentials: true }
      )
      .then(() => {
        setLikedProducts((prev) => [...prev, productId]);
      })
      .catch((error) => console.error(error));
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
  }; */

  // const handleAddToCart = async (productId) => {
  //   try {
  //     console.log(cart);
  //     const existingProduct =
  //       cart.length > 0 && cart.some((item) => item._id === productId);
  //     console.log(existingProduct);
  //     if (existingProduct) {
  //       const product = products.find((p) => p._id === productId);
  //       const newCart = { ...product, quantity: 1 };
  //       const updatedCart = cart.map((item) =>
  //         item._id === productId
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item
  //       );
  //       /* console.log(updatedCart) */
  //       await axios.post(`   https://bserver-b2ue.onrender.com/cart/`, newCart, {
  //         withCredentials: true,
  //       }); // Added credentials
  //       setCart(updatedCart);
  //       localStorage.setItem("cart", JSON.stringify(updatedCart));

  //       } else {
  //         const product = products.find((p) => p._id === productId);
  //         const newCart1 = { ...product, quantity: 20 };
  //         const newCart = [...cart, { ...product, quantity: 20 }];
  //         console.log(newCart)
  //         await axios.post("   https://bserver-b2ue.onrender.com/cart", newCart1, { withCredentials: true }); // Added credentials
  //         setCart(newCart);
  //         cartAddMsg();
  //         localStorage.setItem("cart", JSON.stringify(newCart));
  //     }
  //   } catch (error) {
  //     console.error("Error adding to cart:", error);
  //     const message = error.response?.data?.message || "An error occurred";

  //   }
  // };

  // const handleQuantityChange = async (productId, newQuantity) => {
  //   setCart((prevCart) =>
  //     prevCart.map((item) =>
  //       item._id === productId ? { ...item, quantity: newQuantity } : item
  //     )
  //   );

  //   if (newQuantity < 20) return;
  //   try {
  //     const updatedCart = cart.map((item) =>
  //       item._id === productId ? { ...item, quantity: newQuantity } : item
  //     );
  //     console.log(updatedCart)
  //     await axios.put(`   https://bserver-b2ue.onrender.com/cart/${productId}`, { quantity: newQuantity }, {
  //       withCredentials: true,
  //     }); // Added credentials
  //     localStorage.setItem("cart", JSON.stringify(updatedCart));
  //   } catch (error) {
  //     console.error("Error updating quantity:", error);
  //   }
  // };

  // const handleRemoveFromCart = async (productId) => {
  //   try {
  //     const updatedCart = cart.filter((item) => item._id !== productId);
  //     await axios.delete(`   https://bserver-b2ue.onrender.com/cart/${productId}`, {
  //       withCredentials: true,
  //     }); // Added credentials
  //     setCart(updatedCart);
  //     localStorage.setItem("cart", JSON.stringify(updatedCart));
  //     cartRemoveMsg();
  //   } catch (error) {
  //     console.error("Error removing from cart:", error);
  //   }
  // };

  // const handleDecreaseQuantity = async (productId) => {
  //   try {
  //     const product = products.find((p) => p._id === productId);
  //     const newCart = { ...product, quantity: -1 };
  //     const updatedCart = cart.map((item) =>
  //       item._id === productId ? { ...item, quantity: item.quantity - 1 } : item
  //     );
  //     /* console.log(updatedCart) */
  //     await axios.post(`   https://bserver-b2ue.onrender.com/cart/`, newCart, {
  //       withCredentials: true,
  //     }); // Added credentials
  //     setCart(updatedCart);
  //     localStorage.setItem("cart", JSON.stringify(updatedCart));
  //   } catch (error) {
  //     console.error("Error decreasing quantity:", error);
  //   }
  // };

  const Stop = (e, id) => {
    e.stopPropagation(); // Prevent navigation
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
    console.log(id);
  };

  useEffect(() => {
    if (likedProducts.length > 0 && products.length > 0) {
      const filtered = products.filter((product) =>
        likedProducts.includes(product._id)
      );
      setFilteredProducts(filtered);
    }
  }, [likedProducts, products]);

  return (
    <div className="mt-[192px] px-4 md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[120px]">
      <Toaster position="top-center" />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 p-4">
        {filteredProducts.map((product) => (
          <div key={product._id} className="mx-auto">
            <div
              className={`border-8 bg-white border-white hover:border-[#E6E6E6] rounded-t-full rounded-b-[900px]  ${
                cart.some((item) => item._id === product._id)
                  ? "shadow-custom"
                  : ""
              }`}
              onClick={() => handleProductClick(product._id)}
            >
              <img className="rounded-full" src={Cap} alt="" />
              <div className="pt-[16px] rounded-full pb-[11.6px] px-[8px] relative">
                <p className="font-poopins  text-[12px] leading-[18px] md:text-[20px] md:leading-[32px]">
                  {product.name}
                </p>
                <div onClick={(e) => Stop(e)} className="div">
                  <div
                    onClick={() => {
                      if (likedProducts.includes(product._id)) {
                        unlikeProduct(product._id);
                      } else {
                        likeProduct(product._id);
                      }
                    }}
                    className="lg:w-[72px] w-[48px] h-[48px] lg:h-[72px] rounded-full flex items-center justify-center absolute bg-white lg:top-[-60px] top-[-35px] md:top-[-70px]   right-[16px] "
                  >
                    <img
                      className=" bg-white"
                      src={likedProducts.includes(product._id) ? Heart2 : Heart}
                      alt=""
                    />
                  </div>
                </div>

                <div className="md:flex items-center md:mt-[20px]">
                  <div
                    className={`flex flex-row justify-between items-center mt-[20px] md:mt-0 w-full ${
                      cart.some((item) => item._id === product._id)
                        ? "md:w-[50%]"
                        : ""
                    } `}
                  >
                    <div className="price">
                      <p className="font-nexa-bold text-[16px] leading-[26px] font-bold md:text-[24px] md:leading-[38px]">
                        ${product.price /* .toFixed(2) */}
                      </p>
                      <p className="font-poopins text-[10px] leading-[16px] md:text-[16px] md:leading-[26px]">
                        Out of stock
                      </p>
                    </div>
                    {cart.some((item) => item._id === product._id) ? (
                      ""
                    ) : (
                      <div className="div" onClick={(e) => Stop(e)}>
                        <img
                          src={plus}
                          alt=""
                          onClick={() => handleAddToCart(product._id)}
                        />
                      </div>
                    )}
                  </div>
                  <div
                    className={`flex items-center mt-[12px] justify-center space-x-2 ${
                      cart.some((item) => item._id === product._id)
                        ? "md:w-[50%]"
                        : ""
                    } md:mt-0`}
                    onClick={(e) => Stop(e)}
                  >
                    {cart.find((item) => item._id === product._id) ? (
                      <button
                        onClick={() =>
                          cart.find((item) => item._id === product._id)
                            .quantity > 20
                            ? handleDecreaseQuantity(product._id)
                            : handleRemoveFromCart(product._id)
                        }
                      >
                        {cart.find((item) => item._id === product._id)
                          .quantity > 20 ? (
                          <img src={minus} className="" />
                        ) : (
                          <img src={dust} className="" />
                        )}
                      </button>
                    ) : (
                      ""
                    )}

                    {cart.find((item) => item._id === product._id) ? (
                      <input
                        type="number"
                        value={
                          cart.find((item) => item._id === product._id).quantity
                        }
                        onChange={(e) =>
                          handleQuantityChange(
                            product._id,
                            Number(e.target.value)
                          )
                        }
                        className=" p-1 rounded w-16 text-center"
                      />
                    ) : (
                      ""
                    )}

                    {cart.find((item) => item._id === product._id) ? (
                      <button
                        onClick={() => handleAddToCart(product._id)}
                        className=" text-white  rounded"
                      >
                        <img src={plus2} className="" />
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
