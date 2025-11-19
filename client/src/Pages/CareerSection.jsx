import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import office from '../assets/banners/office.jpg';
import { motion } from "framer-motion";

// Add React Helmet for SEO
import { Helmet } from "react-helmet-async"; // Recommended for React Router + Vite

const CareerSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <>
      {/* SEO Title & Meta Description */}
      <Helmet>
        <title>Industries & Locations We Serve | Core Talents India, Chennai & Dubai</title>
        <meta
          name="description"
          content="See how Core Talents supports hiring across IT, BPO, manufacturing, retail and more, serving companies in India, Chennai and Dubai with AI-powered recruitment solutions."
        />
        <meta property="og:title" content="Industries & Locations We Serve | Core Talents India, Chennai & Dubai" />
        <meta
          property="og:description"
          content="See how Core Talents supports hiring across IT, BPO, manufacturing, retail and more, serving companies in India, Chennai and Dubai with AI-powered recruitment solutions."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <section
        className="relative bg-fixed bg-center bg-cover text-white"
        id="choose"
        style={{
          backgroundImage: `url(${office})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div
          className="relative z-10 flex items-center justify-center min-h-[80vh] px-6 py-20"
          data-aos="fade-up"
        >
          <div className="max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6" data-aos="fade-down">
              Why Business Trust <span className="text-[#f0b104]">Core Talents</span>
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-6 " data-aos="fade-up" data-aos-delay="100">
              <span className="font-semibold text-[#f0b104]">Speed & Precision:</span> Businesses trust Core Talents to eliminate hiring delays with 48-hour shortlists and a 95% AI fit rate, powered by cutting-edge algorithms plus expert human vetting—delivering candidates perfectly aligned with your skills, culture, and budget.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-6" data-aos="fade-up" data-aos-delay="200">
              <span className="font-semibold text-[#f0b104]">Cost & Confidence:</span> Enjoy transparent pricing with no hidden fees or mark-ups—just a fixed cost per hire—and our hire first, pay later model means you only pay when your selected talent starts, removing all financial risk.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-8" data-aos="fade-up" data-aos-delay="300">
              <span className="font-semibold text-[#f0b104]">Reach & Reliability:</span> Scale effortlessly with 25+ trusted corporate partners and access to 1.2 million pre-vetted profiles across Pan-India and GCC regions, from Tier-2/3 cities to UAE, Saudi Arabia, Qatar, Bahrain, Oman, and Kuwait—making Core Talents the smarter, faster choice for leading enterprises.
            </p>

            {/* CTA Button */}
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ repeat: Infinity, repeatDelay: 2, duration: 1.2 }}
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 12 }}
              >
                <Link
                  to="/career"
                  className="
                    inline-flex items-center justify-center gap-2 
                    px-5 sm:px-6 py-2.5 sm:py-3 
                    rounded-md font-semibold text-base sm:text-lg 
                    text-white 
                    bg-black/30 backdrop-blur-sm 
                    border-2 border-[#f0b104] 
                    transition-all duration-300 
                    hover:bg-black/10 
                    hover:shadow-[0_0_25px_rgba(240,177,4,0.9),_0_0_40px_rgba(240,177,4,0.6)]
                  "
                >
                  Explore Careers →
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerSection;