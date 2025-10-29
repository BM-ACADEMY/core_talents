import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Banner1 from "../assets/img/banner1.jpg";
import Banner2 from "../assets/img/banner2.jpg";
import Banner3 from "../assets/img/banner3.jpg";

const heroData = [
  {
    id: 1,
    backgroundImage: Banner1,
    heading: "Engineering Innovation, Delivering Excellence",
    description:
      "We design and deliver world-class automation solutions that redefine productivity, efficiency, and precision for modern industries.",
    cta: { text: "Connect with Us" },
  },
  {
    id: 2,
    backgroundImage: Banner2,
    heading: "Automation That Empowers",
    description:
      "From line automation and SPMs to robotics and AGVs, our advanced technologies help businesses operate smarter, faster, and more efficiently.",
    cta: { text: "Connect with Us" },
  },
  {
    id: 3,
    backgroundImage: Banner3,
    heading: "Integrity. Quality. Customer-Centricity.",
    description:
      "Our values drive us to create tailor-made solutions that exceed expectations, ensuring long-term partnerships built on trust and results.",
    cta: { text: "Connect with Us" },
  },
  {
    id: 4,
    backgroundImage: Banner1,
    heading: "Precision at Every Step",
    description:
      "With unmatched craftsmanship and attention to detail, we provide durable and efficient solutions—from concept to commissioning.",
    cta: { text: "Connect with Us" },
  },
  {
    id: 5,
    backgroundImage: Banner2,
    heading: "Your Trusted Partner in Industrial Growth",
    description:
      "With a skilled team, state-of-the-art facilities, and relentless innovation, Rearline helps you stay ahead in today’s evolving industrial landscape.",
    cta: { text: "Connect with Us" },
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const startAutoPlay = () => {
    timerRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroData.length);
    }, 6000);
  };

  const pauseAutoPlay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    if (!isPaused) startAutoPlay();
    return () => pauseAutoPlay();
  }, [isPaused]);

  const handleNext = () => {
    pauseAutoPlay();
    setCurrentSlide((prevSlide) => (prevSlide + 1) % heroData.length);
    setIsPaused(true);
  };

  const handlePrev = () => {
    pauseAutoPlay();
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + heroData.length) % heroData.length
    );
    setIsPaused(true);
  };

  const slide = heroData[currentSlide];

  return (
    <div className="relative w-full h-[95vh] overflow-hidden group bg-black" id="home">
      {/* Background image with fade transition */}
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
          {/* Black Overlay */}
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

          {/* Single CTA Button */}
          <Link
            to="/contact"
            className="px-6 py-3 rounded-md font-semibold text-lg bg-[#f0b104] hover:bg-[#daa925] transition"
          >
            {slide.cta.text}
          </Link>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
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
