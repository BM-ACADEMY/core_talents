import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUsers, FaGlobeAfrica, FaBolt, FaCity } from "react-icons/fa";
import Aboutimage from '../assets/banners/gir-large.png';

const content = {
  fullParagraphs: [
    "Core Talents is a next-generation AI-powered staffing and recruitment company, proudly operating as a specialized division of ABM Groups — a trusted name with over two decades of excellence in manpower solutions across South India and beyond.",
    "We combine cutting-edge AI matching technology with human expertise to deliver pre-verified, job-ready professionals — ensuring your team gets talent that performs from Day 1.",
    "Guided by strong principles of integrity, quality, and customer-centricity, we collaborate closely with our clients to deliver tailor-made recruitment solutions that achieve measurable success.",
    "Our mission is to redefine talent acquisition by combining the speed of automation with the precision of human intelligence — enabling businesses to grow faster with people who shape the future."
  ],
  image: Aboutimage,
};

const countersData = [
  { value: 25, label: "Corporate Clients", icon: <FaCity /> },
  { value: 350, label: "Candidates Placed", icon: <FaUsers /> },
  { value: 48, label: "Hour Hiring Cycle", icon: <FaBolt /> },
  { value: 18, label: "States & 6 Countries", icon: <FaGlobeAfrica /> },
];

export default function About() {
  const [expanded, setExpanded] = useState(false);
  const [stats, setStats] = useState(
    countersData.map((item) => ({ ...item, displayValue: 0 }))
  );

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    runCounters();
  }, []);

  const runCounters = () => {
    setStats(countersData.map((item) => ({ ...item, displayValue: 0 })));

    const interval = setInterval(() => {
      setStats((prev) => {
        let allCompleted = true;

        const updated = prev.map((stat, i) => {
          const target = countersData[i].value;
          if (stat.displayValue < target) {
            allCompleted = false;
            const increment = Math.ceil((target - stat.displayValue) / 10);
            return { ...stat, displayValue: stat.displayValue + (increment > 0 ? increment : 1) };
          }
          return stat;
        });

        if (allCompleted) {
          clearInterval(interval);
        }

        return updated;
      });
    }, 40); // Smooth counter
  };

  const paragraphsToShow = expanded
    ? content.fullParagraphs
    : content.fullParagraphs.slice(0, 2);

  return (
    <section
      id="about"
      className="relative py-16 md:py-20 bg-white overflow-hidden" // Removed overflow-x-hidden from parent
    >
      {/* Background Blur Effect - Positioned Absolutely, Won't Cause Scroll */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-[#f0b104]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-poppins">
        {/* Heading */}
        <div className="text-center mb-12" data-aos="zoom-in">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            About <span className="text-[#f0b104]">Us</span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Image */}
          <div
            className="relative rounded-2xl overflow-hidden shadow-xl"
            data-aos="fade-right"
          >
            <img
              src={content.image}
              alt="Core Talents Team"
              className="w-full h-auto max-h-96 md:max-h-full object-cover rounded-2xl cursor-pointer transition-transform hover:scale-105 duration-300"
              onClick={runCounters}
              loading="lazy"
            />
          </div>

          {/* Text & Stats */}
          <div className="flex flex-col justify-center" data-aos="fade-left">
            <h2 className="text-2xl md:text-3xl font-bold text-[#f0b104] mb-6 text-left md:text-right">
              People. Process. Performance.
            </h2>

            {/* Paragraphs */}
            <div className="space-y-5 text-gray-700 text-justify">
              {paragraphsToShow.map((para, idx) => (
                <p key={idx} className="leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Read More / Less */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-[#f0b104] font-semibold mt-4 hover:underline transition-all duration-300 self-start md:self-end"
            >
              {expanded ? "Show Less..." : "More..."}
            </button>

            {/* Stats Grid */}
            <div className="mt-12 grid grid-cols-2 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="text-black text-4xl">{stat.icon}</div>
                  <div>
                    <h3 className="text-4xl sm:text-5xl font-extrabold text-[#f0b104]">
                      {stat.displayValue}+
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-black uppercase tracking-wider mt-1">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}