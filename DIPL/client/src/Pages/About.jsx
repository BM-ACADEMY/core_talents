import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const content = {
  paragraphs: [
    "At Rearline, we are driven by innovation, precision, and a passion for engineering excellence. Since our inception, we have been dedicated to delivering high-quality automation solutions, fixtures, tooling, gauges, and manufacturing services that empower industries to operate smarter, faster, and more efficiently.",
    "Our expertise spans across line automation, SPMs, test rigs, vision systems, AGVs, robotics integration, and control panel programming — ensuring every project we undertake is executed with cutting-edge technology and unmatched craftsmanship.",
    "Guided by our core principles of integrity, quality, and customer-centricity, we partner closely with our clients to understand their needs and create tailor-made solutions that deliver measurable results.",
    "From concept to commissioning, we focus on precision, durability, and efficiency in every product and service we provide.",
    "With a highly skilled team, state-of-the-art facilities, and a relentless commitment to innovation, Rearline stands as a trusted partner for businesses looking to enhance productivity and maintain a competitive edge in today’s fast-evolving industrial landscape."
  ],
  image:
    "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=600&h=600&auto=format&fit=crop",
};

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    // ✅ overflow-x-hidden prevents unwanted horizontal scroll
    <div className="relative pt-20 pb-20 overflow-x-hidden">
      {/* ✅ responsive background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-[#f0b104]/10 rounded-full blur-3xl mix-blend-multiply pointer-events-none"></div>

      <section className="max-w-7xl mx-auto px-4 font-poppins">
        {/* Heading Section */}
        <div className="text-center mb-12" data-aos="zoom-in">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            About <span className="text-[#f0b104] not-italic">Us</span>
          </h1>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Left Image Section */}
          <div
            className="relative shadow-xl rounded-2xl overflow-hidden shrink-0"
            data-aos="fade-right"
          >
            <img
              className="max-w-lg w-full object-cover rounded-2xl"
              src={content.image}
              alt="Main visual"
            />
          </div>

          {/* Right Content Section */}
          <div
            className="max-w-2xl text-base text-slate-600 text-justify"
            data-aos="fade-left"
          >
            {content.paragraphs.map((para, idx) => (
              <p
                key={idx}
                className={`leading-relaxed ${idx === 0 ? "mt-0" : "mt-5"}`}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
