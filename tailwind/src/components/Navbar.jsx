/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItem = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <header
      className={`w-full ${
        isSticky ? "sticky-class" : ""
      } bg-white md:bg-transparent fixed top-0 left-0 right-0`}
    >
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b by-white duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text--base gap-8">
          <a
            href=""
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img src={logo} alt="" className="w-40 inline-block item-center" />
            <span className="text-[#263238]"></span>
          </a>

          <ul className="md:flex space-x-12 hidden">
            {navItem.map(({ link, path }) => (
              <Link
                to={path}
                spy="true" // Pass as a string
                smooth="true" // Pass as a string
                key={path}
                offset={-100}
                className="block text-base text-gray900 hover:brandPrimary first:font-medium"
              >
                {link}
              </Link>
            ))}
          </ul>

          <div className="space-x-12 hidden lg:flex items-center">
            <a
              href="/"
              className="hidden lg:flex item-center text-brandPrimary hover:text-gray900"
            >
              Login
            </a>
            <button className="bg-brandPrimary text-white py-2 transition-all duration-300 rounded hover:bg-neutralDGrey">
              Sign up
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-neutralDGrey focus:outline-none focus:text-gray-500">
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 text-neutralDGrey" />
              ) : (
                <FaBars className="h-6 w-6 text-neutralDGrey" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`space-y-4 text-center mt-36 bg-brandPrimary ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItem.map(({ link, path }) => (
            <Link
              to={path}
              spy="true" // Pass as a string
              smooth="true" // Pass as a string
              key={path}
              offset={-100}
              className="block text-base text-gray900 hover:brandPrimary first:font-medium"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
