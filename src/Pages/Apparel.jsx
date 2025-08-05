import { useState, useEffect, useContext, useMemo } from "react";
import { ToastContainer } from "react-toastify";
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
import nine from "../assets/Images/Apparel-img/9.png";
import ten from "../assets/Images/Apparel-img/10.png";
import MOQ from "../Components/MOQ.jsx";
import Store from "../Components/Store.jsx";
import { AuthContext } from "../context/authContext.jsx";
import { motion, AnimatePresence } from "framer-motion";
import up from "../assets/Images/up.svg";
import down from "../assets/Images/down.svg";
import  Scroll  from "../Components/smoothScrool.jsx";

import Loader from "../Components/Loader";
import Play from "./Play Ground.jsx";

export default function Apparel() {
  const [loading] = useState(false);

  const { products } = useContext(AuthContext);
  const [filterCategory, setFilterCategory] = useState(() => {
    // Retrieve the initial value from sessionStorage or default to false
    return JSON.parse(sessionStorage.getItem("filterCategory")) || "";
  });
  console.log(products);

  // State to keep track of the active button (initially null or a specific index)
  const [activeIndex, setActiveIndex] = useState(() => {
    // Retrieve the initial value from sessionStorage or default to false
    return JSON.parse(sessionStorage.getItem("activeIndex")) || null;
  });

  /* const [filteredProducts, setFilteredProducts] = useState([]); */
  console.log(activeIndex);
  const filteredProducts = useMemo(() => {
    if (!products || products.length === 0 || filterCategory === "") return [];
    return products.filter((product) => product.category === filterCategory);
  }, [products, filterCategory]);

  /* console.log(filteredProducts);
  console.log(typeof filterCategory);
  console.log(products); */

  const {
    smoothScrollTo,
  } = Scroll();

  // const smoothScrollBy = (targetY, duration = 200) => {
  //   const startY = window.scrollY;
  //   const startTime = performance.now();

  //   const animate = (currentTime) => {
  //     const elapsed = currentTime - startTime;
  //     const progress = Math.min(elapsed / duration, 1);
  //     const ease =
  //       progress < 0.5
  //         ? 2 * progress * progress
  //         : -1 + (4 - 2 * progress) * progress; // easeInOutQuad

  //     window.scrollTo(0, startY + targetY * ease);

  //     if (elapsed < duration) {
  //       requestAnimationFrame(animate);
  //     }
  //   };

  //   requestAnimationFrame(animate);
  // };

  // Function to handle button click
  const handleClick = (name, index) => {
    smoothScrollTo(950, 2000);
    setActiveIndex(index);
    sessionStorage.setItem("activeIndex", JSON.stringify(index));

    setFilterCategory(name);
    sessionStorage.setItem("filterCategory", JSON.stringify(name));
  };

  const itemss = [
    "Hoodie",
    "T-Shirts",
    "Shirts",
    "Trouser",
    "Joggers",
    "Cap",
    "Jersey",
    "Female-Wears",
    "Tank-tops",
  ];

  const items = [
    {
      name: "Hoodie",
      img: one,
      img1: one,
      style: " col-start-1 col-end-3 ",
    },
    {
      name: "T-Shirts",
      img: seven,
      img1: seven,
      style: " col-start-3 col-end-5 ",
    },
    /* {
      name: "Tops",
      img: three,
      img1: three,
      style: "  col-start-5 col-end-8 lg:col-start-7 lg:lg:col-end-9",
    }, */
    {
      name: "Shirts",
      img: two,
      img1: two,
      style: "  col-start-5 col-end-7 ",
    },
    {
      name: "Trouser",
      img: six,
      img1: six,
      style: "  col-start-7 col-end-9 ",
    },
    {
      name: "Shorts",
      img: ten,
      img1: six,
      style: "  col-start-2 col-end-4 ",
    },
    {
      name: "Joggers",
      img: five,
      style: "  col-start-4 col-end-6 ",
    },
    {
      name: "Cap",
      img: three,
      style: "col-start-6 col-end-8 ",
    },
    {
      name: "Jersey",
      img: four,
      img1: four,
      style: "  col-start-3 col-end-5 ",
    },
    {
      name: "Female-Wears",
      img: eight,
      img1: eight,
      style: "  col-start-5 col-end-7 ",
    },
    {
      name: "Tank-tops",
      img: nine,
      img1: nine,
      style: "  col-start-4 col-end-6 ",
    },
  ];

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

  /* const img = [one, two, three, four, five, six, seven, eight]; */

  const [priceRange, setPriceRange] = useState({ from: "", to: "" });

  const handleCategoryChange = (category) => {
    setFilterCategory(category);
    sessionStorage.setItem("category", JSON.stringify(category));
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

  console.log(filteredProducts);

  return (
    <div className="mt-[96px]">
      <ToastContainer
        position="top-center"
        autoClose={3000} // Automatically closes after 3 seconds
        pauseOnHover
        draggable
        theme="light"
      />
      {loading ? <Loader /> : ""}
      {mFilterSort ? (
        <div className="fixed inset-0 bg-black bg-opacity-40  justify-center items-center z-50 overflow-scroll">
          <div className="p-4 lg:hidden block mt-8 bg-white rounded-lg  w-full">
            {/* Header */}
            <div className="flex justify-between gap-2 items-center lg:hidden mb-4">
              {
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
              }
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
              {
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
              }
            </div>
            <div className="h-[1px] bg-[#DDDDDD] mx-4 my-4"></div>
            {/* Price Section */}
            <div
              className={` transform ease-out flex items-center  duration-[400ms] rounded-2xl ${
                accordionOpen2 &&
                "flex items-center duration-[400ms] lg:h-[auto] h-[auto] "
              }`}
            >
              <div className={` ${accordionOpen2 && " "} group`}>
                <button
                  onClick={toggleAccordion2}
                  className="flex h-[74px] items-center  gap-5 w-full "
                >
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
          <div className="flex gap-[4px] mt-4 flex-wrap justify-center">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => handleClick(item.name, index)}
                className={`px-6 py-2 whitespace-nowrap hover:border-2 hover:border-[#E6E6E6] rounded-full font-bold text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px] transition-all duration-200 ${
                  item.name === filterCategory
                    ? "border-2 border-black focus:border-black"
                    : "border-2 border-transparent"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* <div className="px-4 md:px-[40px] flex justify-center lg:px-[60px] xl:px-[80px] 2xl:px-[120px]   py-8">
          <div className="max-w-[722px] relative">
            <AnimatePresence mode="wait">
              {activeIndex === -1 ? (
                // Grid view
                <motion.div
                  key="grid"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="px-4 py-2 grid grid-cols-5 grid-rows-2 gap-x-2 gap-y-2"
                >
                  {items.map((item, index) => (
                    <motion.div
                      key={index}
                      
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        onClick={() => handleClick(item.name, index)}
                        className="w-full h-full object-cover block rounded-full cursor-pointer"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                // Single image view
                <motion.div
                  key={`single-${activeIndex}`}
                  initial={{ opacity: 0, scale: 0.3 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.3 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={`h-[150px] w-[150px] lg:w-[622px]  lg:h-[350px] xl:h-[350px] rounded-full overflow-hidden mx-auto ${items[activeIndex].style}`}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={`${activeIndex}-${items[activeIndex].name}`}
                      src={ items[activeIndex].img}
                      alt={items[activeIndex].name}
                      className={`w-full h-full object-cover ${activeIndex == 5 ? "object-[center_top_10%]" : "object-top" } `}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.1 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div> */}
        <Play
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
        />
      </div>
      {/* <CustomCheckbox checkboxes={checkboxes} handleCheckboxChange={handleCheckboxChange}  checkboxData={checkboxData}/> */}
      {/* {filterCategory === "" ? "" : } */}

      {filterCategory === "" ? (
        <MOQ />
      ) : (
        <Store
          handleClick={handleClick}
          filteredProducts={filteredProducts}
          filterCategory={filterCategory}
          mFilterSort={mFilterSort}
          SetMFilterSort={SetMFilterSort}
        />
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
