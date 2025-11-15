import React, { useState } from "react";
import { ChevronDown, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import BrochurePDF from "@/assets/brands/ct.pdf";
import Logo from "@/assets/img/logo.png";

const BrochureModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Prevent scroll when modal is open
  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Invalid email";
    if (!purpose.trim()) newErrors.purpose = "Purpose is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const form = new FormData();
      form.append("name", name);
      form.append("email", email);
      form.append("purpose", purpose);

      // Submit to Google Sheets for Excel storage
      await fetch(
        "https://script.google.com/macros/s/AKfycbzvjtdmWY4p8qhftceu2NtrsnaN2BZK9SjMwUC9jTs_Zs9txVfqn2qcFtK7cV6YksTSvw/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: form,
        }
      );

      // Submit to backend for email using VITE_BASE_URL
      const emailResponse = await fetch(`${import.meta.env.VITE_BASE_URL}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, purpose }),
      });

      if (!emailResponse.ok) {
        throw new Error("Email submission failed");
      }

      toast.success("Form submitted! Brochure downloading...");
      const link = document.createElement("a");
      link.href = BrochurePDF;
      link.download = "coretalents_companyprofile_Brochure.pdf";
      link.click();
    } catch (err) {
      toast.error("Something went wrong. Try again later.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
      onClose();
      setName("");
      setEmail("");
      setPurpose("");
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-md bg-white rounded-xl shadow-2xl p-6 sm:p-8"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            onClick={onClose}
            disabled={isSubmitting}
          >
            <X className="w-5 h-5" />
          </button>

          <h2 className="mb-5 text-2xl font-bold text-gray-900">
            Download Brochure
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f0b104] ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                disabled={isSubmitting}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-600">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f0b104] ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Purpose */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Purpose for downloading
              </label>
              <textarea
                rows={3}
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f0b104] ${
                  errors.purpose ? "border-red-500" : "border-gray-300"
                }`}
                disabled={isSubmitting}
              />
              {errors.purpose && (
                <p className="mt-1 text-xs text-red-600">{errors.purpose}</p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-white bg-[#f0b104] rounded-md hover:bg-[#d89a03] transition disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : <><Download className="w-5 h-5" /> Download</>}
              </button>
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition disabled:opacity-70"
              >
                Cancel
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Header = () => {
  const location = useLocation();
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

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
    { name: "Brochure", onClick: () => setModalOpen(true) },
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
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
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
                  {!item.hasDropdown && !item.onClick ? (
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
                  ) : item.onClick ? (
                    <button
                      onClick={item.onClick}
                      className="font-semibold transition-colors duration-200 text-gray-700 hover:text-[#f0b104]"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <>
                      <button className="flex items-center text-gray-700 font-semibold group-hover:text-[#f0b104] transition-colors">
                        {item.name}
                        <ChevronDown
                          className="ml-1 transition-transform group-hover:rotate-180"
                          size={16}
                        />
                      </button>
                      {/* Dropdown - FIXED */}
                      <div className="absolute left-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[60] pointer-events-none group-hover:pointer-events-auto translate-z-0">
                        <div className="p-4 space-y-1">
                          {item.dropdownContent.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              className="block px-3 py-2.5 rounded-md hover:bg-yellow-50 text-sm font-medium text-gray-800 transition-colors"
                            >
                              {sub.name}
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
                className="fixed inset-y-0 right-0 w-64 bg-white z-[70] p-6 shadow-lg lg:hidden"
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
                      {item.hasDropdown ? (
                        <>
                          <button
                            onClick={() =>
                              setOpenMobileDropdown(
                                openMobileDropdown === item.name ? null : item.name
                              )
                            }
                            className="flex justify-between items-center w-full text-gray-700 font-semibold"
                          >
                            <span>{item.name}</span>
                            <ChevronDown
                              size={16}
                              className={`transition-transform ${
                                openMobileDropdown === item.name ? "rotate-180" : ""
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
                      ) : item.onClick ? (
                        <button
                          onClick={() => {
                            item.onClick();
                            setIsOffcanvasOpen(false);
                          }}
                          className="text-gray-700 font-semibold hover:text-[#f0b104]"
                        >
                          {item.name}
                        </button>
                      ) : (
                        <Link
                          to={item.path}
                          className={`text-gray-700 font-semibold ${
                            isActive(item.path) ? "text-[#f0b104]" : "hover:text-[#f0b1047c]"
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

      <BrochureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Header;