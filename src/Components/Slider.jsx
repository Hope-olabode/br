import { useState, useEffect } from "react";
import MStory1 from "../assets/Images/MStory/Story 1.svg";
import MStory2 from "../assets/Images/MStory/Story 2.svg";
import MStory3 from "../assets/Images/MStory/Story 3.svg";
import MStory4 from "../assets/Images/MStory/Story 4.svg";
import MStory5 from "../assets/Images/MStory/Story 5.svg";
import DStory1 from "../assets/Images/DStory/Story 1.svg";
import DStory2 from "../assets/Images/DStory/Story 2.svg";
import DStory3 from "../assets/Images/DStory/Story 3.svg";
import DStory4 from "../assets/Images/DStory/Story 4.svg";
import DStory5 from "../assets/Images/DStory/Story 5.svg";

const StackedCarousel = () => {
  // Sample images - replace with your actual image URLs
  const Mimages = [MStory1, MStory2, MStory3, MStory4, MStory5];
  const Dimages = [DStory1, DStory2, DStory3, DStory4, DStory5];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-rotate the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      moveToNext();
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  });

  const moveToNext = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Mimages.length);
      setIsAnimating(false);
    }, 500); // Animation duration
  };

  const MgetCardStyle = (index) => {
    const relativeIndex =
      (index - currentIndex + Mimages.length) % Mimages.length;
    const zIndex = Mimages.length - relativeIndex;
    const rightOffset = relativeIndex * 20; // 20px offset for each card from the right
    const topOffset = 0; // No vertical offset - all cards at same height
    const scale = 1 - relativeIndex * 0.05; // Slight scale reduction

    return {
      position: "absolute",
      right: `${rightOffset}px`,
      top: `${topOffset}px`,
      zIndex: zIndex,
      transform: `scale(${scale})`,
      transition: isAnimating ? "all 0.5s ease-in-out" : "all 0.3s ease-out",
      opacity: relativeIndex === 0 && isAnimating ? 0.7 : 1,
    };
  };

  const DgetCardStyle = (index) => {
    const relativeIndex =
      (index - currentIndex + Mimages.length) % Mimages.length;
    const zIndex = Mimages.length - relativeIndex;
    const rightOffset = relativeIndex * 40; // 20px offset for each card from the right
    const topOffset = 0; // No vertical offset - all cards at same height
    const scale = 1 - relativeIndex * 0.05; // Slight scale reduction

    return {
      position: "absolute",
      right: `${rightOffset}px`,
      top: `${topOffset}px`,
      zIndex: zIndex,
      transform: `scale(${scale})`,
      transition: isAnimating ? "all 0.5s ease-in-out" : "all 0.3s ease-out",
      opacity: relativeIndex === 0 && isAnimating ? 0.7 : 1,
    };
  };

  return (
    <>
      <div className="flex w-full md:hidden lg:flex mt-[80px] pl-[40px] items-center justify-center min-h-[350px] pb-[60px] bg-gradient-to-br ">
        <div className="relative items-center justify-center">
          <div
            className="relative  w-[805px] h-[250px]"
            style={{
              paddingRight: `${(Dimages.length - 1) * 20}px`,
              paddingTop: "0px",
            }}
          >
            {Dimages.map((image, index) => (
              <div
                key={index}
                className="w-full h-[350px] rounded-[90px] shadow-2xl overflow-hidden cursor-pointer hover:shadow-3xl transition-shadow duration-300"
                style={DgetCardStyle(index)}
                onClick={moveToNext}
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="flex lg:hidden mt-4 items-center justify-center min-h-[350px] pb-[60px] bg-gradient-to-br ">
        <div className="relative">
          {/* Container for stacked cards */}
          <div
            className="relative lg:hidden w-[345px] h-60"
            style={{
              paddingRight: `${(Mimages.length - 1) * 20}px`,
              paddingTop: "0px",
            }}
          >
            {Mimages.map((image, index) => (
              <div
                key={index}
                className="w-[295px] h-70 rounded-[40px] shadow-2xl overflow-hidden cursor-pointer hover:shadow-3xl transition-shadow duration-300"
                style={MgetCardStyle(index)}
                onClick={moveToNext}
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StackedCarousel;
