import React, { useState, useEffect } from "react";

const CardStack = () => {
  const initialCards = [0, 1, 2, 3]; // could be IDs or image URLs
  const [cards, setCards] = useState(initialCards);

  useEffect(() => {
    const interval = setInterval(() => {
      // Remove the top card and put it at the end
      setCards((prev) => {
        const updated = [...prev.slice(1), prev[0]];
        return updated;
      });
    }, 3000); // every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[320px] h-[200px] mt-20 mx-auto">
      {cards.map((card, index) => (
        <div
          key={card}
          className={`absolute top-0 h-[160px] w-[240px] rounded-md bg-red-500 text-white text-center text-xl font-bold shadow-lg transition-all duration-700 ease-in-out`}
          style={{
            left: `${index * 80}px`,
            zIndex: 10 - index,
            transform: `translateX(0)`,
          }}
        >
          Card {card + 1}
        </div>
      ))}
    </div>
  );
};

export default CardStack;
