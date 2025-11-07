import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Download, X } from "lucide-react";
import { Link } from "react-router-dom";

import Banner1 from "../assets/brands/hero.jpg";
import Banner2 from "../assets/brands/hero2.jpg";
import Banner3 from "../assets/banners/handshake2.png";
import BrochurePDF from "@/assets/brands/ct.pdf";

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
      const res = await fetch("/api/send-brochure-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, purpose }),
      });

      if (!res.ok) throw new Error("Failed to send email");

      const link = document.createElement("a");
      link.href = "/assets/brands/ct.pdf";
      link.download = "MerchantExpo_Brochure.pdf";
      link.click();

      alert("Thank you! Brochure is downloading.");
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setIsSubmitting(false);
      onClose();
      setName("");
      setEmail("");
      setPurpose("");
    }
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

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
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <h2 className="mb-5 text-2xl font-bold text-gray-900">Download Brochure</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f0b104] ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                disabled={isSubmitting}
              />
              {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f0b104] ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                disabled={isSubmitting}
              />
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Purpose for downloading</label>
              <textarea
                rows={3}
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f0b104] ${
                  errors.purpose ? "border-red-500" : "border-gray-300"
                }`}
                disabled={isSubmitting}
              />
              {errors.purpose && <p className="mt-1 text-xs text-red-600">{errors.purpose}</p>}
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-white bg-[#f0b104] rounded-md hover:bg-[#d89a03] transition disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : (
                  <>
                    <Download className="w-5 h-5" />
                    Download
                  </>
                )}
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
  const [isPaused, setIsPaused] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const timerRef = useRef(null);

  const startAutoPlay = () => {
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroData.length);
    }, 6000);
  };

  const pauseAutoPlay = () => timerRef.current && clearInterval(timerRef.current);

  useEffect(() => {
    if (!isPaused) startAutoPlay();
    return () => pauseAutoPlay();
  }, [isPaused]);

  const handleNext = () => {
    pauseAutoPlay();
    setCurrentSlide((prev) => (prev + 1) % heroData.length);
    setIsPaused(true);
  };

  const handlePrev = () => {
    pauseAutoPlay();
    setCurrentSlide((prev) => (prev - 1 + heroData.length) % heroData.length);
    setIsPaused(true);
  };

  const slide = heroData[currentSlide];

  const renderCTA = () => {
    const { cta } = slide;
    const btnVariants = {
      rest: { scale: 1 },
      hover: { scale: 1.06, transition: { type: "spring", stiffness: 400, damping: 12 } },
      tap: { scale: 0.95 },
    };
    const pulse = {
      animate: { scale: [1, 1.04, 1], transition: { repeat: Infinity, repeatDelay: 2, duration: 1.2 } },
    };
    const commonClasses = `
      inline-flex items-center justify-center gap-2 
      px-5 sm:px-6 py-2.5 sm:py-3 
      rounded-md font-semibold text-base sm:text-lg 
      text-white 
      bg-black/30 backdrop-blur-sm 
      border-2 border-[#f0b104] 
      transition-all duration-300 
      w-fit
      hover:bg-black/10 
      hover:shadow-[0_0_25px_rgba(240,177,4,0.9),_0_0_40px_rgba(240,177,4,0.6)]
    `;

    if (cta.link) {
      return (
        <motion.div variants={pulse} animate="animate">
          <motion.div variants={btnVariants} initial="rest" whileHover="hover" whileTap="tap">
            <Link to={cta.link} className={commonClasses}>
              {cta.text}
            </Link>
          </motion.div>
        </motion.div>
      );
    }

    if (cta.download) {
      return (
        <motion.div variants={pulse} animate="animate">
          <motion.div variants={btnVariants} initial="rest" whileHover="hover" whileTap="tap">
            <button onClick={() => setModalOpen(true)} className={commonClasses}>
              <Download className="w-5 h-5 sm:w-6 sm:h-6" />
              {cta.text}
            </button>
          </motion.div>
        </motion.div>
      );
    }
    return null;
  };

  return (
    <section className="relative w-full h-[90vh] sm:h-[95vh] bg-black z-0" id="home" aria-label="Hero Slider">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div key={slide.id} className="absolute inset-0 w-full h-full overflow-hidden">
            <img
              src={slide.backgroundImage}
              alt={slide.heading}
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4 sm:px-8">
        <motion.div
          key={`content-${slide.id}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center max-w-3xl sm:max-w-4xl mx-auto"
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
            {slide.heading}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 sm:mb-8 max-w-2xl">
            {slide.description}
          </p>
          {renderCTA()}
        </motion.div>
      </div>

      <div className="absolute inset-y-0 left-0 flex items-center z-10 pointer-events-none">
        <motion.button
          className="pointer-events-auto p-2 sm:p-3 bg-black/40 hover:bg-black/60 rounded-full text-white ml-2 sm:ml-4 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePrev}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </motion.button>
      </div>

      <div className="absolute inset-y-0 right-0 flex items-center z-10 pointer-events-none">
        <motion.button
          className="pointer-events-auto p-2 sm:p-3 bg-black/40 hover:bg-black/60 rounded-full text-white mr-2 sm:mr-4 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleNext}
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
        </motion.button>
      </div>

      <BrochureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default Home;