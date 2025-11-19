import React from "react";
import hero_tittle from "../../src/assets/hero_title.png";
import hero_banner from "../../src/assets/hero_banner.jpg";
import play_icon from "../assets/play_icon.png";
import info_icon from "../assets/info_icon.png";

const Hero = () => {
  return (
    <div className="relative w-full h-screen ">
      {/* Background Image */}
      <img
        src={hero_banner}
        alt="backgroundImage"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Overlay  slight dark overlay */}
      <div className="absolute inset-0 bg-black/50 -z-10"></div>

      {/* Content */}
      <div className="h-full flex flex-col justify-center gap-6 px-8 md:px-12 lg:px-20 xl:px-32">
        <img
          src={hero_tittle}
          alt="titleImage"
          className="max-w-xs sm:max-w-sm md:max-w-md"
        />

        <p className="max-w-xl text-lg leading-relaxed">
          Discovering his ties to a secret ancient order, a young man living in
          modern Istanbul embarks on a quest to save the city from an immortal
          enemy.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-2">
          <button className="flex items-center gap-3 bg-white text-black font-semibold px-6 py-2 cursor-pointer rounded-md hover:bg-gray-200 transition">
            <img src={play_icon} alt="play icon" className="w-6" />
            Play
          </button>

          <button className="flex items-center gap-3 bg-gray-500/80 text-white px-6 py-2 cursor-pointer rounded-md hover:bg-gray-500 transition">
            <img src={info_icon} alt="info icon" className="w-6" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
