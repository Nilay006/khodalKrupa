import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ data }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between px-9 py-5 z-50 w-full bg-transparent absolute font-days">
      <div className="text-white font-bold items-center flex">{data.logo}</div>
      <div className="flex space-x-5">
        <ul
          className={`flex space-x-5 text-white items-center ${
            isMenuOpen ? "block" : "hidden"
          } md:flex`}
        >
          <li className="cursor-pointer ">
            <Link to="/">{data.list1}</Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/about">{data.list2}</Link>
          </li>
        </ul>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>
    </header>
  );
}
