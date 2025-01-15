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

export default function likedProducts() {
  const [likedProducts, setLikedProducts] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { cart, setCart } = useContext(Context);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      document.body.classList.add("no-scroll");

      try {
        const response = await fetch("https://bserver-b2ue.onrender.com/api/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        let result = await response.json();
        setProducts(result); // Correctly setting the fetched data to state
        console.log(result); // Debugging: Log the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        document.body.classList.remove("no-scroll");
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs once when the component mounts.

  useEffect(() => {
    axios
      .get("https://bserver-b2ue.onrender.com/api/products/liked", {
        withCredentials: true,
      })
      .then((response) => setLikedProducts(response.data.likedProducts))

      .catch((error) => console.error(error));
  }, []);

  const likeProduct = (productId) => {
    axios
      .post(
        "https://bserver-b2ue.onrender.com/api/products/like",
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
        "https://bserver-b2ue.onrender.com/api/products/unlike",
        { productId },
        { withCredentials: true }
      )
      .then(() => {
        setLikedProducts((prev) => prev.filter((id) => id !== productId));
      })
      .catch((error) => console.error(error));
  };

  const handleAddToCart = (productId) => {
      setCart((prevCart) => {
        const existingProduct = prevCart.find((item) => item._id === productId);
        if (existingProduct) {
          return prevCart.map((item) =>
            item._id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          const product = products.find((p) => p._id === productId);
          return [...prevCart, { ...product, quantity: 20 }];
        }
      });
    };
  
    const handleQuantityChange = (productId, newQuantity) => {
      if (newQuantity < 20) return;
      setCart((prevCart) =>
        prevCart.map((item) =>
          item._id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    };
  
    const handleRemoveFromCart = (productId) => {
      setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
    };
  
    const handleDecreaseQuantity = (productId) => {
      setCart((prevCart) =>
        prevCart
          .map((item) =>
            item._id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity >= 20)
      );
    };
  
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
