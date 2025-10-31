import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const CareerSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section
      className="relative bg-fixed bg-center bg-cover text-white"
      id="choose"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop')",
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
      <span className="font-semibold text-[#f0b104] ">Speed & Precision:</span> Businesses trust Core Talents to eliminate hiring delays with 48-hour shortlists and a 95% AI fit rate, powered by cutting-edge algorithms plus expert human vetting—delivering candidates perfectly aligned with your skills, culture, and budget.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-6" data-aos="fade-up" data-aos-delay="200">
           <span className="font-semibold text-[#f0b104] ">Cost & Confidence:</span> Enjoy transparent pricing with no hidden fees or mark-ups—just a fixed cost per hire—and our hire first, pay later model means you only pay when your selected talent starts, removing all financial risk.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-8" data-aos="fade-up" data-aos-delay="300">
          <span className="font-semibold text-[#f0b104] ">Reach & Reliability:</span>  Scale effortlessly with 25+ trusted corporate partners and access to 1.2 million pre-vetted profiles across Pan-India and GCC regions, from Tier-2/3 cities to UAE, Saudi Arabia, Qatar, Bahrain, Oman, and Kuwait—making Core Talents the smarter, faster choice for leading enterprises.
          </p>

          {/* CTA Button */}
          <Link
            to="/career"
            className="inline-block bg-[#f0b104] hover:bg-[#c49926] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            Explore Careers →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
