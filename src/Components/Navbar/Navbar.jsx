import React from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="flex  items-center gap-8">
      <img alt="logo" src={logo}></img>

      {/* list */}

      <ul className="flex justify-center items-center gap-4">
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Browse by Languages</li>
      </ul>
    </nav>
  );
};

export default Navbar;
