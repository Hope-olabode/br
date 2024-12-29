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
import ho from "../assets/Images/ho.svg";
import sho from "../assets/Images/sho.svg";
import shi from "../assets/Images/shi.svg";
import ja from "../assets/Images/ja.svg";
import jea from "../assets/Images/jea.svg";
import jer from "../assets/Images/jer.svg";
import sw from "../assets/Images/sw.svg";
import ca from "../assets/Images/ca.svg";
import CustomCheckbox from "../Components/jjj.jsx";
import Cap from "../assets/Images/Cap.svg";
import filter from "../assets/Images/filter.svg";
import sort from "../assets/Images/sort.svg";

import Heart from "../assets/Images/Heart.svg";
import plus from "../assets/Images/Icon Button.svg";
import plus2 from "../assets/Images/plus2.svg";
import minus from "../assets/Images/minus.svg";
import dust from "../assets/Images/dust.svg";
import { Context } from "../App";

import up from "../assets/Images/up.svg";
import down from "../assets/Images/down.svg";

export default function Apparel() {
  const [products, setProducts] = useState([]);

  const { cart, setCart } = useContext(Context);
  const [filterCategory, setFilterCategory] = useState(() => {
    // Retrieve the initial value from localStorage or default to false
    return JSON.parse(localStorage.getItem("category")) || "";
  });
  const [selected, setSelected] = useState("Hoodie");

  // State to keep track of the active button (initially null or a specific index)
  const [activeIndex, setActiveIndex] = useState(() => {
    // Retrieve the initial value from localStorage or default to false
    return Number(localStorage.getItem("index")) ?? -1;
  });

  const [filteredProducts, setFilteredProducts] = useState([]);

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
      }
    };
    fetchData();
  }, []);

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

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleMaterialChange = (material) => {
    setSelectedMaterial((prev) =>
      prev.includes(material)
        ? prev.filter((m) => m !== material)
        : [...prev, material]
    );
  };

  const [accordionOpen, setAccordionOpen] = useState(true);
  const [accordionOpen2, setAccordionOpen2] = useState(true);
  const [filterSort, SetFilterSort] = useState(true)
  const [mFilterSort, SetMFilterSort] = useState(false)


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
    SetMFilterSort(true)
    if (data === "Filter") {
      SetFilterSort(true)
    } else {
      SetFilterSort(false)
    }
  }

  return (
    <div className="mt-[96px]">
      {mFilterSort ? <div className="fixed inset-0 bg-black bg-opacity-40  justify-center items-center z-50 overflow-scroll">
        <div className="p-4 lg:hidden block mt-8 bg-white rounded-lg  w-full">
              {/* Header */}
              <div className="flex justify-between gap-2 items-center mb-4">
                <button onClick={()=>{SetFilterSort(true)}} className={`w-[50%] font-nexa-bold text-[14px] leading-[22px] rounded-full h-[48px] ${filterSort ? "border-2 border-black": ""}`}>
                  Filter
                </button>
                <button onClick={()=>{SetFilterSort(false)}} className={`w-[50%] font-nexa-bold text-[14px] leading-[22px] rounded-full h-[48px] ${filterSort ? "": "border-2 border-black"}`}>Sort</button>
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


              {/* Material Section */}
              <div className="mb-4">
                <h3 className="font-bold mb-2">Material</h3>
                <div className="grid grid-cols-2 gap-2">
                  {["Cotton", "Polyester", "Blend", "Print-On"].map(
                    (material) => (
                      <label key={material} className="flex items-center">
                        <input
                          type="checkbox"
                          value={material}
                          checked={selectedMaterial.includes(material)}
                          onChange={() => handleMaterialChange(material)}
                          className="mr-2"
                        />
                        {material}
                      </label>
                    )
                  )}
                </div>
              </div>
              <div className="h-[1px] bg-[#DDDDDD] mx-4 my-4"></div>
              <div className=" flex justify-between">
                <button className="font-nexa-light text-[14px] leading-[22px] w-[50%] h-12 rounded-full text-center"
                onClick={()=> {SetMFilterSort(false)}}>Cancel</button>
                <button className="font-nexa-light text-[14px] leading-[22px] bg-[#E2063A] w-[50%] h-12 rounded-full text-center text-white"
                onClick={()=> {SetMFilterSort(false)}}>Apply</button>
              </div>
            </div>
        </div>: ""}
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
                : "w-[100%] h-[200px] lg:h-[500px] rounded-full  overflow-hidden"
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
        <div className="px-[40px] py-[72px] md:px-[80] lg:px-[120px] xl:px-[160px] 2xl:px-[180px] bg-black text-white xl:flex gap-20 lg:py-[135px]">
          <h3 className="font-nexa-bold text-[24px] leading-[35px] lg:text-[56px] lg:leading-[78px] mb-11">
            Our Products <span className="xl:block">Minimum Order</span>{" "}
            Quantity {"{MOQ}"}
          </h3>
          <div className="border-2 border-[#DDDDDD] p-6 rounded-[32px] xl:w-[50%]">
            <div className="flex justify-between items-center">
              <div className="flex gap-5 items-center">
                <img className="lg:w-[56px]" src={ho} alt="" />
                <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">
                  Hoodie
                </p>
              </div>
              <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">
                20
              </p>
            </div>
            <div className="flex justify-between items-center mt-10">
              <div className="flex gap-5 items-center">
                <img className="lg:w-[56px]" src={sho} alt="" />
                <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">
                  Shorts
                </p>
              </div>
              <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">
                20
              </p>
            </div>
            <div className="flex justify-between items-center mt-10">
              <div className="flex gap-5 items-center">
                <img className="lg:w-[56px]" src={shi} alt="" />
                <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">
                  Shirts
                </p>
              </div>
              <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">
                20
              </p>
            </div>
            <div className="flex justify-between items-center mt-10">
              <div className="flex gap-5 items-center">
                <img className="lg:w-[56px]" src={ja} alt="" />
                <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">
                  Jacket
                </p>
              </div>
              <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">
                20
              </p>
            </div>
            <div className="flex justify-between items-center mt-10">
              <div className="flex gap-5 items-center">
                <img className="lg:w-[56px]" src={jea} alt="" />
                <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">
                  Jeans
                </p>
              </div>
              <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">
                20
              </p>
            </div>
            <div className="flex justify-between items-center mt-10">
              <div className="flex gap-5 items-center">
                <img className="lg:w-[56px]" src={jer} alt="" />
                <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">
                  Jersey
                </p>
              </div>
              <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">
                20
              </p>
            </div>
            <div className="flex justify-between items-center mt-10">
              <div className="flex gap-5 items-center">
                <img className="lg:w-[56px]" src={sw} alt="" />
                <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">
                  Sweatshirt
                </p>
              </div>
              <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">
                20
              </p>
            </div>
            <div className="flex justify-between items-center mt-10">
              <div className="flex gap-5 items-center">
                <img className="lg:w-[56px]" src={ca} alt="" />
                <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">
                  cap
                </p>
              </div>
              <p className="font-poopins font-medium text-[16px] leading-[26px] lg:font-nexa-bold lg:text-[32px] lg:leading-[42px]">
                20
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="px-4 md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[120px] pt-[56px]">
          <div className="flex h-16 p-2 gap-8 w-full rounded-full shadow-custom mb-[32px]">
            <div className="flex items-center w-[50%] gap-3 pl-2 font-nexa-light text-[14px] leading-[22px]">
              <img src={filter} onClick={()=>mobile("Filter")} alt="" />
              filter
            </div>
            <div className="flex items-center w-[50%] gap-3 pl-2 font-nexa-light text-[14px] leading-[22px]">
              <img src={sort} onClick={()=>mobile("Sort")} alt="" />
              sort
            </div>
          </div>
          <div className="flex gap-4">
            <div className="p-4 hidden lg:block bg-white rounded-lg shadow-lg w-80">
              {/* Header */}
              <div className="flex justify-between gap-2 items-center mb-4">
                <button onClick={()=>{SetFilterSort(true)}} className={`w-[50%] font-nexa-bold text-[16px] leading-[26px] rounded-full h-[72px] ${filterSort ? "border-2 border-black": ""}`}>
                  Filter
                </button>
                <button onClick={()=>{SetFilterSort(false)}} className={`w-[50%] font-nexa-bold text-[16px] leading-[26px] rounded-full h-[72px] ${filterSort ? "": "border-2 border-black"}`}>Sort</button>
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

              <div className="mb-4">
                <h3 className="font-bold mb-2">Price</h3>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="From"
                    value={priceRange.from}
                    onChange={(e) =>
                      setPriceRange({ ...priceRange, from: e.target.value })
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

              {/* Material Section */}
              <div className="mb-4">
                <h3 className="font-bold mb-2">Material</h3>
                <div className="grid grid-cols-2 gap-2">
                  {["Cotton", "Polyester", "Blend", "Print-On"].map(
                    (material) => (
                      <label key={material} className="flex items-center">
                        <input
                          type="checkbox"
                          value={material}
                          checked={selectedMaterial.includes(material)}
                          onChange={() => handleMaterialChange(material)}
                          className="mr-2"
                        />
                        {material}
                      </label>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="grid h-auto grid-cols-2 lg:flex lg:grid-cols-3 lg:grid-rows-4 gap-4">
              {filteredProducts.map((product) => (
                <div
                  key={product._id}
                  className=""
                  
                >
                  <div
                    className={`border-8 bg-white border-white hover:border-[#E6E6E6] rounded-t-full max-w-[312px] md:min-w-[312px] ${
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
                      <div className="lg:w-[72px] w-[48px] h-[48px] lg:h-[72px] rounded-full flex items-center justify-center absolute bg-white lg:top-[-60px] top-[-35px] md:top-[-70px]   right-[16px] ">
                        <img className=" bg-white" src={Heart} alt="" />
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
        </div>
      )}
      {/* <Feature /> */}
      {/* <QuoteCalc checkboxes1={checkboxes1} handleCheckboxChange={handleCheckboxChange}  checkboxData1={checkboxData1}/> */}
      <FAQ />
      <Testimonials />
      <Touch />
    </div>
  );
}
