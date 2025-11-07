import React, { useState } from "react";
import { Mail, Phone, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Logo from "@/assets/img/logo.png";

const Header = () => {
  const location = useLocation();
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  const mainNavLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    {
      name: "Services",
      hasDropdown: true,
      dropdownContent: [
        { name: "AI Advantage", path: "/services#ai" },
        { name: "Industries We Serve", path: "/services#industry" },
      ],
    },
    { name: "Career", path: "/career" },
    { name: "Blog", path: "/" },
    { name: "Contact", path: "/contact" },
  ];

  const dropdownContentVariants = {
    hidden: { height: 0, opacity: 0, overflow: "hidden" },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: { type: "tween", duration: 0.2, ease: "easeIn" },
    },
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="relative sm:overflow-hidden top-0 left-0 w-auto z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-[#028789] text-white text-sm transition-all duration-300">
        {/* Optional content */}
      </div>

      {/* Main Navbar */}
      <nav className="py-3">
        <div className="px-4 md:px-8 lg:px-16 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link to="/">
              <img
                src={Logo}
                alt="Logo"
                className="h-auto w-48 sm:w-56 md:w-40 lg:w-48"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 items-center">
            {mainNavLinks.map((item) => (
              <div key={item.name} className="relative group">
                {item.action === "modal" ? (
                  <button className="bg-[#f0b104] text-white font-semibold px-3 py-1 rounded-md hover:bg-[#fdbd0de0] transition-colors duration-200">
                    {item.name}
                  </button>
                ) : !item.hasDropdown ? (
                  <Link
                    to={item.path}
                    className={`font-semibold transition-colors duration-200 ${
                      isActive(item.path)
                        ? "text-[#f0b104]"
                        : "text-gray-700 hover:text-[#f0b104]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <>
                    <button className="flex items-center text-gray-700 font-semibold group-hover:text-[#f0b104]">
                      {item.name}
                      <ChevronDown
                        className="ml-1 transition-transform group-hover:rotate-180"
                        size={16}
                      />
                    </button>
                    {/* Dropdown with high z-index */}
                    <div className="absolute left-0 top-full mt-2 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 w-64">
                      <div className="p-4 space-y-2">
                        {item.dropdownContent.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="block px-1 py-2 rounded hover:bg-[#ccab5031] text-sm text-gray-800"
                          >
                            <div className="font-medium">{sub.name}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <button onClick={() => setIsOffcanvasOpen(true)}>
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Offcanvas */}
      <AnimatePresence>
        {isOffcanvasOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOffcanvasOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-64 bg-white z-50 p-6 shadow-lg lg:hidden"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-bold">Menu</span>
                <X
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => setIsOffcanvasOpen(false)}
                />
              </div>
              <nav className="flex flex-col space-y-4">
                {mainNavLinks.map((item) => (
                  <div key={item.name}>
                    {item.action === "modal" ? (
                      <button
                        onClick={() => setIsOffcanvasOpen(false)}
                        className="bg-[#028789] text-white w-full font-semibold px-3 py-2 rounded-md hover:bg-[#026b6c] transition-colors duration-200"
                      >
                        {item.name}
                      </button>
                    ) : item.hasDropdown ? (
                      <>
                        <button
                          onClick={() =>
                            setOpenMobileDropdown(
                              openMobileDropdown === item.name
                                ? null
                                : item.name
                            )
                          }
                          className="flex justify-between items-center w-full text-gray-700 font-semibold"
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            size={16}
                            className={`transition-transform ${
                              openMobileDropdown === item.name
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {openMobileDropdown === item.name && (
                            <motion.div
                              className="ml-4 mt-1 space-y-1"
                              variants={dropdownContentVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                            >
                              {item.dropdownContent.map((sub) => (
                                <Link
                                  key={sub.name}
                                  to={sub.path}
                                  className="block text-sm text-gray-600 hover:text-[#00bfa5]"
                                  onClick={() => setIsOffcanvasOpen(false)}
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        className={`text-gray-700 font-semibold ${
                          isActive(item.path)
                            ? "text-[#f0b104]"
                            : "hover:text-[#f0b1047c]"
                        }`}
                        onClick={() => setIsOffcanvasOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
