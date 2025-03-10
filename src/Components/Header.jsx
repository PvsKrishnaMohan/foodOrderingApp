import React, { useEffect, useState, useContext } from "react";
import LOGO_URL from "../Utils/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import userContext from "../Utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [login, setLogin] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userName } = useContext(userContext);
  const userCart = useSelector((store) => store.cart.items);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    // Close menu when window is resized to larger screen
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="relative shadow-lg bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="w-16" src="https://res.cloudinary.com/krishnamohan479/image/upload/v1738647633/3dicons-leaf-front-color_1_yimdme.png" alt="Logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <ul className="flex items-center space-x-4">
              <li className="text-gray-700">
                Online Status:{onlineStatus ? "🟢" : "🔴"}
              </li>
              <li>
                <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-700 hover:text-gray-900">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact Us</Link>
              </li>
              <li>
                <Link to="/grocery" className="text-gray-700 hover:text-gray-900">Grocery</Link>
              </li>
              <li>
                <Link to="/table" className="text-gray-700 hover:text-gray-900">Table</Link>
              </li>
              <li>
                <Link to="/practice" className="text-gray-700 hover:text-gray-900">Practice</Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-700 hover:text-gray-900 font-bold">
                  Cart ({userCart.length})
                </Link>
              </li>
              <li className="text-gray-700">{userName}</li>
              <li>
                <button
                  onClick={() => setLogin(!login)}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  {login ? "Login" : "LogOut"}
                </button>
              </li>
            </ul>
          </div>

          {/* Mobile menu and cart */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Cart icon for mobile */}
            <Link
              to="/cart"
              className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md"
            >
              Cart ({userCart.length})
            </Link>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="px-3 py-2 text-gray-700">
              Online Status:{onlineStatus ? "🟢" : "🔴"}
            </div>
            <Link
              to="/"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              to="/grocery"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Grocery
            </Link>
            <div className="px-3 py-2 text-gray-700">{userName}</div>
            <div className="px-3 py-2">
              <button
                onClick={() => {
                  setLogin(!login);
                  setIsMenuOpen(false);
                }}
                className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                {login ? "Login" : "LogOut"}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
