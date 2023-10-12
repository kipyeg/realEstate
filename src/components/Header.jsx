import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function Header() {
  return (
    <header className=" bg-slate-700 shadow-md ">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"/"}>
          <h1 className="text-3xl font-bold mx-2 flex flex-wrap">
            <span className="text-yellow-300">Ptah</span>
            <span className="text-orange-400">Clyde</span>
          </h1>
        </Link>
        <form className=" bg-slate-100 p-1 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search....."
            className="bg-transparent focus:outline-none"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className=" flex gap-4">
          <Link to={"/"}>
            <li className=" hidden sm:inline text-gray-400 hover:underline">
              Home
            </li>
          </Link>
          <Link to={"/register"}>
            <li className=" hidden sm:inline text-gray-400 hover:underline">
              Register
            </li>
          </Link>
          <Link to={"/login"}>
            <li className=" hidden sm:inline text-gray-400 hover:underline">
              Login
            </li>
          </Link>
          <Link to={"/profile"}>
            <li className=" hidden sm:inline text-gray-400 hover:underline">
              Profile
            </li>
          </Link>
          <Link to={"/about"}>
            <li className=" hidden sm:inline text-gray-400 hover:underline">
              About
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
