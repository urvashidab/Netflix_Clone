import React from "react";
import logo from "../../assets/logo.png";
import search from "../../assets/search_icon.svg";
import profile from "../../assets/profile_img.png";
import bell from "../../assets/bell_icon.svg";
import caret from "../../assets/caret_icon.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-between  gap-8 fixed w-full z-1 py-6 px-8 md:px-12 lg:px-14 xl:px-32 ">
      {/* left side part */}
      <div className="flex justify-center items-center gap-8">
        <img alt="logo" src={logo} className="w-30"></img>

        {/* list */}

        <ul className="flex justify-center items-center gap-4">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
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
