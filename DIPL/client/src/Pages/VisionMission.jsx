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
          Our Mission &{" "}
          <span className="text-[#f0b104] not-italic">Vision</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
       Mission to Empower. Vision to Lead.
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
              <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-600 to-orange-400 text-white shadow-lg shadow-orange-200">
                <TbTargetArrow size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
            </div>
             <p className="text-gray-700 leading-relaxed">
              We eliminate hiring guesswork. Every candidate is rigorously screened, skill-assessed, and AI-matched to your exact needs — so you onboard talent that’s not just qualified, but ready to contribute immediately.
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
              <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-400 text-white shadow-lg shadow-indigo-200">
                <FaRegLightbulb size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
            </div>
              <p className="text-gray-700 leading-relaxed mb-6">
              We’re building the future of hiring — where speed meets quality, risk is zero, and success is guaranteed. From Tamil Nadu to Telangana, Pondicherry to the GCC, we’re redefining how businesses scale with confidence.
            </p>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
