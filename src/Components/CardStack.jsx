import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";


import DStory1 from "../assets/Images/DStory/Story 1.svg";
import DStory2 from "../assets/Images/DStory/Story 2.svg";
import DStory3 from "../assets/Images/DStory/Story 3.svg";
import DStory4 from "../assets/Images/DStory/Story 4.svg";
import DStory5 from "../assets/Images/DStory/Story 5.svg";
import MStory1 from "../assets/Images/MStory/Story 1.svg";
import MStory2 from "../assets/Images/MStory/Story 2.svg";
import MStory3 from "../assets/Images/MStory/Story 3.svg";
import MStory4 from "../assets/Images/MStory/Story 4.svg";
import MStory5 from "../assets/Images/MStory/Story 5.svg";

const positions = [
  { left: "80px", top: "0px", zIndex: 50 },
  { left: "60px", top: "0px", zIndex: 40 },
  { left: "40px", top: "0px", zIndex: 30 },
  { left: "20px", top: "0px", zIndex: 20 },
  { left: "0px", top: "0px", zIndex: 10 },
];

const images = {
  1: DStory1,
  2: DStory2,
  3: DStory3,
  4: DStory4,
  5: DStory5,
};
const Mimages = {
  1: MStory1,
  2: MStory2,
  3: MStory3,
  4: MStory4,
  5: MStory5,
};

const CardStack = () => {
  const [cardOrder, setCardOrder] = useState([1, 2, 3, 4, 5]);
  const cardOrderRef = useRef([1, 2, 3, 4, 5]);

  const [isAnimating, setIsAnimating] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const autoPlayRef = useRef(false);
  const desktopCardsRef = useRef({});
  const mobileCardsRef = useRef({});

  const intervalRef = useRef(null);

  useEffect(() => {
  updateCardStyles(cardOrderRef.current, desktopCardsRef);
  updateCardStyles(cardOrderRef.current, mobileCardsRef);
}, []);


  useEffect(() => {
    return () => clearTimeout(intervalRef.current);
  }, []);

  const updateCardStyles = (order, cardsRefSet) => {
    order.forEach((cardNum, index) => {
      const card = cardsRefSet.current[cardNum];
      if (card) {
        card.style.left = positions[index].left;
        card.style.top = positions[index].top;
        card.style.zIndex = positions[index].zIndex;
        card.style.opacity = "1";
        card.style.transform = "translateX(0) rotate(0deg)";
        card.style.pointerEvents = "auto";
      }
    });
  };

  const animateCards = async () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const topCardNum = cardOrderRef.current[0];

    // Get top card in both desktop and mobile refs
    const topDesktopCard = desktopCardsRef.current[topCardNum];
    const topMobileCard = mobileCardsRef.current[topCardNum];

    [topDesktopCard, topMobileCard].forEach((card) => {
      if (card) {
        card.style.opacity = "0";
        card.style.transform = "translateX(-150px) rotate(-10deg)";
        card.style.zIndex = "0";
        card.style.pointerEvents = "none";
      }
    });

    const newOrder = [...cardOrderRef.current.slice(1), topCardNum];

    setTimeout(() => {
      updateCardStyles(newOrder, desktopCardsRef);
      updateCardStyles(newOrder, mobileCardsRef);
      cardOrderRef.current = newOrder;
      setCardOrder(newOrder);
      setIsAnimating(false);
    }, 650);
  };

  const toggleAuto = () => {
    setAutoPlay((prevAutoPlay) => {
      const newAutoPlay = !prevAutoPlay;
      autoPlayRef.current = newAutoPlay;

      if (newAutoPlay) {
        const loop = async () => {
          if (!autoPlayRef.current) return;
          if (!isAnimating) {
            await animateCards();
          }
          intervalRef.current = setTimeout(loop, 4000); // slower animation loop
        };
        loop();
      } else {
        clearTimeout(intervalRef.current);
      }

      return newAutoPlay;
    });
  };

  // Start autoplay on initial mount
  useEffect(() => {
    toggleAuto();
  }, []);

  return (
    <div className="flex items-center justify-center p-10">
      <div className="relative hidden left-[-50px] lg:block w-[100%] h-[280px]">
        {[1, 2, 3, 4, 5].map((num) => (
          <img
            key={num}
            ref={(el) => (desktopCardsRef.current[num] = el)}
            src={images[num]}
            alt={`Card ${num}`}
            onClick={animateCards}
            className="absolute w-[100%] object-cover rounded-[74px]  cursor-pointer transition-all duration-700 ease-in-out"
          />
        ))}
      </div>
      <div className="relative lg:hidden w-[488px] xxs:h-[300px] xs:h-[400px] left-[-45px] sm:h-  md:w-[688px] md:h-[600px] ">
        {[1, 2, 3, 4, 5].map((num) => (
          <img
            key={num}
            ref={(el) => (mobileCardsRef.current[num] = el)}
            src={Mimages[num]}
            alt={`Card ${num}`}
            onClick={animateCards}
            className="absolute  object-cover w-[100%] cursor-pointer transition-all duration-700 ease-in-out"
          />
        ))}
      </div>
    </div>
  );
};

export default CardStack;
