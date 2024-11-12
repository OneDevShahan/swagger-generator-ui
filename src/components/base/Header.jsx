import React from "react";
import { FaSun } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { SiSwagger } from "react-icons/si";
import { Link } from "react-router-dom";

const Header = ({ toggleDarkMode, isDarkMode }) => (
  <header className="bg-gray-800 p-4 shadow">
    <nav className="container mx-auto flex justify-between items-center">
      <div className="flex items-center justify-evenly space-x-3 mx-3 gradient-heading">
        <Link to="/" replace>
          {isDarkMode ? (
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500"
              style={{ fontSize: "3rem" }}
            >
              <SiSwagger size={"3rem"} className="text-green-600" />
            </span>
          ) : (
            <SiSwagger size={"3rem"} className="text-green-600 " />
          )}
        </Link>
        <Link to="/" replace className="text-2xl font-bold">
          Swag Generator
        </Link>
      </div>
      <div className="flex justify-center items-center space-x-4">
        <Link to="/about" className="text-xl font-medium gradient-heading">
          About
        </Link>
        <Link
          to="/coming-soon"
          className="text-xl font-medium gradient-heading"
        >
          Coming Soon...
        </Link>
        <div>
          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="p-2 text-gray-800 dark:text-gray-200"
            title={`${isDarkMode ? "Light Mode" : "Dark Mode"} `}
          >
            {isDarkMode ? (
              <IoSunnyOutline
                size={20}
                color="white"
                className="hover:scale-125"
              />
            ) : (
              <FaSun size={20} color="black" className="hover:scale-125"/>
            )}
          </button>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;