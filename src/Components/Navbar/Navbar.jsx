import React from "react";
import logo from "../../assets/logo.png";
import search from "../../assets/search_icon.svg";
import profile from "../../assets/profile_img.png";
import bell from "../../assets/bell_icon.svg";
import caret from "../../assets/caret_icon.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-between  gap-8 fixed w-full z-10 py-6 px-8 md:px-12 lg:px-14 xl:px-32 backdrop-blur-md ">
      {/* left side part */}
      <div className="flex justify-center items-center gap-8">
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

        <div className="flex justify-center items-center gap-4">
          <img src={profile} alt="profile_icon"></img>
          <img src={caret} alt="caret_icon"></img>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
