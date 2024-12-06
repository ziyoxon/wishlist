import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { LINKS } from "../../static";
import logo from "../../assets/logo.svg";
import cart from "../../assets/Cart.svg";
import vector from "../../assets/Vector.svg";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header
      id="header"
      className="w-full bg-white shadow-md border-b-2 border-gray-100"
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-16">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Candleaf Logo" className="h-8" />
        </div>

        <nav className="hidden md:flex space-x-6">
          {LINKS?.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              className={`text-gray-700 hover:text-green-500 text-lg ${
                pathname === link.path ? "font-bold text-green-500" : ""
              }`}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <NavLink to="/profile" className="text-gray-700 hover:text-green-500">
            <img src={vector} alt="Profile" className="h-6 w-6" />
          </NavLink>
          <NavLink to="/wishes" className="text-gray-700 hover:text-green-500">
            <img src={cart} alt="Cart" className="h-6 w-6" />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
