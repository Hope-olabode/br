

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import  Scroll  from "../Components/smoothScrool.jsx";

export default function Play({
  activeIndex,
  setActiveIndex,
  filterCategory,
  setFilterCategory,
}) {
  const [pendingIndex, setPendingIndex] = useState(null);

  const items = [
    {
      name: "Hoodie",
      img: one,
    },
    {
      name: "T-Shirts",
      img: seven,
    },
    {
      name: "Shirts",
      img: two,
    },
    {
      name: "Trouser",
      img: six,
    },
    {
      name: "Shorts",
      img: ten,
    },
    {
      name: "Joggers",
      img: five,
    },
    {
      name: "Cap",
      img: three,
    },
    {
      name: "Jersey",
      img: four,
    },
    {
      name: "Female-Wears",
      img: eight,
    },
    {
      name: "Tank-tops",
      img: nine,
    },
  ];

  const {
     smoothScrollTo,
   } = Scroll();
 

  const handleImageClick = (index, name) => {
    smoothScrollTo(950, 2000);
    setActiveIndex(index);
    sessionStorage.setItem("activeIndex", JSON.stringify(index));
   
    setFilterCategory(name);
    sessionStorage.setItem("filterCategory", JSON.stringify(name));
  };

  const handleExited = () => {
    if (pendingIndex !== null) {
      setActiveIndex(pendingIndex);

      const name = items[pendingIndex]?.name || null;
      setFilterCategory(name);

      sessionStorage.setItem("activeIndex", JSON.stringify(pendingIndex));
      sessionStorage.setItem("filterCategory", JSON.stringify(name));

      setPendingIndex(null);
    }
  };

  return (
    <div className="py-10 px-4">
      <div className="relative h-[400px] max-w-[722px] mx-auto flex items-center justify-center">
        <AnimatePresence>
          {activeIndex === null && (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-5 gap-4"
            >
              {items.map((item, idx) => (
                <motion.img
                  key={idx}
                  src={item.img}
                  onClick={() => handleImageClick(idx, item.name)}
                  className=" rounded-full object-cover cursor-pointer"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence onExitComplete={handleExited}>
          {activeIndex !== null && (
            <motion.div
              key={`circle-${activeIndex}`}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{
                scale: 3,
                opacity: 1,
                top: "50%",
                left: "50%",
                translateX: "-50%",
                translateY: "-50%",
              }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              onClick={() => setActiveIndex(null)}
              className="absolute w-[200px] h-[100px] rounded-full overflow-hidden z-10 cursor-pointer"
            >
              <motion.img
                src={items[activeIndex]?.img}
                alt={`Image ${activeIndex + 1}`}
                className={`w-[400px] h-full object-cover ${
                  activeIndex === 6 ? "object-[center_60%]" : "object-top"
                } rounded-full`}
                initial={{ scale: 1 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
