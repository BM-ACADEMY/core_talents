import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TbTargetArrow } from "react-icons/tb";
import { FaRegLightbulb } from "react-icons/fa6";

const VisionMission = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <section className="relative bg-gray-200  py-20 px-6 lg:px-20 overflow-hidden">
      {/* Decorative gradient blur */}
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#f0b104]/10 rounded-full blur-3xl mix-blend-multiply"></div>

      {/* Header */}
      <div className="relative z-10 text-center mb-16" data-aos="zoom-in">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Our Vision &{" "}
          <span className="text-[#f0b104] not-italic">Mission</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
          Innovation, sustainability, and precision engineering that empower
          industries worldwide.
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Vision */}
        <div
          className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-2xl border border-gray-200 transition-transform transform hover:-translate-y-0.9"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-400 text-white shadow-lg shadow-indigo-200">
                <FaRegLightbulb size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To be a global leader in automation, precision engineering, and
              manufacturing solutions, recognized for our innovation,
              reliability, and commitment to excellence. We envision industries
              operating with seamless efficiency, driven by smart technologies
              and sustainable practices. By evolving with engineering
              advancements, we aim to empower businesses, create long-term
              stakeholder value, and contribute to a sustainable world.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div
          className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-2xl border border-gray-200 transition-transform transform hover:-translate-y-0.9"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-600 to-orange-400 text-white shadow-lg shadow-orange-200">
                <TbTargetArrow size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              At Rearline, our mission is to design, develop, and
              deliver innovative automation and precision engineering solutions
              that enable clients to achieve higher productivity, quality, and
              efficiency.
            </p>
            <p className="font-medium text-gray-800 mb-4">
              We are committed to:
            </p>
            <ul className="space-y-3 text-gray-700 list-disc pl-6">
              <li>
                Understanding customer needs with tailored, cost-effective
                solutions.
              </li>
              <li>
                Integrating cutting-edge technology with expert craftsmanship
                for durability.
              </li>
              <li>
                Fostering a culture of continuous improvement and innovation.
              </li>
              <li>
                Building long-term partnerships built on trust and growth.
              </li>
              <li>
                Promoting sustainable practices that minimize environmental
                impact.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
