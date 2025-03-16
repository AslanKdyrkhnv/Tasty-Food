import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="container lg:px-2 px-10 py-2 lg:py-0 lg:w-3/4 w-full mx-auto flex flex-col lg:flex-row justify-between h-24 items-center font-bold">
      <NavLink to={"/"}>
        <p className="text-xl lg:text-2xl">😋Yummy Food's</p>
      </NavLink>
      <div className="lg:block">
        <ul className="flex gap-x-20 lg:text-xl lg:gap-x-32">
          <li>
            <NavLink to={"/"} className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/foods"} className="nav-link">
              Foods
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"} className="nav-link">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
