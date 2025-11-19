import React from "react";
import logo from "../../assets/logo.png";
import search from "../../assets/search_icon.svg";
import profile from "../../assets/profile_img.png";
import bell from "../../assets/bell_icon.svg";
import caret from "../../assets/caret_icon.svg";

const Navbar = () => {
  return (
    <nav className="flex navbarStyle justify-between  gap-8 fixed w-full z-10 py-6 px-8 md:px-12 lg:px-14 xl:px-32  ">
      {/* left side part */}
      <div className="flex justify-center items-center gap-12">
        <img alt="logo" src={logo} className="w-32"></img>

        {/* list */}

        <ul className="flex justify-center items-center gap-4">
          <li className="nav-link">Home</li>
          <li className="nav-link">TV Shows</li>
          <li className="nav-link">Movies</li>
          <li className="nav-link">New & Popular</li>
          <li className="nav-link">My List</li>
          <li className="nav-link">Browse by Languages</li>
        </ul>
      </div>

      {/* right side part */}
      <div className="flex items-center justify-center gap-4">
        <img src={search} alt="search_icon"></img>
        <p>Children</p>

        <img src={bell} alt="bell_icon"></img>

        <div className="flex justify-center items-center gap-4 relative group ">
          <img src={profile} alt="profile_icon" className="rounded-xs"></img>
          <img src={caret} alt="caret_icon"></img>
          <div className="absolute w-max right-0 z-10 py-2 px-4 top-8 rounded-xs  bg-[#191919] hidden group-hover:block shadow-lg">
            <p className="cursor-pointer hover:text-gray-300 ">Sign Out</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
