import React, { useState, useEffect, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Cap from "../assets/Images/Cap.svg";
import filter from "../assets/Images/filter.svg";
import sort from "../assets/Images/sort.svg";
import Back from "../assets/Images/back.svg";
import axios from "axios";
import Heart from "../assets/Images/Heart.svg";
import Heart2 from "../assets/Images/Heart2.svg";
import plus from "../assets/Images/Icon Button.svg";
import plus2 from "../assets/Images/plus2.svg";
import minus from "../assets/Images/minus.svg";
import dust from "../assets/Images/dust.svg";
import { Context } from "../App";

import up from "../assets/Images/up.svg";
import down from "../assets/Images/down.svg";

export default function Store({
  handleCategoryChange,
  filteredProducts,
  filterCategory,
  products,
}) {
  const [loading, setLoading] = useState(false);
  const [likedProducts, setLikedProducts] = useState("");

  const { cart, setCart } = useContext(Context);

  // State to keep track of the active button (initially null or a specific index)

  // Function to handle button click

  const itemss = [
    "Hoodie",
    "Shorts",
    "T-shirts",
    "Trouser",
    "Sweatshirt",
    "Cap",
    "Jersey",
    "Jackets",
  ];

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    axios
      .get("https://bserver-b2ue.onrender.com/api/products/liked", {
        withCredentials: true,
      })
      .then((response) => setLikedProducts(response.data.likedProducts))
      
      .catch((error) => console.error(error));
  }, []);
  console.log(likedProducts)
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

  const navigate = useNavigate();
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
    console.log(id);
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

  const [priceRange, setPriceRange] = useState({ from: "", to: "" });

  const [accordionOpen, setAccordionOpen] = useState(true);
  const [accordionOpen2, setAccordionOpen2] = useState(true);
  const [filterSort, SetFilterSort] = useState(true);
  const [mFilterSort, SetMFilterSort] = useState(false);

  const [hoverDisabled, setHoverDisabled] = useState(false);

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
    setHoverDisabled(!hoverDisabled); // Toggle hover state when clicked
  };
  const toggleAccordion2 = () => {
    setAccordionOpen2(!accordionOpen2);
  };

  useEffect(() => {
    if (mFilterSort) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup
    };
  }, [mFilterSort]);

  const mobile = (data) => {
    SetMFilterSort(true);
    if (data === "Filter") {
      SetFilterSort(true);
    } else {
      SetFilterSort(false);
    }
  };

  loading ? document.body.classList.add("no-scroll") : "";

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Calculate the displayed products
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handlePageSelect = (e) => {
    setCurrentPage(Number(e.target.value));
  };

  return (
    <div
      className="px-4 md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[120px] pt-[56px] bg-cover bg-center"
      style={{ backgroundImage: `url(${Back})` }}
    >
      <div className="flex lg:hidden h-16 p-2 gap-8 w-full rounded-full shadow-custom mb-[32px]">
        <div className="flex items-center w-[50%] gap-3 pl-2 font-nexa-light text-[14px] leading-[22px]">
          <img src={filter} onClick={() => mobile("Filter")} alt="" />
          filter
        </div>
        <div className="flex items-center w-[50%] gap-3 pl-2 font-nexa-light text-[14px] leading-[22px]">
          <img src={sort} onClick={() => mobile("Sort")} alt="" />
          sort
        </div>
      </div>
      <div className="flex gap-2 h-fit">
        <div className="p-4 hidden lg:block bg-white rounded-lg shadow-lg w-[400px]">
          {/* Header */}
          <div className="flex justify-between gap-2 items-center mb-4">
            <button
              onClick={() => {
                SetFilterSort(true);
              }}
              className={`w-[50%] font-nexa-bold text-[16px] leading-[26px] rounded-full h-[72px] ${
                filterSort ? "border-2 border-black" : ""
              }`}
            >
              Filter
            </button>
            <button
              onClick={() => {
                SetFilterSort(false);
              }}
              className={`w-[50%] font-nexa-bold text-[16px] leading-[26px] rounded-full h-[72px] ${
                filterSort ? "" : "border-2 border-black"
              }`}
            >
              Sort
            </button>
          </div>

          {/* Category Section */}

          <div
            className={` transform ease-out flex items-center  duration-[400ms] rounded-2xl ${
              accordionOpen &&
              "flex items-center duration-[400ms] lg:h-[auto] h-[auto] "
            }`}
          >
            <div
              className={` ${accordionOpen && " "} group`}
              onClick={toggleAccordion}
            >
              <button className="flex h-[74px] items-center  gap-5 w-full ">
                <p
                  className={`font-poopins leading-[12px] text-[14px] lg:ml-6 lg:text-[16px] lg:leading-[26px]`}
                >
                  Category
                </p>
                {accordionOpen ? (
                  <img src={down} alt="" />
                ) : (
                  <img src={up} alt="" />
                )}
              </button>
              <div
                className={`grid overflow-hidden transition duration-500 ease-in-out text-white text-sm ${
                  accordionOpen
                    ? "grid-rows-[2fr] opacity-100 mt-2 "
                    : "grid-rows-[0fr] opacity-0 mt-2"
                }`}
              >
                <div className="leading-[22px] text-[14px] md:font-nexa-bold lg:text-[20px] lg:leading-[35px] overflow-hidden ">
                  <div
                    className="flex flex-wrap gap-4"
                    onClick={(e) => Stop(e)}
                  >
                    {itemss.map((item, index) => (
                      <button
                        key={index}
                        className={`${
                          filterCategory === item
                            ? "bg-black text-white "
                            : "bg-white text-black "
                        } flex items-center px-4 py-2 rounded-full  transition`}
                        onClick={() => handleCategoryChange(item)}
                      >
                        <span
                          className={`w-4 h-4 mr-2 flex items-center justify-center rounded-full ${
                            filterCategory === item
                              ? "bg-[#E2063A]"
                              : "border-2 border-[#9A9A9A]"
                          }`}
                        >
                          {filterCategory === item && (
                            <svg
                              className="w-3 h-3 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-7.5 7.5a1 1 0 01-1.414 0l-3.5-3.5a1 1 0 011.414-1.414l3.086 3.086 6.793-6.793a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </span>
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[1px] bg-[#DDDDDD] mx-4 my-4"></div>
          {/* Price Section */}
          <div
            className={` transform ease-out flex items-center  duration-[400ms] rounded-2xl ${
              accordionOpen2 &&
              "flex items-center duration-[400ms] lg:h-[auto] h-[auto] "
            }`}
          >
            <div
              className={` ${accordionOpen2 && " "} group`}
              onClick={toggleAccordion2}
            >
              <button className="flex h-[74px] items-center  gap-5 w-full ">
                <p
                  className={`font-poopins leading-[12px] text-[14px] lg:ml-6 lg:text-[16px] lg:leading-[26px]`}
                >
                  Price
                </p>
                {accordionOpen2 ? (
                  <img src={down} alt="" />
                ) : (
                  <img src={up} alt="" />
                )}
              </button>
              <div
                className={`grid overflow-hidden transition duration-500 ease-in-out text-white text-sm ${
                  accordionOpen2
                    ? "grid-rows-[2fr] opacity-100 mt-2 "
                    : "grid-rows-[0fr] opacity-0 mt-2"
                }`}
              >
                <div className="leading-[22px] text-[14px] md:font-nexa-bold lg:text-[20px] lg:leading-[35px] overflow-hidden ">
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      placeholder="From"
                      value={priceRange.from}
                      onChange={(e) =>
                        setPriceRange({
                          ...priceRange,
                          from: e.target.value,
                        })
                      }
                      className="border w-full rounded-full h-[72px] pl-6"
                    />
                    <input
                      type="number"
                      placeholder="To"
                      value={priceRange.to}
                      onChange={(e) =>
                        setPriceRange({ ...priceRange, to: e.target.value })
                      }
                      className="border w-full rounded-full h-[72px] pl-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[1px] bg-[#DDDDDD] mx-4 my-4"></div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 p-4">
          {paginatedProducts.map((product) => (
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
                        src={
                          likedProducts.includes(product._id) ? Heart2 : Heart
                        }
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
                            cart.find((item) => item._id === product._id)
                              .quantity
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

      <div className="w-full flex justify-center items-center">
        <div className="flex justify-center flex-col items-center w-[393px] rounded-[32px] mt-4 bg-white shadow-custom">
          <div className="flex justify-between w-full h-[72px] items-center px-8">
            <select
              value={currentPage}
              onChange={handlePageSelect}
              className=""
            >
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <option key={page} value={page}>
                    {page}
                  </option>
                )
              )}
            </select>

            <span className="">of {totalPages}</span>
          </div>

          <div className="flex justify-between w-full h-[72px] items-center px-8">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={` ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Previous
            </button>

            <p>{currentPage}</p>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
