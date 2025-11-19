import React from "react";
import cards_data from "../assets/cards/Cards_data.js";

const TitleCards = () => {
  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold">Popular on Netflix</h2>

      <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar scroll-smooth">
        {cards_data.map((item, id) => (
          <div key={id} className="min-w-[150px] relative flex-shrink-0">
            {/* Card Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover rounded-md"
            />

            {/* Name Always Visible */}
            <p
              className="
              absolute bottom-2 right-2 
              text-white text-sm font-medium 
              drop-shadow-md
            "
            >
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
