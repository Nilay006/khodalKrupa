import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

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
          className={`flex gap-5 text-white items-center ${
            isMenuOpen
              ? "block absolute right-0 !items-end w-2/4 top-16 flex-col pr-5 !gap-1"
              : "hidden"
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
          {isMenuOpen ? (
            <CgClose className="text-white text-2xl" />
          ) : (
            <HiOutlineMenuAlt3 className="text-white text-2xl" />
          )}
        </button>
      </div>
    </header>
  );
}
