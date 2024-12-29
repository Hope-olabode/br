import Cap from "../assets/Images/Cap.svg";

import Heart from "../assets/Images/Heart.svg";
import plus from "../assets/Images/Icon Button.svg";
import plus2 from "../assets/Images/plus2.svg";
import minus from "../assets/Images/minus.svg";
import dust from "../assets/Images/dust.svg";

/*export default function Feature () {
  return (
    <div className="px-4 py-[72px] lg:py-[96px] ">
      <h2 className=" font-nexa-bold text-center text-[24px] leading-[38px]">Featured Apparel</h2>
      <div className="grid grid-cols-2 pt-[32px] gap-x-2 gap-y-4 bg-transparent md:flex overflow-x-scroll overflow-y-hidden lg:mx-[120px]">
        
        <div className="border-8 bg-white border-white hover:border-[#E6E6E6] rounded-t-full max-w-[312px] md:min-w-[312px]">
          <img className="rounded-full" src={Cap} alt="" />
          <div className="pt-[16px] rounded-full pb-[11.6px] pl-[8px] relative">
            <p className="font-poopins  text-[12px] leading-[18px] md:text-[20px] md:leading-[32px]">Short sleeve white hoodie</p>
            <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center absolute bg-white top-[-60px] right-[16px] ">
              <img className=" bg-white" src={Heart} alt="" />
            </div>
            <div className="flex flex-row justify-between items-center mt-[20px] w-full">
              <div className="price">
                <p className="font-nexa-bold text-[16] leading-[26px] font-bold md:text-[24px] md:leading-[38px]">N16,000</p>
                <p className="font-poopins text-[10px] leading-[16px] md:text-[16px] md:leading-[26px]">Out of stock</p>
              </div>
              <img src={bag} alt="" />
            </div>
          </div>
        </div>
        <div className="border-8 bg-white border-white hover:border-[#E6E6E6] rounded-t-full max-w-[312px] md:min-w-[312px] ">
          <img className="rounded-full" src={Hoodie} alt="" />
          <div className="pt-[7.73px] pb-[11.6px] pl-[8px] relative">
            <p className="font-poopins  text-[12px] leading-[18px]">Short sleeve white hoodie</p>
            <img className="absolute top-[-16px] right-[16px] bg-white" src={Heart} alt="" />
            <div className="flex flex-row justify-between items-center mt-[12px] w-full">
              <div className="price">
                <p className="font-nexa-bold text-[16] leading-[26px] font-bold">N16,000</p>
                <p className="font-poopins text-[10px] leading-[16px]">Out of stocK</p>
              </div>
              <img src={bag} alt="" />
            </div>
          </div>
        </div>
        <div className="border-8 bg-white border-white hover:border-[#E6E6E6] rounded-t-full max-w-[312px] md:min-w-[312px]">
          <img className="rounded-full" src={Top} alt="" />
          <div className="pt-[7.73px] pb-[11.6px] pl-[8px] relative">
            <p className="font-poopins  text-[12px] leading-[18px]">Short sleeve white hoodie</p>
            <img className="absolute top-[-16px] right-[16px] bg-white" src={Heart} alt="" />
            <div className="flex flex-row justify-between items-center mt-[12px] w-full">
              <div className="price">
                <p className="font-nexa-bold text-[16] leading-[26px] font-bold">N16,000</p>
                <p className="font-poopins text-[10px] leading-[16px]">Out of stocK</p>
              </div>
              <img src={bag} alt="" />
            </div>
          </div>
        </div>
        <div className="border-8 bg-white border-white hover:border-[#E6E6E6] rounded-t-full max-w-[312px] md:min-w-[312px]">
          <img className="rounded-full" src={Hoodie} alt="" />
          <div className="pt-[7.73px] pb-[11.6px] pl-[8px] relative">
            <p className="font-poopins  text-[12px] leading-[18px]">Short sleeve white hoodie</p>
            <img className="absolute top-[-16px] right-[16px] bg-white" src={Heart} alt="" />
            <div className="flex flex-row justify-between items-center mt-[12px] w-full">
              <div className="price">
                <p className="font-nexa-bold text-[16] leading-[26px] font-bold">N16,000</p>
                <p className="font-poopins text-[10px] leading-[16px]">Out of stocK</p>
              </div>
              <img src={bag} alt="" />
            </div>
          </div>
        </div>
        <div className="border-8 bg-white border-white hover:border-[#E6E6E6] rounded-t-full max-w-[312px] md:min-w-[312px]">
          <img className="rounded-full" src={Top} alt="" />
          <div className="pt-[7.73px] pb-[11.6px] pl-[8px] relative">
            <p className="font-poopins  text-[12px] leading-[18px]">Short sleeve white hoodie</p>
            <img className="absolute top-[-16px] right-[16px] bg-white" src={Heart} alt="" />
            <div className="flex flex-row justify-between items-center mt-[12px] w-full">
              <div className="price">
                <p className="font-nexa-bold text-[16] leading-[26px] font-bold">N16,000</p>
                <p className="font-poopins text-[10px] leading-[16px]">Out of stocK</p>
              </div>
              <img src={bag} alt="" />
            </div>
          </div>
        </div>
        <div className="border-8 bg-white border-white hover:border-[#E6E6E6] rounded-t-full max-w-[312px] md:min-w-[312px]">
          <img className="rounded-full" src={Cap} alt="" />
          <div className="pt-[7.73px] pb-[11.6px] pl-[8px] relative">
            <p className="font-poopins  text-[12px] leading-[18px]">Short sleeve white hoodie</p>
            <img className="absolute top-[-16px] right-[16px] bg-white" src={Heart} alt="" />
            <div className="flex flex-row justify-between items-center mt-[12px] w-full">
              <div className="price">
                <p className="font-nexa-bold text-[16] leading-[26px] font-bold">N16,000</p>
                <p className="font-poopins text-[10px] leading-[16px]">Out of stocK</p>
              </div>
              <img src={bag} alt="" />
            </div>
          </div>
        </div>
    
        
        
      </div>
    </div>
  );

} */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState(() => {
    // Retrieve the initial value from localStorage or default to false
    return JSON.parse(localStorage.getItem("cart")) || [];
  });
  const [filterCategory, setFilterCategory] = useState(""); // No category selected by default

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        let result = await response.json();
        setData(result); // Correctly setting the fetched data to state
        console.log(result); // Debugging: Log the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const products = [
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      price: 9.99,
      category: "beauty",
      img: Cap,
    },
    {
      id: 2,
      title: "Eyeshadow Palette with Mirror",
      price: 19.99,
      category: "beauty",
      img: Cap,
    },
    {
      id: 3,
      title: "Powder Canister",
      price: 14.99,
      category: "beauty",
      img: Cap,
    },
    {
      id: 4,
      title: "Wireless Headphones",
      price: 59.99,
      category: "electronics",
      img: Cap,
    },
    {
      id: 5,
      title: "Gaming Mouse",
      price: 29.99,
      category: "electronics",
      img: Cap,
    },
    { id: 6, title: "LED Desk Lamp", price: 24.99, category: "home", img: Cap },
  ];

  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (productId) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === productId);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        const product = products.find((p) => p.id === productId);
        return [...prevCart, { ...product, quantity: 20 }];
      }
    });
  };

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 20) return;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const handleDecreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity >= 20)
    );
  };

  const filteredProducts =
    filterCategory === ""
      ? []
      : products.filter((product) => product.category === filterCategory);

  const Die = () => {};
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>

      {/* Filter Buttons */}
      <div className="flex space-x-2 mb-6">
        <button
          onClick={() => setFilterCategory("beauty")}
          className={`px-4 py-2 rounded ${
            filterCategory === "beauty"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Beauty
        </button>
        <button
          onClick={() => setFilterCategory("electronics")}
          className={`px-4 py-2 rounded ${
            filterCategory === "electronics"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Electronics
        </button>
        <button
          onClick={() => setFilterCategory("home")}
          className={`px-4 py-2 rounded ${
            filterCategory === "home" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Home
        </button>
      </div>

      {/* Product Display */}
      {filteredProducts.length === 0 ? (
        <p className="text-gray-600">Click on a category to view products.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="" /* onClick={() => handleProductClick(product.id)} */
            >
              <div
                className={`border-8 bg-white border-white hover:border-[#E6E6E6] rounded-t-full max-w-[312px] md:min-w-[312px] ${
                  cart.some((item) => item.id === product.id)
                    ? "shadow-2xl"
                    : ""
                }`}
              >
                <img className="rounded-full" src={Cap} alt="" />
                <div className="pt-[16px] rounded-full pb-[11.6px] px-[8px] relative">
                  <p className="font-poopins  text-[12px] leading-[18px] md:text-[20px] md:leading-[32px]">
                    {product.title}
                  </p>
                  <div className="lg:w-[72px] w-[48px] h-[48px] lg:h-[72px] rounded-full flex items-center justify-center absolute bg-white lg:top-[-60px] top-[-35px] md:top-[-70px]   right-[16px] ">
                    <img className=" bg-white" src={Heart} alt="" />
                  </div>
                  <div className="flex flex-row justify-between items-center mt-[20px] w-full">
                    <div className="price">
                      <p className="font-nexa-bold text-[16] leading-[26px] font-bold md:text-[24px] md:leading-[38px]">
                        ${product.price.toFixed(2)}
                      </p>
                      <p className="font-poopins text-[10px] leading-[16px] md:text-[16px] md:leading-[26px]">
                        Out of stock
                      </p>
                    </div>
                    {cart.some((item) => item.id === product.id) ? (
                      ""
                    ) : (
                      <img
                        src={plus}
                        alt=""
                        onClick={() => handleAddToCart(product.id)}
                      />
                    )}
                  </div>
                  <div className="flex items-center mt-[12px] justify-center space-x-2">
                    {cart.find((item) => item.id === product.id) ? (
                      <button
                        onClick={() =>
                          cart.find((item) => item.id === product.id).quantity >
                          20
                            ? handleDecreaseQuantity(product.id)
                            : handleRemoveFromCart(product.id)
                        }
                      >
                        {cart.find((item) => item.id === product.id).quantity >
                        20 ? (
                          <img src={minus} className="" />
                        ) : (
                          <img src={dust} className="" />
                        )}
                      </button>
                    ) : (
                      ""
                    )}

                    {cart.find((item) => item.id === product.id) ? (
                      <input
                        type="number"
                        value={
                          cart.find((item) => item.id === product.id).quantity
                        }
                        onChange={(e) =>
                          handleQuantityChange(
                            product.id,
                            Number(e.target.value)
                          )
                        }
                        className=" p-1 rounded w-16 text-center"
                      />
                    ) : (
                      ""
                    )}

                    {cart.find((item) => item.id === product.id) ? (
                      <button
                        onClick={() => handleAddToCart(product.id)}
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
              {/* <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
              <p className="text-green-600 font-bold mb-2">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-gray-500 text-sm mb-2">
                Category: {product.category}
              </p> */}

              {/* <div className="flex items-center space-x-2">
                {cart.find((item) => item.id === product.id) && (
                  <button
                    onClick={() =>
                      cart.find((item) => item.id === product.id).quantity > 20
                        ? handleDecreaseQuantity(product.id)
                        : handleRemoveFromCart(product.id)
                    }
                    className={`px-3 py-1 rounded ${
                      cart.find((item) => item.id === product.id).quantity > 20
                        ? "bg-yellow-500 text-black"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {cart.find((item) => item.id === product.id).quantity > 20
                      ? "-"
                      : "Delete"}
                  </button>
                )}

                {cart.find((item) => item.id === product.id) ? (
                  <input
                    type="number"
                    value={cart.find((item) => item.id === product.id).quantity}
                    onChange={(e) =>
                      handleQuantityChange(product.id, Number(e.target.value))
                    }
                    className="border p-1 rounded w-16 text-center"
                  />
                ) : (
                  <span className="text-gray-500">Not in cart</span>
                )}

                <button
                  onClick={() => handleAddToCart(product.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  +
                </button>
              </div> */}
            </div>
          ))}
        </div>
      )}

      {/* Cart Summary */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Cart</h2>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center mb-2 border p-4 rounded"
              >
                {/* Item Info */}
                <span className="font-semibold">{item.title}</span>

                {/* Quantity Management */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      item.quantity > 20
                        ? handleDecreaseQuantity(item.id)
                        : handleRemoveFromCart(item.id)
                    }
                    className={`px-3 py-1 rounded ${
                      item.quantity > 20
                        ? "bg-yellow-500 text-black"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {item.quantity > 20 ? "-" : "Delete"}
                  </button>

                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, Number(e.target.value))
                    }
                    className="border p-1 rounded w-16 text-center"
                  />

                  <button
                    onClick={() => handleAddToCart(item.id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    +
                  </button>
                </div>

                {/* Total Price */}
                <span>
                  {item.quantity} x ${item.price.toFixed(2)} = $
                  {(item.quantity * item.price).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
