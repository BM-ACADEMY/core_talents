import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Download, X } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import Banner1 from "../assets/brands/hero.jpg";
import Banner2 from "../assets/brands/hero2.jpg";
import Banner3 from "../assets/banners/handshake2.png";
import BrochurePDF from "@/assets/brands/ct.pdf";

/* ==================== SLIDER DATA ==================== */
const heroData = [
  {
    id: 1,
    backgroundImage: Banner1,
    heading: "Hire First. Pay Later.",
    description:
      "Get pre-verified, job-ready professionals delivered within 48 hours — pay only after successful joining.",
    cta: { text: "Get My Free Hiring Proposal", link: "/contact" },
  },
  {
    id: 2,
    backgroundImage: Banner2,
    heading: "48 Hours to Your Next Hire.",
    description:
      "AI matches, human-verified professionals — delivered fast. No cost until they start. Trusted by 25+ Tamil Nadu & Pondicherry businesses.",
    cta: { text: "Start Hiring Now", link: "/contact" },
  },
  {
    id: 3,
    backgroundImage: Banner3,
    heading: "Zero Upfront. 100% Confidence.",
    description:
      "350+ successful placements. AI-powered matching. Pay nothing until your hire joins — and thrives.",
    cta: { text: "Brochure", download: BrochurePDF },
  },
];

/* ==================== BROCHURE MODAL ==================== */
const BrochureModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Prevent scroll when modal is open
  useEffect(() => {
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

      await fetch(
        "https://script.google.com/macros/s/AKfycbzvjtdmWY4p8qhftceu2NtrsnaN2BZK9SjMwUC9jTs_Zs9txVfqn2qcFtK7cV6YksTSvw/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: form,
        }
      );

      toast.success("Form submitted! Brochure downloading...");
      const link = document.createElement("a");
      link.href = BrochurePDF;
      link.download = "MerchantExpo_Brochure.pdf";
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

/* ==================== MAIN HOME COMPONENT ==================== */
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const timerRef = useRef(null);

  const startAutoPlay = () => {
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroData.length);
    }, 6000);
  };

  const stopAutoPlay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, []);

  const handleNext = () => {
    stopAutoPlay();
    setCurrentSlide((prev) => (prev + 1) % heroData.length);
    startAutoPlay();
  };

  const handlePrev = () => {
    stopAutoPlay();
    setCurrentSlide((prev) => (prev - 1 + heroData.length) % heroData.length);
    startAutoPlay();
  };

  const slide = heroData[currentSlide];

  const btnVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.06 },
    tap: { scale: 0.95 },
  };

  return (
    <section
      id="home"
      className="relative w-full h-[90vh] sm:h-[95vh] bg-black overflow-hidden"
      aria-label="Hero Slider"
    >
      {/* Background Image Transition */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.img
          key={slide.id}
          src={slide.backgroundImage}
          alt={slide.heading}
          className="absolute inset-0 w-full h-full object-cover object-top transform-gpu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4 sm:px-8">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center max-w-3xl mx-auto"
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {slide.heading}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 max-w-2xl">
            {slide.description}
          </p>

          {/* CTA Button */}
          <motion.div
            variants={btnVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            {slide.cta.link ? (
              <Link
                to={slide.cta.link}
                className="inline-flex items-center gap-2 px-6 py-3 text-white bg-black/30 border-2 border-[#f0b104] rounded-md backdrop-blur-sm hover:bg-black/10 hover:shadow-[0_0_25px_rgba(240,177,4,0.8)] transition"
              >
                {slide.cta.text}
              </Link>
            ) : (
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 text-white bg-black/30 border-2 border-[#f0b104] rounded-md backdrop-blur-sm hover:bg-black/10 hover:shadow-[0_0_25px_rgba(240,177,4,0.8)] transition"
              >
                <Download className="w-5 h-5" /> {slide.cta.text}
              </button>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 flex items-center z-10">
        <motion.button
          className="p-3 bg-black/40 hover:bg-black/60 rounded-full text-white ml-4 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePrev}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center z-10">
        <motion.button
          className="p-3 bg-black/40 hover:bg-black/60 rounded-full text-white mr-4 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleNext}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      <BrochureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default Home;
