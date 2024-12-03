import React, { useState, useEffect } from 'react';

const StackedCarousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoPlay = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(autoPlay);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <div className="absolute inset-0 flex h-full">
        {images.map((image, index) => {
          const isCurrent = index === currentIndex;
          const isPrevious = index === (currentIndex - 1 + images.length) % images.length;

          return (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 ease-in-out ${
                isCurrent
                  ? 'z-20 transform translate-x-0 opacity-100'
                  : isPrevious
                  ? 'z-10 transform -translate-x-[calc(100%-10px)] opacity-75'
                  : 'transform translate-x-full opacity-0'
              }`}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default StackedCarousel;