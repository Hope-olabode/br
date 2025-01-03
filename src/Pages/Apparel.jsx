import React, { useState, useEffect, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer.jsx";
import Feature from "../Components/Feature.jsx";
import temp_product from "../assets/Images/temp product.svg";
import QuoteCal from "../Components/Quote_Cal.jsx";
import QuoteCalc from "../Components/Quote_Cal copy.jsx";
import FAQ from "../Components/FAQ.jsx";
import Testimonials from "../Components/Testimonials.jsx";
import Touch from "../Components/Touch.jsx";
import one from "../assets/Images/Apparel-img/1.png";
import two from "../assets/Images/Apparel-img/2.png";
import three from "../assets/Images/Apparel-img/3.png";
import four from "../assets/Images/Apparel-img/4.png";
import five from "../assets/Images/Apparel-img/5.png";
import six from "../assets/Images/Apparel-img/6.png";
import seven from "../assets/Images/Apparel-img/7.png";
import eight from "../assets/Images/Apparel-img/8.png";
import MOQ from "../Components/MOQ.jsx"
import Store from "../Components/Store.jsx";
import CustomCheckbox from "../Components/jjj.jsx";
import Cap from "../assets/Images/Cap.svg";
import filter from "../assets/Images/filter.svg";
import sort from "../assets/Images/sort.svg";
import Back from "../assets/Images/back.svg";

import Heart from "../assets/Images/Heart.svg";
import plus from "../assets/Images/Icon Button.svg";
import plus2 from "../assets/Images/plus2.svg";
import minus from "../assets/Images/minus.svg";
import dust from "../assets/Images/dust.svg";
import { Context } from "../App";

import up from "../assets/Images/up.svg";
import down from "../assets/Images/down.svg";

import Loader from "../Components/Loader";

export default function Apparel() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const { cart, setCart } = useContext(Context);
  const [filterCategory, setFilterCategory] = useState(() => {
    // Retrieve the initial value from localStorage or default to false
    return JSON.parse(localStorage.getItem("category")) || "";
  });
  const [selected, setSelected] = useState("");

  // State to keep track of the active button (initially null or a specific index)
  const [activeIndex, setActiveIndex] = useState(() => {
    // Retrieve the initial value from localStorage or default to -1 if not set or invalid
    const storedValue = localStorage.getItem("index");
    const parsedValue = storedValue !== null ? Number(storedValue) : -1;
    return isNaN(parsedValue) ? -1 : parsedValue;
  });

  const [filteredProducts, setFilteredProducts] = useState([]);
  console.log(activeIndex);
  useEffect(() => {
    const pro =
      filterCategory === ""
        ? []
        : products.filter((product) => product.category === filterCategory);
    setFilteredProducts(pro);
  }, [filterCategory, products]);

  console.log(filteredProducts);
  console.log(typeof filterCategory);

  // Function to handle button click
  const handleClick = (name, index) => {
    setActiveIndex(index);
    console.log(name);
    setFilterCategory(name);
    localStorage.setItem("category", JSON.stringify(name));
    localStorage.setItem("index", JSON.stringify(index));
  };

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

  const items = [
    { name: "Hoodie", img: one, style: " col-start-1 col-end-3" },
    { name: "Shorts", img: two, style: " col-start-3 col-end-5 " },
    {
      name: "T-shirts",
      img: three,
      style: "  col-start-5 col-end-8",
    },
    {
      name: "Trouser",
      img: four,
      style: "  col-start-1 col-end-3 ",
    },
    {
      name: "Sweatshirt",
      img: five,
      style: "  col-start-3 col-end-5",
    },
    { name: "Cap", img: six, style: " col-start-5 col-end-8" },
    {
      name: "Jersey",
      img: seven,
      style: "  col-start-2 col-end-4",
    },
    {
      name: "Jackets",
      img: eight,
      style: "  col-start-4 col-end-6",
    },
  ];

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading and add no-scroll
      document.body.classList.add("no-scroll");

      try {
        const response = await fetch("https://br-s.onrender.com/api/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        let result = await response.json();
        setProducts(result); // Correctly setting the fetched data to state
        console.log(result); // Debugging: Log the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Stop loading and remove no-scroll
        document.body.classList.remove("no-scroll");
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs once when the component mounts.

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
    console.log(`Liked product with id: ${id}`);
  };

  console.log(1);
  console.log(activeIndex);

  /*  const filteredProducts =
    filterCategory === ""
      ? []
      : products.filter((product) => product.category === filterCategory); */

  const img = [one, two, three, four, five, six, seven, eight];

  const [selectedCategory, setSelectedCategory] = useState("Hoodie");
  const [selectedSize, setSelectedSize] = useState("");
  const [priceRange, setPriceRange] = useState({ from: "", to: "" });
  const [selectedMaterial, setSelectedMaterial] = useState([]);

  const handleCategoryChange = (category) => {
    setFilterCategory(category);
    localStorage.setItem("category", JSON.stringify(category));
  };

 
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

  return (
    <div className="mt-[96px]">
      {loading ? <Loader /> : ""}
      {mFilterSort ? (
        <div className="fixed inset-0 bg-black bg-opacity-40  justify-center items-center z-50 overflow-scroll">
          <div className="p-4 lg:hidden block mt-8 bg-white rounded-lg  w-full">
            {/* Header */}
            <div className="flex justify-between gap-2 items-center lg:hidden mb-4">
              <button
                onClick={() => {
                  SetFilterSort(true);
                }}
                className={`w-[50%] font-nexa-bold text-[14px] leading-[22px] rounded-full h-[48px] ${
                  filterSort ? "border-2 border-black" : ""
                }`}
              >
                Filter
              </button>
              <button
                onClick={() => {
                  SetFilterSort(false);
                }}
                className={`w-[50%] font-nexa-bold text-[14px] leading-[22px] rounded-full h-[48px] ${
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
                    className={`font-poopins leading-[22px] text-[14px] lg:ml-6 `}
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
                          } flex items-center px-4 py-2 rounded-full font-poopins text-[14px] leading-[22px] transition`}
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
                    className={`font-poopins leading-[22px] text-[14px] lg:ml-6`}
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
            <div className="h-[1px] bg-[#DDDDDD] mx-4 my-4"></div>
            <div className=" flex justify-between">
              <button
                className="font-nexa-light text-[14px] leading-[22px] w-[50%] h-12 rounded-full text-center"
                onClick={() => {
                  SetMFilterSort(false);
                }}
              >
                Cancel
              </button>
              <button
                className="font-nexa-light text-[14px] leading-[22px] bg-[#E2063A] w-[50%] h-12 rounded-full text-center text-white"
                onClick={() => {
                  SetMFilterSort(false);
                }}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="top_quality pt-[120px] ">
        <h1 className="text-[36px] leading-[48px] text-center font-nexa-bold lg:text-[56px] lg:leading-[78px]">
          Experience Top{" "}
          <span className="block lg:inline">Quality Product</span>
        </h1>
        <div className="md:flex mt-4 items-center justify-center mb-10 overflow-scroll md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[120px]">
          {/* <div className="flex  flex-row gap-[4px]">
            <button onClick={ ()=>select("hoodie")} className="px-6 py-2 border-2 border-white hover:border-[#E6E6E6] focus:border-black focus:border-2 rounded-full font-nexa-bold text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px]">Hoodie</button>
            <button className="px-6 py-2 border-2 border-white hover:border-[#E6E6E6] focus:border-black focus:border-2 rounded-full font-nexa-bold text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px]">Shorts</button>
            <button className="px-6 py-2 border-2 border-white hover:border-[#E6E6E6] focus:border-black focus:border-2 rounded-full font-nexa-bold text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px] whitespace-nowrap">T-shirt</button>
            <button className="px-6 py-2 border-2 border-white hover:border-[#E6E6E6] focus:border-black focus:border-2 rounded-full font-nexa-bold text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px]">Trouser</button>
            <button className="px-6 py-2 border-2 border-white hover:border-[#E6E6E6] focus:border-black focus:border-2 rounded-full font-nexa-bold text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px]">Sweatshirt</button>
            <button className="px-6 py-2 border-2 border-white hover:border-[#E6E6E6] focus:border-black focus:border-2 rounded-full font-nexa-bold text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px]">Cap</button>
            <button className="px-6 py-2 border-2 border-white hover:border-[#E6E6E6] focus:border-black focus:border-2 rounded-full font-nexa-bold text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px]">Jersey</button>
            <button className="px-6 py-2 border-2 border-white hover:border-[#E6E6E6] focus:border-black focus:border-2 rounded-full font-nexa-bold text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px]">Jackets</button>
          </div> */}
          <div className="flex gap-[4px]">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => handleClick(item.name, index)}
                className={`px-6 py-2 whitespace-nowrap hover:border-2  hover:border-[#E6E6E6] rounded-full font-nexa-bold text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px] ${
                  item.name === filterCategory
                    ? "border-2  border-black focus:border-black"
                    : ""
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        <div className="px-4 md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[120px]">
          <div
            className={`${
              activeIndex === -1
                ? "px-4 py-2 grid grid-cols-6 grid-rows-3 gap-x-2  gap-y-2"
                : "w-[100%] h-[200px] sm:h-[350px] lg:h-[500px] rounded-full  overflow-hidden"
            }    `}
          >
            {/* <div className={` w-full h-[500px] rounded-full  overflow-hidden`}>
              <img className="w-full" src={one} alt="" />
            </div> */}
            {items.map((item, index) => (
              <img
                key={index}
                src={item.img}
                alt={item.name}
                onClick={() => handleClick(item.name, index)}
                className={` ${item.style} ${
                  activeIndex === -1 || activeIndex === index
                    ? "block rounded-full"
                    : "hidden"
                }${activeIndex === index ? " w-full rounded-none" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
      {/* <CustomCheckbox checkboxes={checkboxes} handleCheckboxChange={handleCheckboxChange}  checkboxData={checkboxData}/> */}
      {/* {filterCategory === "" ? "" : } */}

      {filteredProducts.length === 0 ? (
        <MOQ />
      ) : (
        <Store handleCategoryChange={handleCategoryChange} filteredProducts={filteredProducts} filterCategory={filterCategory}/>
      )}
      {/* <Feature /> */}
      {/* <QuoteCalc checkboxes1={checkboxes1} handleCheckboxChange={handleCheckboxChange}  checkboxData1={checkboxData1}/> */}
      <FAQ />
      <div className=" bg-[url('./assets/Images/hero-pattern.svg')] bg-cover bg-no-repeat">
            <Testimonials />
          </div>
      <Touch />
    </div>
  );
}
