import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUsers, FaGlobeAfrica, FaBolt, FaCity } from "react-icons/fa";
import Aboutimage from "../assets/brands/ceo.jpg";

const content = {
  fullParagraphs: [
    "Core Talents is a next-generation AI-powered staffing and recruitment company, proudly operating as a specialized division of ABM Groups — a trusted name with over two decades of excellence in manpower solutions across South India and beyond.",
    "We combine cutting-edge AI matching technology with human expertise to deliver pre-verified, job-ready professionals — ensuring your team gets talent that performs from Day 1.",
    "Guided by strong principles of integrity, quality, and customer-centricity, we collaborate closely with our clients to deliver tailor-made recruitment solutions that achieve measurable success.",
    "Our mission is to redefine talent acquisition by combining the speed of automation with the precision of human intelligence — enabling businesses to grow faster with people who shape the future.",
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
            return {
              ...stat,
              displayValue: stat.displayValue + (increment > 0 ? increment : 1),
            };
          }
          return stat;
        });
        if (allCompleted) clearInterval(interval);
        return updated;
      });
    }, 40);
  };

  const paragraphsToShow = expanded
    ? content.fullParagraphs
    : content.fullParagraphs.slice(0, 2);

  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-white to-[#fff9ef]">
      {/* Decorative Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#f0b104]/20 blur-[100px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-poppins">
        {/* Title */}
        <div className="text-center mb-16" data-aos="zoom-in">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            About <span className="text-[#f0b104]">Us</span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Empowering organizations through AI-driven recruitment and people excellence.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div
            className="relative rounded-3xl overflow-hidden "
            data-aos="fade-right"
          >
            <div className="absolute inset-0" />
            <img
              src={content.image}
              alt="Core Talents Team"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              loading="lazy"
              onClick={runCounters}
            />
          </div>

          {/* Text Content */}
          <div className="text-gray-700" data-aos="zoom-in">
            <h2 className="text-3xl font-bold text-[#f0b104] mb-6">
              People. Process. Performance.
            </h2>

            <div className="space-y-5 leading-relaxed text-justify text-gray-800">
              {paragraphsToShow.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Read More Button */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-4 px-5 py-2 rounded-full bg-[#f0b104] text-white font-semibold hover:bg-[#d59c03] transition-all duration-300 shadow-md"
            >
              {expanded ? "Show Less" : "Read More"}
            </button>

            {/* Stats Section */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/60 backdrop-blur-xl p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#f0b104]/10 text-center"
                  data-aos="zoom-in-up"
                  data-aos-delay={i * 100}
                >
                  <div className="text-[#f0b104] text-5xl mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <h3 className="text-4xl font-extrabold text-gray-900">
                    {stat.displayValue}+
                  </h3>
                  <p className="text-sm font-medium text-gray-600 uppercase tracking-wide mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
