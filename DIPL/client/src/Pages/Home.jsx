import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

import Banner1 from "../assets/banners/handshake2.png";
import Banner2 from "../assets/banners/banners1.png";
import Banner3 from "../assets/banners/banners2.png";
import BrochurePDF from "@/assets/brands/Core Talents Portfolio.pdf";   // <-- add your file here

const heroData = [
  {
    id: 1,
    backgroundImage: Banner1,
    heading: " Hire First. Pay Later.",
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
    cta: { text: "Brochure", download: BrochurePDF },   // <-- download prop
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  /* ---------- Auto-play logic ---------- */
  const startAutoPlay = () => {
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroData.length);
    }, 6000);
  };
  const pauseAutoPlay = () => clearInterval(timerRef.current);

  useEffect(() => {
    if (!isPaused) startAutoPlay();
    return pauseAutoPlay;
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

  /* ---------- CTA renderer ---------- */
  const renderCTA = () => {
    const { cta } = slide;

    /* Normal navigation button */
    if (cta.link) {
      return (
        <Link
          to={cta.link}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-lg bg-[#f0b104] hover:bg-[#daa925] transition"
        >
          {cta.text}
        </Link>
      );
    }

    /* Download button */
    if (cta.download) {
      return (
        <a
          href={cta.download}
          download="CoreTalents_Brochure.pdf"   // optional – forces the filename
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-lg bg-[#f0b104] hover:bg-[#daa925] transition"
        >
          <Download size={20} />
          {cta.text}
        </a>
      );
    }

    return null;
  };

  return (
    <div className="relative w-full h-[95vh] overflow-hidden group bg-black" id="home">
      {/* Background image */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={slide.id}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={slide.backgroundImage}
            alt={slide.heading}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center max-w-4xl"
        >
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">{slide.heading}</h1>
          <p className="text-base sm:text-lg text-gray-200 mb-6">{slide.description}</p>

          {/* CTA – now handles both link & download */}
          {renderCTA()}
        </motion.div>
      </div>

      {/* Navigation arrows */}
      <motion.button
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 rounded-full text-white cursor-pointer z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={handlePrev}
      >
        <ChevronLeft size={32} />
      </motion.button>
      <motion.button
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 rounded-full text-white cursor-pointer z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleNext}
      >
        <ChevronRight size={32} />
      </motion.button>
    </div>
  );
};

export default Home;